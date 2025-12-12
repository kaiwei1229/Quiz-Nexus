let currentIndex = 0;
let currentQuestion = null;
let score = 0;
let timeLeft = 10;
let timerId = null;
let maxTime = 5; // 從設定讀取
let totalQuestions = 7; // 從設定讀取
let questionStartTime = 0; // 記錄題目開始時間
let timeoutWarning = null; // 計時警告元素
let gamePhase = "playing"; // 遊戲階段："playing" 或 "showQuestion"

// 隨機打亂陣列
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 創建時間警告邊框
function createTimeoutWarning(remainingTime = 2) {
    if (timeoutWarning) {
        // 更新動畫速度
        updateTimeoutWarningSpeed(remainingTime);
        return;
    }
    timeoutWarning = document.createElement('div');
    timeoutWarning.id = 'timeout-warning-border';
    timeoutWarning.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 4px solid #ff0000;
        box-shadow: inset 0 0 40px rgba(255, 0, 0, 0.6), 0 0 60px rgba(255, 0, 0, 0.8);
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
    `;
    
    const style = document.createElement('style');
    style.id = 'timeout-warning-style';
    style.textContent = `
        @keyframes timeout-warning {
            0%, 100% { 
                opacity: 0;
                box-shadow: inset 0 0 40px rgba(255, 0, 0, 0), 0 0 40px rgba(255, 0, 0, 0);
            }
            50% { 
                opacity: 1;
                box-shadow: inset 0 0 60px rgba(255, 0, 0, 0.8), 0 0 80px rgba(255, 0, 0, 1);
            }
        }
    `;
    document.head.appendChild(style);
    
    timeoutWarning.style.animation = `timeout-warning 0.3s ease-in-out infinite`;
    document.body.appendChild(timeoutWarning);
}

// 更新警告邊框動畫速度
function updateTimeoutWarningSpeed(remainingTime) {
    if (!timeoutWarning) return;
    
    // 計算動畫速度：時間越少，閃爍越快
    // remainingTime: 2 -> 0.3s, 1.5 -> 0.2s, 1 -> 0.15s, 0.5 -> 0.1s
    let animationSpeed = 0.3;
    if (remainingTime < 1.5) {
        animationSpeed = 0.2;
    }
    if (remainingTime < 1) {
        animationSpeed = 0.15;
    }
    if (remainingTime < 0.5) {
        animationSpeed = 0.1;
    }
    
    timeoutWarning.style.animation = `timeout-warning ${animationSpeed}s ease-in-out infinite`;
}

function initGame() {
    // 讀取遊戲設定
    totalQuestions = parseInt(localStorage.getItem('gameQuestions')) || 7;
    maxTime = parseInt(localStorage.getItem('gameTime')) || 5;
    const selectedCategory = localStorage.getItem('gameCategory');
    
    // 依主題過濾題庫（若有指定分類），再隨機打亂
    let pool = QUESTIONS;
    if (selectedCategory) {
        pool = QUESTIONS.filter(q => q.category === selectedCategory);
    }
    shuffle(pool);
    
    currentIndex = 0;
    score = 0;
    // 將題庫來源指向過濾後的 pool（淺拷貝避免影響原題庫）
    window.CURRENT_POOL = pool.slice(0);
    loadQuestion();
}

function loadQuestion() {
    const pool = window.CURRENT_POOL || QUESTIONS;
    if (currentIndex >= totalQuestions || currentIndex >= pool.length) {
        return endGame();
    }

    currentQuestion = pool[currentIndex];
    timeLeft = maxTime;
    questionStartTime = Date.now(); // 記錄開始時間
    gamePhase = "showQuestion"; // 先進入題目顯示階段

    // 隱藏選項，禁用點擊
    const optionsGrid = document.getElementById("options-grid");
    if (optionsGrid) {
        optionsGrid.classList.remove("show");
        optionsGrid.style.visibility = 'hidden';
        optionsGrid.style.opacity = '0';
    }

    // 隱藏題目卡片
    const questionCard = document.querySelector(".question-card");
    if (questionCard) {
        questionCard.classList.remove("show");
    }

    // 清空舊題目
    document.getElementById("q-category").textContent = "";
    document.getElementById("q-text").textContent = "";

    // 顯示問題計數器
    const counter = document.getElementById("question-counter");
    if (counter) {
        counter.textContent = `第 ${currentIndex + 1} 題`;
        counter.classList.remove("show");
        // 重新觸發動畫
        void counter.offsetWidth;
        counter.classList.add("show");
    }

    // 1 秒後顯示題目
    setTimeout(() => {
        document.getElementById("q-category").textContent = currentQuestion.category;
        document.getElementById("q-text").textContent = currentQuestion.question;
        
        // 顯示題目卡片（淡入）
        if (questionCard) {
            questionCard.classList.remove("show");
            void questionCard.offsetWidth;
            questionCard.classList.add("show");
        }

        // 重置選項樣式但隱藏（移除語音模式字母標註，統一為純文字）
        currentQuestion.options.forEach((text, i) => {
            const btn = document.getElementById("opt-" + i);
            btn.textContent = text;
            btn.className = "btn-choice";
            btn.disabled = true; // 禁用點擊
        });

        document.getElementById("score").textContent = score;
        document.getElementById("time").textContent = maxTime;
        document.getElementById("timer-inner").style.width = "100%";

        if (timerId) clearInterval(timerId);
        
        // 再等 2 秒後顯示選項並開始計時
        setTimeout(() => {
            gamePhase = "playing"; // 進入遊戲計時階段
            
            // 顯示選項
            if (optionsGrid) {
                optionsGrid.classList.add("show");
                optionsGrid.style.visibility = 'visible';
                optionsGrid.style.opacity = '1';
            }
            
            // 啟用按鈕點擊
            currentQuestion.options.forEach((text, i) => {
                const btn = document.getElementById("opt-" + i);
                btn.disabled = false;
            });
            
            // 重置計時起點為現在
            questionStartTime = Date.now();
            
            // 開始計時
            timerId = setInterval(tick, 10); // 平滑更新：每 10ms 更新一次
        }, 2000);
    }, 1000);
}

function tick() {
    const elapsed = (Date.now() - questionStartTime) / 1000;
    const remainingTime = Math.max(0, maxTime - elapsed);
    
    // 顯示到小數點第一位
    const displayTime = remainingTime.toFixed(1);
    document.getElementById("time").textContent = displayTime;
    
    // 平滑更新進度條
    const percentage = (remainingTime / maxTime) * 100;
    document.getElementById("timer-inner").style.width = percentage + "%";

    // 時間低於 2 秒時顯示警告，並根據剩餘時間調整閃爍速度
    if (remainingTime < 2 && remainingTime > 0) {
        if (!timeoutWarning) {
            createTimeoutWarning(remainingTime);
        } else {
            updateTimeoutWarningSpeed(remainingTime);
        }
    } else if (timeoutWarning) {
        timeoutWarning.remove();
        timeoutWarning = null;
    }

    if (remainingTime <= 0) {
        clearInterval(timerId);
        if (timeoutWarning) {
            timeoutWarning.remove();
            timeoutWarning = null;
        }
        // 時間到播放答錯音效
        const timeoutSound = new Audio('assets/wrong.mp3');
        timeoutSound.volume = 0.7;
        timeoutSound.play().catch(err => console.log('無法播放時間到音效:', err));
        handleAnswer(-1);
    }
}

function handleAnswer(choice) {
    clearInterval(timerId);
    
    // 移除超時警告
    if (timeoutWarning) {
        timeoutWarning.remove();
        timeoutWarning = null;
    }
    
    // 隱藏選項網格
    const optionsGrid = document.getElementById("options-grid");
    if (optionsGrid) {
        optionsGrid.classList.remove("show");
    }
    
    // 計算答題花費的時間
    const timeElapsed = (Date.now() - questionStartTime) / 1000; // 秒數
    const timeUsed = Math.min(timeElapsed, maxTime);
    
    // 禁用所有按鈕
    for (let i = 0; i < 4; i++) {
        document.getElementById("opt-" + i).disabled = true;
    }
    
    // 計算分數：答對越快分數越高（0-200分）
    let points = 0;
    if (choice === currentQuestion.answer) {
        // 答對：根據剩餘時間計算分數
        // 剩餘時間比例：(maxTime - timeUsed) / maxTime
        const timeRatio = Math.max(0, (maxTime - timeUsed) / maxTime);
        // 分數範圍：最低 50 分，最高 200 分
        points = Math.round(50 + timeRatio * 150);
        
        // 播放正確答案音效
        const correctSound = new Audio('assets/correct.mp3');
        correctSound.volume = 0.7;
        correctSound.play().catch(err => console.log('無法播放正確音效:', err));
        
        // 顯示正確答案效果
        document.getElementById("opt-" + choice).classList.add("correct");
        score += points;
    } else {
        // 答錯：0 分
        points = 0;
        
        // 播放錯誤音效
        const wrongSound = new Audio('assets/wrong.mp3');
        wrongSound.volume = 0.7;
        wrongSound.play().catch(err => console.log('無法播放錯誤音效:', err));
        
        // 顯示錯誤和正確答案
        if (choice >= 0) {
            document.getElementById("opt-" + choice).classList.add("wrong");
        }
        document.getElementById("opt-" + currentQuestion.answer).classList.add("correct");
    }

    document.getElementById("score").textContent = score;

    currentIndex++;
    setTimeout(loadQuestion, 1500);
}

function endGame() {
    // 計算平均分數
    const avgScore = Math.round(score / totalQuestions);
    let rating = "";
    
    if (avgScore >= 180) {
        rating = "完美大師！";
    } else if (avgScore >= 150) {
        rating = "優秀！";
    } else if (avgScore >= 120) {
        rating = "良好";
    } else if (avgScore >= 80) {
        rating = "及格";
    } else {
        rating = "再接再厲";
    }
    
    // 設置 body 為垂直置中
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    document.body.style.minHeight = '100vh';
    
    // 清空遊戲容器但保留 body 其他內容
    const container = document.querySelector('.container');
    if (container) {
        container.style.width = '100%';
        container.style.maxWidth = '1200px';
    }
    if (container) {
        container.innerHTML = `
            <div class="result-card" style="
                background: linear-gradient(145deg, rgba(26, 0, 51, 0.95), rgba(15, 0, 32, 0.95));
                border: 3px solid #8b2bdc;
                border-radius: 30px;
                padding: 4rem 3rem;
                box-shadow: 0 0 60px rgba(138, 43, 220, 0.6);
                max-width: 600px;
                animation: fade-in 1s ease-out;
                margin: 0 auto;
                text-align: center;
            ">
                <h1 class="result-title" style="
                    font-size: 4em;
                    margin-bottom: 1rem;
                    background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    filter: drop-shadow(0 0 30px rgba(255, 0, 255, 0.8));
                ">遊戲結束</h1>
                
                <div class="result-rating" style="font-size: 3em; margin: 2rem 0;">${rating}</div>
                
                <div class="result-score" style="
                    font-size: 2.5em;
                    color: #ff00ff;
                    margin: 2rem 0;
                    text-shadow: 0 0 20px #ff00ff;
                    font-weight: 700;
                ">總分：${score}</div>
                
                <div class="result-stats" style="
                    font-size: 1.3em;
                    color: #00ffff;
                    margin-bottom: 3rem;
                    text-shadow: 0 0 10px #00ffff;
                ">
                    答題數：${totalQuestions} 題<br>
                    平均分：${avgScore} 分/題
                </div>
                
                <button id="result-back" class="result-btn" style="
                    padding: 1.5rem 3rem;
                    font-size: 1.5em;
                    background: linear-gradient(135deg, #8b2bdc, #ff00ff);
                    border: 2px solid #ff00ff;
                    color: #ffffff;
                    border-radius: 15px;
                    cursor: pointer;
                    box-shadow: 0 0 30px rgba(255, 0, 255, 0.6);
                    font-weight: 700;
                    letter-spacing: 2px;
                    transition: all 0.3s ease;
                " onmouseover="if(!('ontouchstart' in window)){this.style.transform='scale(1.1)'; this.style.boxShadow='0 0 50px rgba(255, 0, 255, 1)';}" 
                   onmouseout="if(!('ontouchstart' in window)){this.style.transform='scale(1)'; this.style.boxShadow='0 0 30px rgba(255, 0, 255, 0.6)';}">
                    返回選單
                </button>
            </div>
        `;
        // 準備淡出樣式
        if (!document.getElementById('page-fade-style')) {
            const s = document.createElement('style');
            s.id = 'page-fade-style';
            s.textContent = `
                @keyframes page-fade-out { from { opacity: 1; } to { opacity: 0; } }
                .page-fade-out { animation: page-fade-out 350ms ease-in forwards; }
            `;
            document.head.appendChild(s);
        }
        const backBtn = document.getElementById('result-back');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                document.body.classList.add('page-fade-out');
                setTimeout(() => { window.location.href = 'menu.html'; }, 350);
            });
        }
    }
}
