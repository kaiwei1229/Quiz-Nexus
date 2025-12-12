// js/bgm.js

let bgmMenu = null;
let bgmGame = null;
let currentBGM = null;
let isMuted = false;

// 讀取靜音設定
if (localStorage.getItem("bgmMuted") === "true") {
    isMuted = true;
}

// 初始化音樂
function initBGM() {
    if (!bgmMenu) {
        bgmMenu = new Audio("assets/background.mp3");
        bgmGame = new Audio("assets/game.mp3");

        bgmMenu.loop = true;
        bgmGame.loop = true;

        bgmMenu.volume = 0;
        bgmGame.volume = 0;

        // 預先載入音樂檔案
        bgmMenu.preload = "auto";
        bgmGame.preload = "auto";

        if (isMuted) {
            bgmMenu.muted = true;
            bgmGame.muted = true;
        }

        // 監聽載入事件，確保音樂完全載入
        bgmMenu.addEventListener('canplaythrough', () => {
            console.log('背景音樂載入完成');
        });

        bgmGame.addEventListener('canplaythrough', () => {
            console.log('遊戲音樂載入完成');
        });

        // 處理載入錯誤
        bgmMenu.addEventListener('error', (e) => {
            console.error('背景音樂載入失敗:', e);
        });

        bgmGame.addEventListener('error', (e) => {
            console.error('遊戲音樂載入失敗:', e);
        });
    }
}

// 淡入（1秒）
function fadeIn(audio) {
    audio.volume = 0;
    const step = 0.05;

    const interval = setInterval(() => {
        if (audio.volume < 0.5) {
            audio.volume += step;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

// 淡出（1秒）
function fadeOut(audio, callback) {
    const step = 0.05;

    const interval = setInterval(() => {
        if (audio.volume > step) {
            audio.volume = Math.max(0, audio.volume - step);
        } else {
            audio.volume = 0;
            clearInterval(interval);
            audio.pause();
            audio.currentTime = 0;
            if (callback) callback();
        }
    }, 50);
}

// 停止目前音樂並淡出
function stopCurrentBGM(callback) {
    if (currentBGM && currentBGM.volume > 0) {
        fadeOut(currentBGM, callback);
    } else if (currentBGM) {
        currentBGM.pause();
        currentBGM.currentTime = 0;
        if (callback) callback();
    } else {
        if (callback) callback();
    }
}

// 播主選單 BGM
function playMenuBGM() {
    initBGM();
    
    // 如果已經在播放選單音樂，就不要重新播放
    if (currentBGM === bgmMenu && !bgmMenu.paused) {
        return;
    }

    // 如果當前播放的是遊戲音樂，需要淡出並切換
    if (currentBGM === bgmGame && !bgmGame.paused) {
        fadeOut(bgmGame, () => {
            currentBGM = bgmMenu;
            startMenuBGM();
        });
    } else {
        // 否則直接切換
        currentBGM = bgmMenu;
        startMenuBGM();
    }
}

// 啟動選單 BGM 播放
function startMenuBGM() {
    if (bgmMenu.readyState >= 3) {
        bgmMenu.play().then(() => {
            fadeIn(bgmMenu);
        }).catch((error) => {
            console.log('自動播放被阻止，等待用戶互動:', error);
            // 如果自動播放失敗，設置監聽器等待用戶互動
            setupAutoPlay();
        });
    } else {
        bgmMenu.addEventListener('canplay', function playWhenReady() {
            bgmMenu.play().then(() => {
                fadeIn(bgmMenu);
            }).catch((error) => {
                console.log('自動播放被阻止，等待用戶互動:', error);
                setupAutoPlay();
            });
            bgmMenu.removeEventListener('canplay', playWhenReady);
        });
    }
}

// 播遊戲 BGM
function playGameBGM() {
    initBGM();
    
    // 如果已經在播放遊戲音樂，就不要重新播放
    if (currentBGM === bgmGame && !bgmGame.paused) {
        return;
    }

    // 如果當前播放的是選單音樂，需要淡出並切換
    if (currentBGM === bgmMenu && !bgmMenu.paused) {
        fadeOut(bgmMenu, () => {
            currentBGM = bgmGame;
            startGameBGM();
        });
    } else {
        // 否則直接切換
        currentBGM = bgmGame;
        startGameBGM();
    }
}

// 啟動遊戲 BGM 播放
function startGameBGM() {
    if (bgmGame.readyState >= 3) {
        bgmGame.play().then(() => {
            fadeIn(bgmGame);
        }).catch((error) => {
            console.log('自動播放被阻止，等待用戶互動:', error);
            // 如果自動播放失敗，設置監聽器等待用戶互動
            setupAutoPlay();
        });
    } else {
        bgmGame.addEventListener('canplay', function playWhenReady() {
            bgmGame.play().then(() => {
                fadeIn(bgmGame);
            }).catch((error) => {
                console.log('自動播放被阻止，等待用戶互動:', error);
                setupAutoPlay();
            });
            bgmGame.removeEventListener('canplay', playWhenReady);
        });
    }
}

// 靜音切換
function toggleMute() {
    isMuted = !isMuted;
    localStorage.setItem("bgmMuted", isMuted ? "true" : "false");

    if (bgmMenu) bgmMenu.muted = isMuted;
    if (bgmGame) bgmGame.muted = isMuted;

    const icon = document.getElementById("mute-btn-icon");
    icon.textContent = isMuted ? "🔇" : "🔊";
}

// 自動啟動音樂（在用戶第一次互動時）
let autoPlayTriggered = false;

function tryAutoPlay() {
    if (!autoPlayTriggered && currentBGM) {
        autoPlayTriggered = true;
        currentBGM.play().catch(() => {
            // 如果還是失敗，等待下一次互動
            autoPlayTriggered = false;
        });
    }
}

// 監聽各種用戶互動事件
function setupAutoPlay() {
    const events = ['click', 'touchstart', 'keydown', 'mousemove'];
    events.forEach(event => {
        document.addEventListener(event, tryAutoPlay, { once: true });
    });
}

// 在畫面左上角產生按鈕
function createMuteButton() {
    const btn = document.createElement("button");
    btn.id = "mute-btn";
    btn.style.position = "fixed";
    btn.style.top = "10px";
    btn.style.right = "10px";
    btn.style.fontSize = "20px";
    btn.style.color = "white";
    btn.style.background = "transparent";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "10000";
    btn.style.pointerEvents = "auto";
    btn.style.width = "40px";
    btn.style.height = "40px";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";
    btn.style.borderRadius = "50%";
    btn.style.backgroundColor = "rgba(138, 43, 220, 0.3)";
    btn.style.border = "2px solid #8b2bdc";
    btn.style.boxShadow = "0 0 15px rgba(138, 43, 220, 0.5)";
    btn.style.transition = "all 0.3s ease";

    btn.innerHTML = `<span id="mute-btn-icon">${isMuted ? "🔇" : "🔊"}</span>`;

    btn.addEventListener("click", toggleMute);
    
    // 只在非觸控設備添加懸停效果
    if (!('ontouchstart' in window)) {
        btn.addEventListener("mouseover", () => {
            btn.style.boxShadow = "0 0 30px rgba(138, 43, 220, 0.8)";
            btn.style.transform = "scale(1.1)";
        });
        
        btn.addEventListener("mouseout", () => {
            btn.style.boxShadow = "0 0 15px rgba(138, 43, 220, 0.5)";
            btn.style.transform = "scale(1)";
        });
    }

    document.body.appendChild(btn);
}
