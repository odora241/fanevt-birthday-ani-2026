// ==========================================================
//  🎂 BIRTHDAY GAME — 設定ファイル
// ==========================================================

const CONFIG = {

    // ── 画像・動画ファイル ──────────────────────────────────
    assets: {
        reticleSrc:         './assets/reticle.png',
        titleImgSrc:        './assets/mv-oto.png',
        // titleImgClearedSrc: './assets/mv-oto-clear.png',
        introVideoSrc: './assets/intro.mp4',
        bouncerSrc: [
            './assets/bouncer01.png',
            './assets/bouncer02.png',
        ],
    },

    // ── ローディング画面 ────────────────────────────────────
    loading: {
        title1: 'Sky',
        title2: 'Burst.',
        text:   'Loading',
    },

    // ── タイトル画面 ────────────────────────────────────────
    title: {
        instructions: [
            '下から飛んでくる風船を撃ち抜こう',
            '連続Hitでコンボボーナス',
            '1123💀は撃つな ー ライフ−1',
            'サングラスは高得点ターゲット🕶',
        ],
    },

    // ── ステージアップ吹き出しメッセージ ───────────────────
    stageUpMessages: [
        'スピードあげるよー！',
        'スピードアーーーップ！',
        '兄者ならもっといけるよね？！',
    ],

    // ── ゲームオーバー画面 ──────────────────────────────────
    gameOver: {
        message: '本当はもっといけるよな？',
    },

    // ── クリア（エンディング）画面 ──────────────────────────
    ending: {
        message: '兄者はPURFECTな42歳をむかえた！',
    },

    // ── アイテム定義 ────────────────────────────────────────
    // pts: 得点  w: 出現重み（大きいほど多く出る）
    items: {
        balloon: { label:'🎈', pts:10, w:40, color:'#adc2f0', bg:'#497fc5' },
        pizza:   { label:'🍕', pts:15, w:20, color:'#db8787', bg:'#b43535' },
        car:     { label:'🚗', pts:25, w:16, color:'#FFF176', bg:'#FFD600' },
        heart:   { label:'💕', pts:30, w:12, color:'#FF80AB', bg:'#eea1c7' },
        sunglasses: { label:'🕶️', pts:42, w:7,  color:'#A78BFA', bg:'#6D28D9', special:true },
        clock:      { label:'⏰', pts:20, w:10, color:'#6EE7B7', bg:'#059669', slow:true   },
        skull:      { label:'💀', pts:0,  w:0,  color:'#888888', bg:'#333333', hazard:true },
    },

    // ── ステージ設定 ────────────────────────────────────────
    stages: [
        { target:900,  interval:75, speed:1.8, bombW:8,  clockW:4,  bg1:'#a8d8f0', bg2:'#4aa8d8' },
        { target:2000, interval:55, speed:2.5, bombW:16, clockW:6,  bg1:'#1a3a6e', bg2:'#15347c' },
        { target:3800, interval:38, speed:3.2, bombW:24, bg1:'#0a0520', bg2:'#1a0535' },
        { target:6000, interval:26, speed:4.0, bombW:32, bg1:'#000008', bg2:'#050018' },
    ],
};
