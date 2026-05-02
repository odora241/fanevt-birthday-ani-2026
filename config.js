// ==========================================================
//  🎂 BIRTHDAY GAME — 設定ファイル
// ==========================================================

const CONFIG = {

    version: '1.32',

    // ── 画像・動画ファイル ──────────────────────────────────
    assets: {
        reticleSrc:         './assets/reticle.png',
        titleImgSrc:        './assets/mv-oto.png',
        titleImgClearedSrc: './assets/mv-ani.png',
        chickenImgSrc:      './assets/niwa.png',
        introVideoSrc: './assets/intro.mp4',
        bouncerSrc: [
            './assets/bouncer01.png',
            './assets/bouncer02.png',
        ],
    },

    // ── ローディング画面 ────────────────────────────────────
    loading: {
        title1: '🕶🚩',
        title2: 'Fangame',
        text:   'Loading',
    },

    // ── タイトル画面 ────────────────────────────────────────
    title: {
        instructions: [
            '下から飛んでくる風船を撃ち抜こう',
            '連続Hitでコンボボーナス！',
            '1123💀は撃つな ー ライフ−1',
            '青い風船は高得点ターゲット🕶',
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
        messageStage3: 'ここまでで満足かい？',
    },

    // ── クリア（エンディング）画面 ──────────────────────────
    ending: {
        message: '兄者はFABULOUSな42歳をむかえた！',
        chickenMessage: 'Thx 4 playing!\n兄者さんに幸あれ～！(強火)',
        chickenAuthor: '— from @Niro_pk',
        // STATUS 判定（逃した風船数の閾値）
        status: [
            { max: 0,  label: 'PERFECT' },
            { max: 5,  label: 'FABULOUS' },
            { max: 10, label: 'EXCELLENT' },
            { max: 20, label: 'GREAT' },
            { max: Infinity, label: 'GOOD' },
        ],
    },

    // ── アイテム定義 ────────────────────────────────────────
    // pts: 得点  w: 出現重み（大きいほど多く出る）
    items: {
        balloon:    { label:'🎈', pts:10, w:40, color:'#ff6060', bg:'#cc2222', img:'bl-red.png' },
        pizza:      { label:'🍕', pts:15, w:20, color:'#ffe44d', bg:'#ccaa00', img:'bl-yellow.png' },
        car:        { label:'🚗', pts:25, w:16, color:'#c084fc', bg:'#7c3aed', img:'bl-purple.png' },
        heart:      { label:'💕', pts:30, w:12, color:'#ff80ab', bg:'#cc3370', img:'bl-pink.png' },
        sunglasses: { label:'🕶️', pts:42, w:7,  color:'#60a5fa', bg:'#1d6ed8', special:true, img:'bl-blue.png' },
        clock:      { label:'⏰', pts:20, w:5, color:'#6EE7B7', bg:'#059669', slow:true,    img:'bl-green.png' },
        skull:      { label:'💀', pts:0,  w:0,  color:'#555555', bg:'#111111', hazard:true,  img:'bl-black.png' },
    },

    // ── ステージ設定 ────────────────────────────────────────
    stages: [
        { target:900,  interval:75, speed:3.15, bombW:8,  clockW:4,  bg1:'#85bddd', bg2:'#2865af' },
        { target:2000, interval:55, speed:4.35, bombW:16, clockW:6,  bg1:'#1a3a6e', bg2:'#15347c' },
        { target:3800, interval:38, speed:5.55, bombW:24, bg1:'#0a0520', bg2:'#1a0535' },
        { target:6000, interval:26, speed:6.9,  bombW:32, bg1:'#000008', bg2:'#050018' },
    ],
};
