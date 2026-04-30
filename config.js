// ==========================================================
//  🎂 BIRTHDAY GAME — 設定ファイル
// ==========================================================

const CONFIG = {

    // ── 画像・動画ファイル ──────────────────────────────────
    assets: {
        // fanArtSrc:  './assets/fanart.png',      // タイトル・エンディングのアイコン
        reticleSrc:         './assets/reticle.png',      // カーソル追従レティクル
        titleImgSrc:        './assets/mv-oto.png',       // タイトル画面キャラ画像（デフォルト）
        // titleImgClearedSrc: './assets/mv-oto-clear.png', // クリア後の差し替え画像
        introVideoSrc: './assets/intro.mp4',       // イントロ動画
        bouncerSrc: [                              // クリア画面でぴょこぴょこする画像
            './assets/bouncer01.png',
            './assets/bouncer02.png',
        ],
    },

    // ── テーマカラー ────────────────────────────────────────
    theme: {
        bg1:    '#07011a',   // タイトル背景グラデーション（上）
        bg2:    '#200a5c',   // タイトル背景グラデーション（下）
        pink:   '#FF6B9D',
        gold:   '#FFD700',
        purple: '#A78BFA',
        teal:   '#6EE7B7',
    },

    // ── ローディング画面 ────────────────────────────────────
    loading: {
        text: 'Loading',     // 「Loading...」のベーステキスト
    },

    // ── イントロアニメーション ──────────────────────────────
    intro: {
        //line1: 'SKY BURST :42',         // 1行目
        line1: '',                        // 1行目
        line2: '🕶🚩FunGame',            // 2行目
        fallbackIcon: '',             // 画像がないときのアイコン
    },

    // ── タイトル画面 ────────────────────────────────────────
    title: {
        subtitle:    'SKY BURST :42',  // タイトル大見出し
        fallbackIcon: '🎈',                   // 画像がないときのアイコン
        instructions: [                        // 説明文（4行まで推奨）
            '下から飛んでくる風船を撃ち抜こう',
            '連続Hitでコンボボーナス',
            '1123💀は撃つな ー ライフ−1',
            'サングラスは高得点ターゲット🕶',
        ],
        startButton: 'START  ▶',
    },

    // ── ゲーム中 HUD ────────────────────────────────────────
    hud: {
        lifeOn:  '❤️',   // ライフあり
        lifeOff: '🖤',   // ライフなし
        combo:   '🔥 COMBO x',  // コンボ表示前置テキスト
    },

    // ── ステージアップ吹き出しメッセージ ───────────────────
    // ステージ1→2, 2→3, 3→4 の順
    stageUpMessages: [
        'スピードあげるよー！',
        'スピードアーーーップ！',
        '兄者ならもっといけるよね？！',
    ],

    // ── ゲームオーバー画面 ──────────────────────────────────
    gameOver: {
        title:       'GAME OVER 💥',
        message:     '本当はもっといけるよな？',
        retryButton: 'ONE MORE!  ↺',
    },

    // ── クリア（エンディング）画面 ──────────────────────────
    ending: {
        subtitle:      '🎊🎊CONGRATULATION🎊🎊',  // サブタイトル
        message:       '兄者はPURFECTな42歳をむかえた！',         // メインメッセージ
        scorePrefix:   '🏆  FINAL SCORE:  ',
        replayButton:  'ONE MORE  ↺',
        fallbackIcon:  '🎂',                    // 画像なし時のぴょこぴょこアイコン
    },

    // ── アイテム定義 ────────────────────────────────────────
    // pts: 得点  w: 出現重み（大きいほど多く出る）
    items: {
        balloon: { label:'🎈', pts:10, w:40, color:'#FF6B9D', bg:'#FF3070' },
        pizza:   { label:'🍕', pts:15, w:20, color:'#FFD700', bg:'#FFA000' },
        car:     { label:'🚗', pts:25, w:16, color:'#FFF176', bg:'#FFD600' },
        heart:   { label:'💕', pts:30, w:12, color:'#FF80AB', bg:'#E91E63' },
        sunglasses: { label:'🕶️', pts:42, w:7,  color:'#A78BFA', bg:'#6D28D9', special:true },
        clock:      { label:'⏰', pts:20, w:12, color:'#6EE7B7', bg:'#059669', slow:true   },
        skull:      { label:'💀', pts:0,  w:0,  color:'#888888', bg:'#333333', hazard:true },
    },

    // ── ステージ設定 ────────────────────────────────────────
    // target: クリアに必要なステージ内累積スコア
    // interval: バルーン出現間隔（フレーム、小さいほど多く出る）
    // speed: バルーン上昇速度
    // bombW: ガイコツ出現重み（大きいほど多く出る）
    // bg1/bg2: 背景グラデーション色
    stages: [
        { target:900,  interval:75, speed:1.3, bombW:8,  bg1:'#a8d8f0', bg2:'#4aa8d8' },  // STAGE 1: 昼空
        { target:2000, interval:55, speed:1.9, bombW:16, bg1:'#1a3a6e', bg2:'#15347c' },  // STAGE 2: 宵
        { target:3800, interval:38, speed:2.6, bombW:24, bg1:'#0a0520', bg2:'#1a0535' },  // STAGE 3: 夜空
        { target:6000, interval:26, speed:3.4, bombW:32, bg1:'#000008', bg2:'#050018' },  // STAGE 4: 深宇宙
    ],
};
