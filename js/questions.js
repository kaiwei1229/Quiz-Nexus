// js/questions.js
// 至少 120 題題庫，每題：category, question, options[4], answer (0~3)

const QUESTIONS = [
    // 1–12 地理 Geography
    {
        category: "地理",
        question: "世界上面積最大的洲是？",
        options: ["非洲", "歐洲", "亞洲", "南美洲"],
        answer: 2
    },
    {
        category: "地理",
        question: "世界上面積最大的國家是？",
        options: ["美國", "中國", "俄羅斯", "加拿大"],
        answer: 2
    },
    {
        category: "地理",
        question: "世界上面積最小的國家是？",
        options: ["摩納哥", "馬爾他", "梵蒂岡", "盧森堡"],
        answer: 2
    },
    {
        category: "地理",
        question: "日本的首都是哪裡？",
        options: ["大阪", "東京", "名古屋", "京都"],
        answer: 1
    },
    {
        category: "地理",
        question: "韓國的首都是哪裡？",
        options: ["首爾", "釜山", "仁川", "大邱"],
        answer: 0
    },
    {
        category: "地理",
        question: "澳洲（澳大利亞）的首都是哪裡？",
        options: ["雪梨", "墨爾本", "坎培拉", "布里斯本"],
        answer: 2
    },
    {
        category: "地理",
        question: "加拿大的首都是哪裡？",
        options: ["溫哥華", "多倫多", "蒙特婁", "渥太華"],
        answer: 3
    },
    {
        category: "地理",
        question: "巴西的首都是哪裡？",
        options: ["里約熱內盧", "聖保羅", "巴西利亞", "薩爾瓦多"],
        answer: 2
    },
    {
        category: "地理",
        question: "中國的首都是哪裡？",
        options: ["上海", "北京", "廣州", "深圳"],
        answer: 1
    },
    {
        category: "地理",
        question: "印度的首都是哪裡？",
        options: ["孟買", "新德里", "加爾各答", "清奈"],
        answer: 1
    },
    {
        category: "地理",
        question: "世界上海拔最高的山峰是？",
        options: ["K2", "珠穆朗瑪峰", "干城章嘉峰", "馬納斯盧峰"],
        answer: 1
    },
    {
        category: "地理",
        question: "世界上最大的沙漠是？",
        options: ["撒哈拉沙漠", "戈壁沙漠", "阿拉伯沙漠", "塔克拉瑪干沙漠"],
        answer: 0
    },

    // 13–24 自然科學 Science
    {
        category: "自然科學",
        question: "水的化學式是？",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: 0
    },
    {
        category: "自然科學",
        question: "地球繞著哪一顆天體公轉？",
        options: ["月球", "金星", "太陽", "火星"],
        answer: 2
    },
    {
        category: "自然科學",
        question: "人體最大的器官是？",
        options: ["肺", "肝臟", "皮膚", "腦"],
        answer: 2
    },
    {
        category: "自然科學",
        question: "常溫常壓下，水在幾度攝氏會沸騰？",
        options: ["50℃", "80℃", "90℃", "100℃"],
        answer: 3
    },
    {
        category: "自然科學",
        question: "人體有幾對肺？",
        options: ["一對", "兩對", "三對", "四對"],
        answer: 0
    },
    {
        category: "自然科學",
        question: "人體紅血球的主要功能是？",
        options: ["運送氧氣", "製造荷爾蒙", "傳遞神經訊號", "消化食物"],
        answer: 0
    },
    {
        category: "自然科學",
        question: "下列哪一種動物是哺乳類？",
        options: ["鯨魚", "青蛙", "鱷魚", "鯊魚"],
        answer: 0
    },
    {
        category: "自然科學",
        question: "牛奶放在室溫中久置會變酸，是因為？",
        options: ["蒸發", "發酵", "升華", "凝固"],
        answer: 1
    },
    {
        category: "自然科學",
        question: "地球大氣中含量最多的氣體是？",
        options: ["氧氣", "氮氣", "二氧化碳", "氫氣"],
        answer: 1
    },
    {
        category: "自然科學",
        question: "血壓測量時常見的單位是？",
        options: ["公斤", "公尺", "毫米汞柱", "安培"],
        answer: 2
    },
    {
        category: "自然科學",
        question: "太陽系中最大的行星是？",
        options: ["地球", "火星", "木星", "土星"],
        answer: 2
    },
    {
        category: "自然科學",
        question: "哪一種動物被稱為“沙漠之舟”？",
        options: ["馬", "駱駝", "羊駝", "驢"],
        answer: 1
    },

    // 25–36 歷史 History
    {
        category: "歷史",
        question: "第二次世界大戰結束於哪一年？",
        options: ["1943年", "1945年", "1950年", "1939年"],
        answer: 1
    },
    {
        category: "歷史",
        question: "誰被稱為“物理學之父”，發明經典力學體系？",
        options: ["牛頓", "愛因斯坦", "伽利略", "法拉第"],
        answer: 0
    },
    {
        category: "歷史",
        question: "美國《獨立宣言》發表的年份是？",
        options: ["1776年", "1789年", "1812年", "1865年"],
        answer: 0
    },
    {
        category: "歷史",
        question: "中國歷史上第一個統一全國的皇帝是？",
        options: ["漢高祖劉邦", "秦始皇嬴政", "唐太宗李世民", "宋太祖趙匡胤"],
        answer: 1
    },
    {
        category: "歷史",
        question: "“文藝復興”最早興起於哪個地區？",
        options: ["法國", "德國", "義大利", "英國"],
        answer: 2
    },
    {
        category: "歷史",
        question: "被稱為“拿破崙”的歷史人物是？",
        options: ["法國軍事家", "英國國王", "德國哲學家", "俄國作曲家"],
        answer: 0
    },
    {
        category: "歷史",
        question: "“絲綢之路”最主要是連結中國與哪個地區？",
        options: ["北極", "南極", "歐亞地區", "南美洲"],
        answer: 2
    },
    {
        category: "歷史",
        question: "古埃及文明興盛於哪一條河流流域？",
        options: ["尼羅河", "亞馬遜河", "多瑙河", "黃河"],
        answer: 0
    },
    {
        category: "歷史",
        question: "隋朝時期開鑿的大運河主要連結哪兩大河流？",
        options: ["長江與珠江", "黃河與珠江", "黃河與長江", "松花江與長江"],
        answer: 2
    },
    {
        category: "歷史",
        question: "“三國演義”中不屬於三國的是哪一個？",
        options: ["魏", "吳", "蜀", "燕"],
        answer: 3
    },
    {
        category: "歷史",
        question: "古代雅典所在的國家是今天的哪一國？",
        options: ["義大利", "希臘", "西班牙", "土耳其"],
        answer: 1
    },
    {
        category: "歷史",
        question: "鄭和下西洋時所屬的朝代是？",
        options: ["元朝", "明朝", "清朝", "唐朝"],
        answer: 1
    },

    // 37–48 文化與語文 Culture & Language
    {
        category: "文化",
        question: "《哈利波特》系列小說的作者是？",
        options: ["J.K.羅琳", "托爾金", "馬克·吐溫", "海明威"],
        answer: 0
    },
    {
        category: "文化",
        question: "“羅密歐與茱麗葉”出自哪位劇作家？",
        options: ["莎士比亞", "莫里哀", "契訶夫", "易卜生"],
        answer: 0
    },
    {
        category: "文化",
        question: "下列哪一項不屬於中國“四大名著”？",
        options: ["《紅樓夢》", "《水滸傳》", "《西遊記》", "《哈利波特》"],
        answer: 3
    },
    {
        category: "文化",
        question: "“成語”大多由幾個字組成？",
        options: ["二字", "三字", "四字", "五字以上"],
        answer: 2
    },
    {
        category: "文化",
        question: "“春節”是依照哪一個曆法計算的節日？",
        options: ["國曆", "農曆", "佛曆", "伊斯蘭曆"],
        answer: 1
    },
    {
        category: "文化",
        question: "“櫻花”是下列哪個國家的重要象徵？",
        options: ["韓國", "泰國", "日本", "越南"],
        answer: 2
    },
    {
        category: "文化",
        question: "“七夕情人節”源自哪個傳說？",
        options: ["牛郎織女", "白蛇傳", "梁祝", "嫦娥奔月"],
        answer: 0
    },
    {
        category: "文化",
        question: "一般中文書寫方向傳統上是？",
        options: ["由左至右，橫排", "由右至左，橫排", "由右至左，直排", "由下往上，直排"],
        answer: 2
    },
    {
        category: "文化",
        question: "“孔子”主要被視為哪一種身分？",
        options: ["軍事家", "思想家與教育家", "醫生", "畫家"],
        answer: 1
    },
    {
        category: "文化",
        question: "“羅馬字母”指的是現今常用的哪一種字母？",
        options: ["希臘字母", "拉丁字母", "西里爾字母", "阿拉米字母"],
        answer: 1
    },
    {
        category: "文化",
        question: "“日語平假名”一套共有多少個基本字母？",
        options: ["26個", "46個", "50個", "60個以上"],
        answer: 1
    },
    {
        category: "文化",
        question: "“萬里長城”最初的主要功能是？",
        options: ["交通運輸", "軍事防禦", "灌溉工程", "商業貿易"],
        answer: 1
    },

    // 49–60 藝術與娛樂 Entertainment
    {
        category: "娛樂",
        question: "電影《鐵達尼號》中的女主角名為？",
        options: ["Rose", "Emma", "Anna", "Lily"],
        answer: 0
    },
    {
        category: "娛樂",
        question: "動畫《哆啦A夢》中，大雄最常求助的角色是？",
        options: ["胖虎", "靜香", "哆啦A夢", "小夫"],
        answer: 2
    },
    {
        category: "娛樂",
        question: "《復仇者聯盟》中，哪位英雄使用雷神之鎚？",
        options: ["鋼鐵人", "雷神索爾", "美國隊長", "蜘蛛人"],
        answer: 1
    },
    {
        category: "娛樂",
        question: "《名偵探柯南》中的主角本名是？",
        options: ["江戶川柯南", "工藤新一", "毛利小五郎", "服部平次"],
        answer: 1
    },
    {
        category: "娛樂",
        question: "哪一部是宮崎駿執導的動畫電影？",
        options: ["《你的名字》", "《神隱少女》", "《灌籃高手》", "《小當家》"],
        answer: 1
    },
    {
        category: "娛樂",
        question: "“BIGBANG”、“BTS”、“BLACKPINK”主要屬於哪種類型？",
        options: ["搖滾樂團", "韓國流行音樂團體", "日本演歌團體", "交響樂團"],
        answer: 1
    },
    {
        category: "娛樂",
        question: "“瑪利歐”這個角色最早出現在哪一家公司出品的遊戲？",
        options: ["SEGA", "任天堂", "索尼", "微軟"],
        answer: 1
    },
    {
        category: "娛樂",
        question: "《寶可夢》中，皮卡丘的屬性是？",
        options: ["火系", "水系", "電系", "草系"],
        answer: 2
    },
    {
        category: "娛樂",
        question: "下列哪一部是美國超級英雄電影？",
        options: ["《蜘蛛人》", "《你的名字》", "《聲之形》", "《龍貓》"],
        answer: 0
    },
    {
        category: "娛樂",
        question: "鋼琴上標準的“白鍵”數量是？",
        options: ["44鍵", "52鍵", "60鍵", "88鍵"],
        answer: 1
    },
    {
        category: "娛樂",
        question: "一部標準電影的播放格率通常為每秒幾格？",
        options: ["12格", "24格", "30格", "60格"],
        answer: 1
    },
    {
        category: "娛樂",
        question: "下列哪一個樂器屬於弦樂器？",
        options: ["長笛", "小提琴", "小號", "木琴"],
        answer: 1
    },

    // 61–72 體育 Sports
    {
        category: "體育",
        question: "足球比賽中，一隊同時在場上的球員人數是？",
        options: ["9人", "10人", "11人", "12人"],
        answer: 2
    },
    {
        category: "體育",
        question: "籃球比賽中，一隊同時在場上的球員人數是？",
        options: ["4人", "5人", "6人", "7人"],
        answer: 1
    },
    {
        category: "體育",
        question: "桌球比賽中，一局通常打到幾分？",
        options: ["11分", "15分", "21分", "25分"],
        answer: 0
    },
    {
        category: "體育",
        question: "奧林匹克運動會夏季賽事通常是每隔多久舉辦一次？",
        options: ["每2年", "每3年", "每4年", "每5年"],
        answer: 2
    },
    {
        category: "體育",
        question: "羽毛球比賽中，雙方發球與接發球必須將球打過哪個區域？",
        options: ["底線", "中線", "網子上方", "邊線外"],
        answer: 2
    },
    {
        category: "體育",
        question: "馬拉松正式賽程的距離約為？",
        options: ["21公里", "30公里", "42.195公里", "50公里"],
        answer: 2
    },
    {
        category: "體育",
        question: "下列哪一項是冬季奧運會的比賽項目？",
        options: ["競速滑冰", "足球", "網球", "舉重"],
        answer: 0
    },
    {
        category: "體育",
        question: "“三分球線”屬於哪種運動的場地標記？",
        options: ["足球", "棒球", "籃球", "排球"],
        answer: 2
    },
    {
        category: "體育",
        question: "棒球比賽中，打者揮棒但沒打到好球區的球且裁判判為擊球意圖叫做？",
        options: ["壞球", "好球", "界外球", "四壞保送"],
        answer: 1
    },
    {
        category: "體育",
        question: "網球比賽中，發球擦到網子但仍落在正確發球區的情況稱為？",
        options: ["Ace球", "Let球", "Fault", "Out"],
        answer: 1
    },
    {
        category: "體育",
        question: "足球比賽中，完全沒失球的情況常被稱為？",
        options: ["帽子戲法", "烏龍球", "零封對手", "黃牌"],
        answer: 2
    },
    {
        category: "體育",
        question: "排球比賽中，以下哪一個動作是禁止的？",
        options: ["用手掌擊球", "用頭頂球", "連續兩次觸球", "跳起扣殺"],
        answer: 2
    },

    // 73–84 生活常識 Daily Life
    {
        category: "生活常識",
        question: "成人一般每天建議睡眠時間約為？",
        options: ["3–4小時", "5–6小時", "7–9小時", "10–12小時"],
        answer: 2
    },
    {
        category: "生活常識",
        question: "下列哪一種是健康飲食建議？",
        options: ["多吃油炸食物", "多吃蔬果與全穀雜糧", "只吃肉不吃菜", "完全不喝水"],
        answer: 1
    },
    {
        category: "生活常識",
        question: "洗手時，下列哪一項是最重要的？",
        options: ["只用清水沖一下", "至少搓洗20秒以上", "只洗手掌", "只洗手背"],
        answer: 1
    },
    {
        category: "生活常識",
        question: "口罩配戴時，哪一項做法較正確？",
        options: ["戴在下巴就好", "遮住口鼻並密合臉部", "只遮住嘴巴", "只遮住鼻子"],
        answer: 1
    },
    {
        category: "生活常識",
        question: "下列哪一項屬於節能行為？",
        options: ["長時間開著所有燈光", "出門時關閉電器電源", "將冷氣設定16度", "整天開著電風扇及冷氣"],
        answer: 1
    },
    {
        category: "生活常識",
        question: "在室內使用瓦斯爐時，最重要的安全措施之一是？",
        options: ["關掉燈光", "打開窗戶保持通風", "將瓦斯桶放在床邊", "把瓦斯爐貼近窗簾"],
        answer: 1
    },
    {
        category: "生活常識",
        question: "若不小心接到疑似詐騙電話，較好的處理方式是？",
        options: ["立刻提供個資配合", "保持冷靜並掛掉電話", "匯款以免出事", "加對方為好友"],
        answer: 1
    },
    {
        category: "生活常識",
        question: "長時間使用電腦時，下列何者較符合保護視力？",
        options: ["完全關掉室內燈光", "螢幕亮度開到最亮", "每隔一段時間讓眼睛休息遠眺", "把螢幕貼近眼睛"],
        answer: 2
    },
    {
        category: "生活常識",
        question: "一般情況下，冷藏食品要避免放在室溫多久以上才安全？",
        options: ["超過2小時要注意", "放一整天都沒關係", "放兩三天都可以", "沒有限制"],
        answer: 0
    },
    {
        category: "生活常識",
        question: "下列哪一項不是常見的再生能源？",
        options: ["太陽能", "風力", "水力", "煤炭"],
        answer: 3
    },
    {
        category: "生活常識",
        question: "地震發生時，在室內較建議的避難動作是？",
        options: ["躲到窗邊看風景", "立刻搭電梯下樓", "就地趴下、掩護、穩住", "跑到陽台邊緣"],
        answer: 2
    },
    {
        category: "生活常識",
        question: "下列哪一種行為最容易造成上網帳號被盜？",
        options: ["定期更換密碼", "使用簡單的123456當密碼", "啟用兩步驟驗證", "不隨意點擊不明連結"],
        answer: 1
    },

    // 85–96 數學與邏輯 Math & Logic
    {
        category: "數學",
        question: "1 + 2 + 3 + 4 的結果是？",
        options: ["8", "9", "10", "11"],
        answer: 2
    },
    {
        category: "數學",
        question: "一個長方形長為6，寬為4，面積為？",
        options: ["10", "12", "20", "24"],
        answer: 3
    },
    {
        category: "數學",
        question: "圓周率 π 大約等於？",
        options: ["2.14", "3.14", "3.41", "4.13"],
        answer: 1
    },
    {
        category: "數學",
        question: "下列哪個數是偶數？",
        options: ["11", "13", "16", "19"],
        answer: 2
    },
    {
        category: "數學",
        question: "3 × 7 的值是？",
        options: ["18", "20", "21", "24"],
        answer: 2
    },
    {
        category: "數學",
        question: "100 的 10% 是多少？",
        options: ["5", "10", "15", "20"],
        answer: 1
    },
    {
        category: "數學",
        question: "如果現在是24小時制的13:00，換算成12小時制是？",
        options: ["上午1點", "中午1點", "下午1點", "晚上1點"],
        answer: 2
    },
    {
        category: "數學",
        question: "一打雞蛋共有幾顆？",
        options: ["10顆", "11顆", "12顆", "13顆"],
        answer: 2
    },
    {
        category: "數學",
        question: "若一件衣服原價1000元，打八折後價格為？",
        options: ["600元", "700元", "800元", "900元"],
        answer: 2
    },
    {
        category: "數學",
        question: "在座標平面上，原點的座標是？",
        options: ["(0,0)", "(1,1)", "(0,1)", "(1,0)"],
        answer: 0
    },
    {
        category: "數學",
        question: "一個正三角形的三個內角大小各為？",
        options: ["30度", "45度", "60度", "90度"],
        answer: 2
    },
    {
        category: "數學",
        question: "下列哪個是質數？",
        options: ["9", "15", "17", "21"],
        answer: 2
    },

    // 97–108 科技與電腦 Tech
    {
        category: "科技",
        question: "網址開頭常見的“http”代表？",
        options: ["超文字傳輸協定", "高傳輸電壓", "硬體測試程式", "高速交通平台"],
        answer: 0
    },
    {
        category: "科技",
        question: "常見的作業系統不包括下列哪一個？",
        options: ["Windows", "Android", "Linux", "Photoshop"],
        answer: 3
    },
    {
        category: "科技",
        question: "在電腦中，1 Byte 通常等於幾個 bit？",
        options: ["4 bit", "8 bit", "16 bit", "32 bit"],
        answer: 1
    },
    {
        category: "科技",
        question: "下列哪一個是網路瀏覽器？",
        options: ["Chrome", "Word", "Excel", "PowerPoint"],
        answer: 0
    },
    {
        category: "科技",
        question: "智慧型手機中常見的“GPS”主要用於？",
        options: ["播放音樂", "定位與導航", "拍照", "管理聯絡人"],
        answer: 1
    },
    {
        category: "科技",
        question: "電子郵件 English 縮寫是？",
        options: ["SMS", "MMS", "E-mail", "FTP"],
        answer: 2
    },
    {
        category: "科技",
        question: "下列哪一項不利於資訊安全？",
        options: ["定期更新系統", "安裝防毒軟體", "隨意下載不明檔案", "設定強度高的密碼"],
        answer: 2
    },
    {
        category: "科技",
        question: "在鍵盤上，常用來刪除游標前一個字元的鍵是？",
        options: ["Enter鍵", "Shift鍵", "Backspace鍵", "Tab鍵"],
        answer: 2
    },
    {
        category: "科技",
        question: "下列哪一個檔案副檔名通常是圖片？",
        options: [".txt", ".jpg", ".mp3", ".mp4"],
        answer: 1
    },
    {
        category: "科技",
        question: "常見的無線網路名稱縮寫是？",
        options: ["USB", "Wi-Fi", "CPU", "RAM"],
        answer: 1
    },
    {
        category: "科技",
        question: "下列何者最容易被用來散布電腦病毒？",
        options: ["實體書", "紙本海報", "惡意程式附件", "鉛筆"],
        answer: 2
    },
    {
        category: "科技",
        question: "在程式設計中，通常用來表示“或”邏輯運算的是？",
        options: ["AND", "OR", "NOT", "XOR"],
        answer: 1
    },

    // 109–120 冷知識 Fun Trivia
    {
        category: "冷知識",
        question: "哪種動物除了人類以外也會使用工具？",
        options: ["黑猩猩", "牛", "羊", "雞"],
        answer: 0
    },
    {
        category: "冷知識",
        question: "蜂蜜放久不容易壞，是因為？",
        options: ["含水量非常低", "含有大量油脂", "含有大量酒精", "含有大量澱粉"],
        answer: 0
    },
    {
        category: "冷知識",
        question: "一般來說，彩虹最多可以出現幾種顏色被人眼分辨？",
        options: ["3種", "5種", "7種", "9種以上"],
        answer: 2
    },
    {
        category: "冷知識",
        question: "貓咪打呼嚕（呼嚕聲）通常代表？",
        options: ["不舒服", "緊張", "開心或放鬆", "生氣"],
        answer: 2
    },
    {
        category: "冷知識",
        question: "企鵝主要生活在？",
        options: ["北極地區", "南極地區及南半球", "赤道附近", "沙漠地區"],
        answer: 1
    },
    {
        category: "冷知識",
        question: "下列哪一種水果切開後容易氧化變褐色？",
        options: ["香蕉", "蘋果", "西瓜", "鳳梨"],
        answer: 1
    },
    {
        category: "冷知識",
        question: "人類正常體溫大約為？",
        options: ["34–35℃", "36–37℃", "38–39℃", "40–41℃"],
        answer: 1
    },
    {
        category: "冷知識",
        question: "多數人的指紋圖案主要分成弓形、螺旋形與？",
        options: ["三角形", "網格形", "箕形（箕狀）", "方格形"],
        answer: 2
    },
    {
        category: "冷知識",
        question: "下列哪一種植物是仙人掌常見的特徵？",
        options: ["大葉片", "針狀葉或刺", "會爬藤", "落葉喬木"],
        answer: 1
    },
    {
        category: "冷知識",
        question: "一般情況下，海水的味道主要是因為？",
        options: ["糖分", "鹽分", "油脂", "維他命"],
        answer: 1
    },
    {
        category: "冷知識",
        question: "蝴蝶主要用身體哪一部分品嚐味道？",
        options: ["觸角", "翅膀", "腳", "眼睛"],
        answer: 2
    },
    {
        category: "冷知識",
        question: "下列哪種動物是夜行性動物的代表？",
        options: ["公雞", "貓頭鷹", "松鼠", "麻雀"],
        answer: 1
    },

    // 121–132 反詐騙與網路安全 Anti-Fraud & Cyber Safety
    {
        category: "反詐騙",
        question: "若有人自稱客服要求你提供一次性密碼（OTP），你應該？",
        options: ["立刻提供以免帳號被鎖", "要求對方傳簡訊確認", "拒絕並自行聯絡官方客服", "提供部分數字就好"],
        answer: 2
    },
    {
        category: "反詐騙",
        question: "下列何者是常見的投資詐騙特徵？",
        options: ["保證高獲利無風險", "建議多元分散投資", "提供合法證照查詢", "提醒投資有風險"],
        answer: 0
    },
    {
        category: "反詐騙",
        question: "詐騙訊息常用哪種方式造成壓力讓你立即行動？",
        options: ["多給優惠券", "強調限時處理或帳號將被停用", "提供理財建議", "推送廣告"],
        answer: 1
    },
    {
        category: "反詐騙",
        question: "收到陌生人傳的『求救匯款』訊息，最安全的做法是？",
        options: ["直接匯款避免延誤", "回訊息確認是否本人", "打電話給當事人本人確認", "向對方詢問更多資訊"],
        answer: 2
    },
    {
        category: "反詐騙",
        question: "以下哪一項密碼最安全？",
        options: ["12345678", "生日＋名字", "英文大小寫＋數字＋符號組合", "手機號碼"],
        answer: 2
    },
    {
        category: "反詐騙",
        question: "哪一種行為會增加帳號被盜風險？",
        options: ["定期更換密碼", "使用雙重驗證", "不同平台使用相同密碼", "登入時注意網址"],
        answer: 2
    },
    {
        category: "反詐騙",
        question: "釣魚網站通常會怎麼偽裝？",
        options: ["提供免費遊戲", "模仿銀行或官方登入頁面", "顯示非常複雜的頁面", "無任何圖片"],
        answer: 1
    },
    {
        category: "反詐騙",
        question: "ATM 無法解除分期付款，是哪種詐騙常見說詞？",
        options: ["假交友詐騙", "假投資詐騙", "假網購詐騙", "假客服詐騙"],
        answer: 3
    },
    {
        category: "反詐騙",
        question: "LINE、IG 突然跳出不明登入通知，你應該？",
        options: ["不管它", "等下一次通知再說", "立即改密碼並啟用雙重驗證", "把通知關掉"],
        answer: 2
    },
    {
        category: "反詐騙",
        question: "以下哪一項屬於安全的網路行為？",
        options: ["使用公共 Wi-Fi 登入網銀", "下載來源不明的 APK", "不點擊不明簡訊連結", "借別人帳號登入遊戲"],
        answer: 2
    },
    {
        category: "反詐騙",
        question: "遇到愛情交友詐騙常見的警訊是？",
        options: ["對方願意通話", "對方不斷要求匯款或投資", "對方提議見面", "對方提供身分證照片"],
        answer: 1
    },
    {
        category: "反詐騙",
        question: "官方機構聯絡民眾時下列何者為真？",
        options: ["會要求提供密碼", "會要求操作 ATM", "可能寄掛號信或要求本人臨櫃", "會要求安裝遠端操控 App"],
        answer: 2
    },

    // 133–144 防災教育 Disaster Preparedness
    {
        category: "防災教育",
        question: "地震發生時，在室內最正確的動作是？",
        options: ["往外跑", "站在窗邊", "蹲下、掩護、穩住", "搭電梯離開"],
        answer: 2
    },
    {
        category: "防災教育",
        question: "以下哪一項是家庭防災包必備品？",
        options: ["香水", "緊急飲用水", "大量零錢", "筆記本"],
        answer: 1
    },
    {
        category: "防災教育",
        question: "火災時若濃煙瀰漫，應該？",
        options: ["站起來快走", "待在高處呼吸", "用濕布摀口鼻並貼地移動", "吸氣保持鎮定"],
        answer: 2
    },
    {
        category: "防災教育",
        question: "地震後若聞到瓦斯味，應該？",
        options: ["打開電燈查看", "立即使用手機", "打開窗戶並關閉瓦斯", "躲回房間"],
        answer: 2
    },
    {
        category: "防災教育",
        question: "颱風期間最常見的危險行為是？",
        options: ["補充食物", "外出拍照或看海", "固定盆栽", "檢查排水"],
        answer: 1
    },
    {
        category: "防災教育",
        question: "家中的大型家具應該如何防震？",
        options: ["放在輪子上方便移動", "靠窗擺放", "使用防傾倒固定器", "用書本墊高"],
        answer: 2
    },
    {
        category: "防災教育",
        question: "火災逃生時最危險的行為是？",
        options: ["趴低逃生", "搭電梯", "沿牆摸索前進", "使用濕毛巾"],
        answer: 1
    },
    {
        category: "防災教育",
        question: "地震後要避免使用哪一項設備？",
        options: ["手電筒", "吹風機", "電梯", "水壺"],
        answer: 2
    },
    {
        category: "防災教育",
        question: "地震速報（國家級警報）發出時代表？",
        options: ["已經沒有危險", "可能發生海嘯", "附近可能出現強震", "要立即避難到戶外"],
        answer: 2
    },
    {
        category: "防災教育",
        question: "使用瓦斯爐時避免一氧化碳中毒的方式是？",
        options: ["關上所有門窗", "在浴室內使用", "保持良好通風", "使用蠟燭取代燈光"],
        answer: 2
    },
    {
        category: "防災教育",
        question: "地震後最應該注意哪件事？",
        options: ["立即回家睡覺", "檢查是否有火災、瓦斯外洩", "拍照上傳社群", "打電話問朋友"],
        answer: 1
    },
    {
        category: "防災教育",
        question: "下列哪些物品可作為臨時避難生活用品？",
        options: ["睡袋、緊急糧食、水", "咖啡、酒精飲料", "昂貴飾品", "大量現金"],
        answer: 0
    },

    // 145–156 心理健康
    {
        category: "心理健康",
        question: "下列哪一項是壓力過大的常見徵兆？",
        options: ["睡眠變差", "一直感到開心", "胃口非常好", "注意力提升"],
        answer: 0
    },
    {
        category: "心理健康",
        question: "遇到朋友情緒低落，最好的做法是？",
        options: ["立刻要他振作", "告訴他你的問題更嚴重", "傾聽並陪伴他", "忽略他"],
        answer: 2
    },
    {
        category: "心理健康",
        question: "心理困擾持續超過兩週，建議？",
        options: ["自己忍耐", "告訴身邊的人並尋求專業協助", "不讓任何人知道", "大量運動取代治療"],
        answer: 1
    },
    {
        category: "心理健康",
        question: "下列哪種活動有助於紓壓？",
        options: ["良好睡眠與運動", "暴飲暴食", "過度熬夜", "長時間滑手機"],
        answer: 0
    },
    {
        category: "心理健康",
        question: "焦慮時，哪項方法較能幫助調節情緒？",
        options: ["深呼吸或地面化技巧", "喝大量能量飲料", "增加工作量", "避免所有社交"],
        answer: 0
    },
    {
        category: "心理健康",
        question: "想支持朋友情緒時應避免？",
        options: ["傾聽", "批評他的感受", "鼓勵尋求協助", "陪伴"],
        answer: 1
    },
    {
        category: "心理健康",
        question: "長期睡眠不足最可能造成？",
        options: ["記憶力下降", "身體免疫力提升", "心情變好", "注意力增加"],
        answer: 0
    },
    {
        category: "心理健康",
        question: "以下哪項行為可幫助維持心理健康？",
        options: ["均衡作息與運動", "忽略情緒", "完全不休息", "暴飲暴食"],
        answer: 0
    },
    {
        category: "心理健康",
        question: "當你覺得快要情緒崩潰時，最重要的是？",
        options: ["完全隱藏情緒", "尋求信任的人或專業協助", "責怪自己", "繼續承受壓力"],
        answer: 1
    },
    {
        category: "心理健康",
        question: "下列哪一項不是心理諮商師的工作？",
        options: ["傾聽與支持", "協助探索情緒與想法", "給予醫療處方箋", "提供應對方式"],
        answer: 2
    },
    {
        category: "心理健康",
        question: "遇到情緒困擾時應避免？",
        options: ["與可信賴的人談談", "吸毒或酗酒逃避", "休息放鬆", "尋求協助"],
        answer: 1
    },
    {
        category: "心理健康",
        question: "心理健康代表？",
        options: ["完全沒有負面情緒", "能健康面對生活壓力", "永遠保持快樂", "永不感到焦慮"],
        answer: 1
    },

    // 157–168 永續環境 ESG
    {
        category: "永續環境",
        question: "全球暖化的主要原因之一是？",
        options: ["二氧化碳排放增加", "森林面積增加", "海洋上升", "人口減少"],
        answer: 0
    },
    {
        category: "永續環境",
        question: "下列哪一種方式最能減少塑膠污染？",
        options: ["使用一次性塑膠袋", "自備購物袋", "購買更多瓶裝水", "使用塑膠吸管"],
        answer: 1
    },
    {
        category: "永續環境",
        question: "節能減碳的日常方法包括？",
        options: ["長時間開燈", "隨手關閉電源", "增加冷氣溫度", "一直開著窗戶"],
        answer: 1
    },
    {
        category: "永續環境",
        question: "哪一項是可再生能源？",
        options: ["石油", "太陽能", "天然氣", "煤炭"],
        answer: 1
    },
    {
        category: "永續環境",
        question: "下列哪一項是生態系破壞的主因？",
        options: ["森林砍伐", "種樹", "保育動物", "海洋淨灘"],
        answer: 0
    },
    {
        category: "永續環境",
        question: "SDGs 永續發展目標的核心精神是？",
        options: ["只管環境不管經濟", "照顧環境、社會與經濟平衡", "只追求經濟成長", "只看發達國家的需求"],
        answer: 1
    },
    {
        category: "永續環境",
        question: "減少碳足跡的方式是？",
        options: ["多搭大眾運輸", "每天開車上班", "買越多越好", "不分類垃圾"],
        answer: 0
    },
    {
        category: "永續環境",
        question: "海洋漂浮的巨大塑膠垃圾帶稱為？",
        options: ["藍色空間", "太平洋垃圾帶", "綠色漩渦", "黑洞"],
        answer: 1
    },
    {
        category: "永續環境",
        question: "樹木對永續最重要的貢獻是？",
        options: ["增加噪音", "產生更多垃圾", "吸收二氧化碳並釋放氧氣", "減少水源"],
        answer: 2
    },
    {
        category: "永續環境",
        question: "垃圾分類的目的之一是？",
        options: ["讓垃圾車更重", "提升回收效率", "製造更多垃圾", "讓處理更麻煩"],
        answer: 1
    },
    {
        category: "永續環境",
        question: "下列哪項行為最不永續？",
        options: ["重複使用產品", "購買二手物", "大量丟棄可用物品", "修補舊衣"],
        answer: 2
    },
    {
        category: "永續環境",
        question: "購買環保標章商品的好處是？",
        options: ["品質較差", "可能較不環保", "代表符合某些環保標準", "只能在國外買到"],
        answer: 2
    },

    // 169–180 程式設計 Programming & CS Literacy
    {
        category: "程式設計",
        question: "程式中的變數（Variable）主要用來？",
        options: ["儲存資料", "顯示圖片", "播放音樂", "關閉程式"],
        answer: 0
    },
    {
        category: "程式設計",
        question: "下列哪個符號通常用於等於比較（大多數語言）？",
        options: ["=", "==", "===", ":="],
        answer: 1
    },
    {
        category: "程式設計",
        question: "哪一段敘述最符合『迴圈（Loop）』的概念？",
        options: ["只執行一次", "重複執行直到條件成立或結束", "隨機執行", "跳過所有程式碼"],
        answer: 1
    },
    {
        category: "程式設計",
        question: "若程式出現錯誤並停止，通常稱為？",
        options: ["Debug", "Crash（當掉）", "Compile", "Optimize"],
        answer: 1
    },
    {
        category: "程式設計",
        question: "Git 的用途是？",
        options: ["寫小說用的", "版本控制與協作", "下載遊戲", "壓縮圖片"],
        answer: 1
    },
    {
        category: "程式設計",
        question: "HTML 的主要用途是？",
        options: ["控制網站結構", "編譯程式", "處理影像", "訓練 AI"],
        answer: 0
    },
    {
        category: "程式設計",
        question: "下列哪個是合法的變數名稱？",
        options: ["123value", "value_name", "my-value", "class"],
        answer: 1
    },
    {
        category: "程式設計",
        question: "API 的作用是？",
        options: ["加速 Wi-Fi", "裝飾網站外觀", "讓不同程式交換資料", "增加硬碟容量"],
        answer: 2
    },
    {
        category: "程式設計",
        question: "程式中的 if 用來？",
        options: ["儲存資料", "做條件判斷", "播放音效", "美化介面"],
        answer: 1
    },
    {
        category: "程式設計",
        question: "下列哪個敘述最接近『演算法』？",
        options: ["隨便寫寫的程式碼", "解決問題的步驟流程", "電腦硬體", "畫圖的方法"],
        answer: 1
    },
    {
        category: "程式設計",
        question: "程式中的陣列（Array）用於？",
        options: ["儲存多筆資料", "畫面顯示", "音樂同步", "加密資料"],
        answer: 0
    },
    {
        category: "程式設計",
        question: "下列哪項行為最容易造成資訊安全風險？",
        options: ["從官方網站下載軟體", "使用公開 Wi-Fi 連銀行", "啟用雙重驗證", "定期備份資料"],
        answer: 1
    },

    // 181–192 英文 English
    {
        category: "英文",
        question: "Which word means 'quickly'?",
        options: ["slowly", "fast", "quietly", "early"],
        answer: 1
    },
    {
        category: "英文",
        question: "Which sentence is grammatically correct?",
        options: ["He go to school every day.", "He goes to school every day.", "He going to school every day.", "He gone to school every day."],
        answer: 1
    },
    {
        category: "英文",
        question: "What is the opposite of 'increase'?",
        options: ["rise", "grow", "reduce", "expand"],
        answer: 2
    },
    {
        category: "英文",
        question: "Which word best fits: 'I ____ a book yesterday.'",
        options: ["read", "reads", "reading", "readed"],
        answer: 0
    },
    {
        category: "英文",
        question: "What does the idiom 'break the ice' mean?",
        options: ["break something cold", "start a conversation comfortably", "fall into water", "freeze the air"],
        answer: 1
    },
    {
        category: "英文",
        question: "Which sentence uses the correct tense?",
        options: ["I am study now.", "I studying now.", "I am studying now.", "I study now."],
        answer: 2
    },
    {
        category: "英文",
        question: "Choose the correct word: 'She is taller ____ her sister.'",
        options: ["than", "then", "to", "with"],
        answer: 0
    },
    {
        category: "英文",
        question: "Which word means 'to help someone'?",
        options: ["avoid", "assist", "argue", "announce"],
        answer: 1
    },
    {
        category: "英文",
        question: "Which is a correct question form?",
        options: ["You like coffee?", "Do you like coffee?", "Like you coffee?", "Do like you coffee?"],
        answer: 1
    },
    {
        category: "英文",
        question: "What does 'environment' mean?",
        options: ["a type of food", "the natural world around us", "a kind of job", "a tool for building"],
        answer: 1
    },
    {
        category: "英文",
        question: "Choose the correct article: 'He is ____ engineer.'",
        options: ["a", "an", "the", "no article"],
        answer: 1
    },
    {
        category: "英文",
        question: "Which sentence describes a future plan?",
        options: ["I go to Japan last year.", "I am going to Japan next week.", "I go to Japan every day.", "I going to Japan yesterday."],
        answer: 1
    }
];
