const characters = [
  { id: "miriya", name: "みりやちゃん", className: "2-1", role: "guard", type: "ISTJ / LSI", motif: "番犬", line: "問題ありません。守る位置は把握しています。" },
  { id: "hitori", name: "ひとりくん", className: "2-1", role: "attack", type: "ESTP / SEE", motif: "コウモリ", line: "左腕が疼く……今こそ進軍の時だ。" },
  { id: "ketsui", name: "けついくん", className: "2-1", role: "technical", type: "ISTP / SLI", motif: "エビ", line: "流れを見りゃ、取り所はだいたい読めるけぇ。" },
  { id: "ameri", name: "あめりちゃん", className: "2-1", role: "trick", type: "INTP / ILI", motif: "うさぎ", line: "……近づきすぎない方が、見える場所もあるし。" },
  { id: "shogo", name: "しょうごくん", className: "2-1", role: "support", type: "ENFJ / EIE", motif: "ボタンインコ", line: "大丈夫。呼吸を合わせれば、まだ整えられるよ。" },
  { id: "yuko", name: "ゆこちゃん", className: "2-1", role: "support", type: "INFJ / EII", motif: "キャバリア", line: "失速しないように、少しだけ支えますね。" },
  { id: "akira", name: "あきらくん", className: "2-1", role: "attack", type: "ENTJ / LIE", motif: "牧羊犬", line: "勝つ。盤面にそれ以外の意味はいらない。" },
  { id: "tomoki", name: "ともきくん", className: "2-1", role: "guard", type: "ESTJ / LSE", motif: "犬", line: "仕組みは動かすものだ。止めずに行くぞ。" },
  { id: "wataru", name: "わたるくん", className: "2-1", role: "guard", type: "ISTJ / LSI", motif: "オオグソクムシ", line: "進行規則を確認する。無駄な侵入は許可しない。" },
  { id: "zakuro", name: "ざくろくん", className: "2-1", role: "technical", type: "INTJ / LII", motif: "もやし", line: "最悪ケースを潰せば、少しだけ進める。" },
  { id: "kotori", name: "ことりくん", className: "2-1", role: "trick", type: "INTP / ILI", motif: "カナリア", line: "綺麗に勝てんでも、抜け道くらいはあるやろ。" },
  { id: "mikina", name: "みきなちゃん", className: "2-1", role: "speed", type: "ENFP / IEE", motif: "猫", line: "近づきすぎず、でも置いてはいかないよ。" },
  { id: "iseri", name: "いせりくん", className: "2-1", role: "speed", type: "ESFP / SEE", motif: "猫", line: "小さくても、通れる道は多いねん。" },
  { id: "maria", name: "まりあちゃん", className: "2-1", role: "support", type: "ISFJ / ESI", motif: "猫", line: "この色が守られますように。" },
  { id: "migiwa", name: "みぎわちゃん", className: "2-1", role: "support", type: "ESFJ / ESE", motif: "アジサシ", line: "副部長として、抜け目なく支えますけぇ。" },
  { id: "ryogo", name: "りょうごくん", className: "2-1", role: "technical", type: "INTJ / LSI-Ni", motif: "青虫", line: "構造が見えれば、動きは自然に細くなる。" },
  { id: "jiha", name: "じはちゃん", className: "2-1", role: "trick", type: "ENTP / ILE", motif: "猫", line: "ほな、盤面に変な風を吹かせよか。" },
  { id: "rei", name: "れいちゃん", className: "2-1", role: "technical", type: "ENFJ / ILE", motif: "カラス", line: "最適解は見えています。たぶん、ほぼ完璧に。" },
  { id: "yae", name: "やえちゃん", className: "2-2", role: "technical", type: "INTP / LII", motif: "ハリネズミ", line: "私は何で構成されているのか。盤面も同じ問いかも。" },
  { id: "akari", name: "あかりちゃん", className: "2-2", role: "speed", type: "ESFP / SEE", motif: "アライグマ", line: "泣きたい時ほど笑って、前に塗っちゃお。" },
  { id: "enishi", name: "えにしくん", className: "2-2", role: "technical", type: "ISTP / SLI", motif: "いたち", line: "線を置くみたいに、必要な色だけ足すげん。" },
  { id: "matoi", name: "まといくん", className: "2-2", role: "attack", type: "ISTP / SLI", motif: "鷹", line: "そこ、踏み込む。理由は後でいい。" },
  { id: "suzu", name: "すずちゃん", className: "2-2", role: "guard", type: "INTJ / LII", motif: "猫", line: "ええ子にしているだけでは、守れない場所もあります。" },
  { id: "arin", name: "ありんちゃん", className: "2-2", role: "support", type: "ESFJ / ESE", motif: "犬", line: "役に立てるなら、もう少し頑張れるよ。" },
  { id: "yasashi", name: "やさしくん", className: "2-2", role: "support", type: "ESFJ / ESE", motif: "消しゴム", line: "角を消して、歩きやすくしておくね。" },
  { id: "rui", name: "るいくん", className: "2-2", role: "support", type: "ESFJ / ESE", motif: "キジ", line: "気は利かせたつもりなんだけど、方向合ってるかな。" },
  { id: "makishi", name: "まきしくん", className: "2-2", role: "speed", type: "ENFP / IEE", motif: "猫", line: "楽しくいこ！盤面も映画みたいに動くし♪" },
  { id: "shige", name: "しげくん", className: "2-2", role: "trick", type: "ISFP / SEI", motif: "ネズミ", line: "目立たん場所なら、少しは動けるけん。" },
  { id: "hakomo", name: "はこもくん", className: "2-2", role: "trick", type: "INTP / ILI", motif: "箱", line: "空っぽでも、色くらいは入るんじゃない。" },
  { id: "shizuka", name: "しずかちゃん", className: "2-2", role: "guard", type: "ISTJ / LSI", motif: "ハイイロテントウ", line: "一点のミスも、盤面では静かに残りますから。" },
  { id: "mirin", name: "みりんてゃ", className: "2-2", role: "attack", type: "ENFP / IEE", motif: "黒猫", line: "あたしが可愛いから、この色も可愛くなるの。" },
  { id: "yuzu", name: "ゆずちゃん", className: "2-2", role: "trick", type: "INTJ / ILI", motif: "招き猫", line: "……運は、軽々しく使うものじゃない。" },
  { id: "shinon", name: "しのんくん", className: "2-2", role: "support", type: "INFP / IEI", motif: "鉛筆", line: "消えない跡でも、少しだけ塗り替えられるかな。" },
  { id: "hikari", name: "ひかりちゃん", className: "2-2", role: "guard", type: "ISTJ / LSI", motif: "レッサーパンダ", line: "嘘の動きは見ればわかる。そこ、危ないよ。" },
  { id: "kozue", name: "こずえちゃん", className: "2-2", role: "support", type: "ISFJ / ESI", motif: "ムササビ", line: "色も所作も、乱れすぎない方が美しいですえ。" },
  { id: "yamato", name: "やまとくん", className: "2-2", role: "speed", type: "ISTP / SLI", motif: "狐", line: "邪魔しないなら平穏。邪魔するなら動く。" },
  { id: "tsukushi", name: "つくしくん", className: "M2-1", role: "technical", type: "INTJ / LII", motif: "土筆", line: "……書き換えるなら、静かな場所からでいい。" },
  { id: "himiko", name: "ひみこちゃん", className: "M2-1", role: "attack", type: "ESTP / LSE", motif: "椋鳥", line: "迷うくらいなら突っ込む。道は後からできる。" },
  { id: "miku", name: "みくちゃん", className: "M2-1", role: "trick", type: "INTP / ILI", motif: "猫", line: "勝ちたいというより、無駄に消耗したくない。" },
  { id: "touko", name: "とうこちゃん", className: "M2-1", role: "support", type: "ENFP / IEE", motif: "マルチカン", line: "えらいえらい。じゃ、次の場所も取っちゃお。" },
  { id: "akekazu", name: "あけかずくん", className: "M2-1", role: "guard", type: "INFJ / EII", motif: "コーギー", line: "えっと……守れるなら、守りたいです。" },
  { id: "kumi", name: "くみちゃん", className: "M2-1", role: "support", type: "ESFJ / ESE", motif: "ハバニーズ", line: "大丈夫。甘いものみたいに元気を足してあげる。" },
  { id: "inori", name: "いのりちゃん", className: "M2-1", role: "technical", type: "INFJ / IEI", motif: "セキセイインコ", line: "夢の流れでは、次に光る場所がある気がします。" },
  { id: "kamon", name: "かもんくん", className: "M2-1", role: "speed", type: "ESFP / IEE", motif: "イソヒヨドリ", line: "行ってみんとわからんちゃ。飛ぶぞ。" },
  { id: "airi", name: "あいりちゃん", className: "M2-1", role: "speed", type: "ESFJ / ESE", motif: "チドリ", line: "空気ごと持ってくから、ちゃんと見ててね。" },
  { id: "kizuna", name: "きずなくん", className: "M2-1", role: "support", type: "ESFJ / ESE", motif: "ペンギン", line: "悔いないように、今この色を置いてく。" },
  { id: "nodoka", name: "のどかちゃん", className: "M2-1", role: "attack", type: "ESTJ / LSE", motif: "パンダ", line: "白黒つけるよ。勝つなら本気でいく。" },
  { id: "aira", name: "あいらちゃん", className: "M2-1", role: "technical", type: "ISTP / SLI", motif: "ガチョウ", line: "破壊点はそこ。見落とす方が悪い。" },
  { id: "hajime", name: "はじめくん", className: "M2-1", role: "support", type: "ISFP / SEI", motif: "クリムネサケイ", line: "スキ……魚じゃなくて？まあ、ゆっくり行こ。" },
  { id: "senku", name: "せんくくん", className: "M2-1", role: "technical", type: "ISTP / SLI", motif: "ヨウム", line: "中途半端にするくらいなら、手順を詰めるずら。" },
  { id: "terii", name: "てりいくん", className: "M2-1", role: "guard", type: "ESTJ / LSI", motif: "ムジルリツグミ", line: "怖いものは怖い。でも責任は放らんざ。" },
  { id: "kimihide", name: "きみひでくん", className: "M2-1", role: "trick", type: "ESTP / SEE", motif: "たんぽぽ", line: "仕様が気に入らんなら、抜け道作るけぇ。" },
  { id: "shunsei", name: "しゅんせいくん", className: "M2-1", role: "guard", type: "ISTP / SLI", motif: "蜘蛛", line: "期待しすぎるな。正しいと思う場所だけ取る。" },
  { id: "minori", name: "みのりちゃん", className: "M2-1", role: "attack", type: "ESTP / SLE", motif: "オカメインコ", line: "やりたいことはやったもん勝ちだべ。行くよ。" },
  { id: "sachiko", name: "さちこちゃん", className: "M2-1", role: "guard", type: "INFP / LII", motif: "柊", line: "期待はしない。でも、守る準備はしておくね。" },
  { id: "hana", name: "はなちゃん", className: "M2-1", role: "technical", type: "INTJ / LII", motif: "猫", line: "届かないなら、基準の方を見直すしかないけん。" },
  { id: "kazumi", name: "かずみくん", className: "M2-1", role: "technical", type: "ISTJ / LSI", motif: "オウム", line: "メリットが一つでもあるなら、取る価値はある。" },
  { id: "raita", name: "らいたくん", className: "M2-1", role: "speed", type: "ESFP / SEE", motif: "ハクビシン", line: "いいことあるって、たぶん神様が言ってた。" },
  { id: "momoi", name: "ももいちゃん", className: "M2-2", role: "support", type: "ENFJ / EIE", motif: "アゲハ蝶", line: "ちゃんと見てて。完璧に支えてあげるから。" },
  { id: "gon", name: "ごんくん", className: "M2-2", role: "guard", type: "ISTP / SLI", motif: "オオカミ", line: "信じろとは言わない。必要な分だけ動く。" },
  { id: "sara", name: "さらちゃん", className: "M2-2", role: "support", type: "INFJ / EII", motif: "猫", line: "変わるのは怖いけど、隣なら少し歩けるずら。" },
  { id: "nazuna", name: "なずなちゃん", className: "M2-2", role: "technical", type: "INTJ / ILI", motif: "トイプードル", line: "盤面は人形より不安定ね。だから操りがいがある。" },
  { id: "hiyori", name: "ひよりちゃん", className: "M2-2", role: "support", type: "ISFP / SEI", motif: "タマシャモ", line: "嫌な色、ぜんぶ消せたら平和なのにね。" },
  { id: "shigure", name: "しぐれくん", className: "M2-2", role: "trick", type: "ENFP / IEE", motif: "薩摩鶏", line: "血がたぎる場所だけ、覚えとけばよか。" },
  { id: "makoto", name: "まことくん", className: "M2-2", role: "attack", type: "ENTJ / SLE", motif: "ハリネズミ", line: "自信？あるに決まってる。行動で塗るよ。" },
  { id: "takiya", name: "たきやくん", className: "M2-2", role: "attack", type: "ENTJ / LIE", motif: "アラスカン・マラミュート", line: "諦めの悪さなら、盤面にも負けない。" },
  { id: "gen", name: "げんくん", className: "M2-2", role: "speed", type: "ESFP / SEE", motif: "ジャックラッセルテリア", line: "遅刻しても塗ればセーフ、ってことで。" },
  { id: "misuki", name: "みすきくん", className: "M2-2", role: "technical", type: "INFJ / LII", motif: "フェレット", line: "意味を考える前に、最短の形はもう見えています。" },
  { id: "emi", name: "えみちゃん", className: "M2-2", role: "guard", type: "ISFJ / ESI", motif: "蛇", line: "記憶しています。ここを崩されると困りますから。" },
  { id: "miusa", name: "みうさちゃん", className: "M2-2", role: "trick", type: "ENFP / IEE", motif: "猫", line: "べ、別にノリだけちゃうし。まあ行くけど。" },
  { id: "tatsuomi", name: "たつおみくん", className: "M2-2", role: "attack", type: "ESTP / SLE", motif: "ロバ", line: "決めたなら進むっちゃ。音みたいに強く。" },
  { id: "azuri", name: "あずりくん", className: "M2-2", role: "trick", type: "INTP / ILI", motif: "造花", line: "大切な色も、所詮は上書きできる情報だよ。" },
  { id: "rieko", name: "りえこちゃん", className: "M2-2", role: "support", type: "ISFJ / ESI", motif: "オオマシコ", line: "期待に応えられるように、ちゃんと整えます。" },
  { id: "sukui", name: "すくいくん", className: "M2-2", role: "support", type: "ESFJ / ESE", motif: "ウトナーガン", line: "助けます。たまに全力で暴走しますけど。" },
  { id: "erika", name: "えりかちゃん", className: "M2-2", role: "trick", type: "ENTP / ILE", motif: "コゲラ", line: "勝てば映えるでしょ。だったら派手に変える。" },
  { id: "tsumugi", name: "つむぎちゃん", className: "M2-2", role: "guard", type: "ESTJ / LSE", motif: "雀", line: "嫌な配置は嫌って言う。そこ、直しなさい。" },
  { id: "imari", name: "いまりちゃん", className: "M2-2", role: "support", type: "INFJ / EII", motif: "ウズラ", line: "争わずに済むなら、その方がいいんだけど。" },
  { id: "renge", name: "れんげちゃん", className: "M2-2", role: "attack", type: "ESFJ / ESE", motif: "リス", line: "一生懸命やるッス。銃は……まだ持ってないッス。" },
  { id: "anri", name: "あんりちゃん", className: "M2-2", role: "support", type: "INFJ / EII", motif: "コマドリ", line: "深読みしすぎかもしれません。でも、支えます。" },
  { id: "kodama", name: "こだまくん", className: "M2-2", role: "technical", type: "INTJ / LII", motif: "タゲリ", line: "感情は定義待ちの変数。盤面も、まだ決まっていないはず。" }
].map((character) => ({
  ...character,
  image: `assets/characters/${character.id}.png`
}));

const roleData = {
  attack: { label: "感情バースト", cooldown: 9, speed: 1, paintRadius: 2, aiBias: 0.68 },
  support: { label: "ふわもこ支援", cooldown: 11, speed: 1, paintRadius: 1, aiBias: 0.52 },
  guard: { label: "境界固定", cooldown: 12, speed: 1, paintRadius: 1, aiBias: 0.44 },
  speed: { label: "軽やかステップ", cooldown: 8, speed: 2, paintRadius: 1, aiBias: 0.75 },
  trick: { label: "グリッチ反転", cooldown: 10, speed: 1, paintRadius: 1, aiBias: 0.62 },
  technical: { label: "構造解析", cooldown: 10, speed: 1, paintRadius: 1, aiBias: 0.57 }
};

const width = 15;
const height = 11;
const totalTime = 75;
const board = document.querySelector("#board");
const selects = {
  player: document.querySelector("#playerSelect"),
  support: document.querySelector("#supportSelect"),
  enemyA: document.querySelector("#enemyASelect"),
  enemyB: document.querySelector("#enemyBSelect")
};
const timerEl = document.querySelector("#timer");
const startButton = document.querySelector("#startButton");
const skillButton = document.querySelector("#skillButton");
const skillName = document.querySelector("#skillName");
const skillCooldown = document.querySelector("#skillCooldown");
const logBox = document.querySelector("#logBox");
const allyName = document.querySelector("#allyName");
const allyLine = document.querySelector("#allyLine");
const allyTrait = document.querySelector("#allyTrait");
const rivalLine = document.querySelector("#rivalLine");
const playerScore = document.querySelector("#playerScore");
const rivalScore = document.querySelector("#rivalScore");
const playerMeter = document.querySelector("#playerMeter");
const rivalMeter = document.querySelector("#rivalMeter");
const playerTeamName = document.querySelector("#playerTeamName");
const rivalTeamName = document.querySelector("#rivalTeamName");
const portraits = {
  player: document.querySelector("#playerPortrait"),
  support: document.querySelector("#supportPortrait"),
  enemyA: document.querySelector("#enemyAPortrait"),
  enemyB: document.querySelector("#enemyBPortrait")
};

let cells = [];
let state = null;
let loopId = null;
let tickId = null;
let pressedKeys = new Set();

function fillSelects() {
  Object.entries(selects).forEach(([key, select], selectIndex) => {
    characters.forEach((character, index) => {
      const option = document.createElement("option");
      option.value = character.id;
      option.textContent = `${character.className} ${character.name} / ${roleData[character.role].label}`;
      select.append(option);
      if (index === selectIndex) option.selected = true;
    });
    select.addEventListener("change", updatePreview);
  });
}

function getCharacter(id) {
  return characters.find((character) => character.id === id) ?? characters[0];
}

function createBoard() {
  board.innerHTML = "";
  board.style.setProperty("--cols", width);
  cells = [];

  for (let i = 0; i < width * height; i += 1) {
    const cell = document.createElement("button");
    const x = i % width;
    const y = Math.floor(i / width);
    cell.className = "cell";
    cell.type = "button";
    cell.setAttribute("role", "gridcell");
    cell.setAttribute("aria-label", `${x + 1}, ${y + 1}`);
    cell.addEventListener("click", () => setMoveTarget(x, y));
    board.append(cell);
    cells.push(cell);
  }
}

function buildGrid() {
  const grid = Array.from({ length: height }, () => Array.from({ length: width }, () => ({ owner: "none", wall: false })));
  const walls = [
    [7, 1], [3, 3], [4, 3], [10, 3], [11, 3],
    [7, 5], [6, 5], [8, 5], [3, 7], [11, 7],
    [7, 9]
  ];
  walls.forEach(([x, y]) => {
    grid[y][x].wall = true;
  });
  return grid;
}

function startGame() {
  stopGame();

  const roster = getSelectedRoster();
  state = {
    time: totalTime,
    running: true,
    roster,
    cooldown: 0,
    target: null,
    path: [],
    grid: buildGrid(),
    units: {
      player: makeUnit("player", 1, 1, "ally", roster.player),
      support: makeUnit("support", 2, 2, "ally", roster.support),
      enemyA: makeUnit("enemyA", width - 2, height - 2, "rival", roster.enemyA),
      enemyB: makeUnit("enemyB", width - 3, height - 3, "rival", roster.enemyB)
    }
  };

  paintAt(1, 1, "ally", 2);
  paintAt(width - 2, height - 2, "rival", 2);
  updatePreview();
  skillName.textContent = roleData[roster.player.role].label;
  skillButton.disabled = false;
  timerEl.textContent = totalTime;
  writeLog(`${roster.support.name}が隣に立った。${roster.support.line}`);
  render();

  tickId = window.setInterval(tickSecond, 1000);
  loopId = window.setInterval(gameLoop, 160);
}

function stopGame() {
  if (loopId) window.clearInterval(loopId);
  if (tickId) window.clearInterval(tickId);
  loopId = null;
  tickId = null;
}

function getSelectedRoster() {
  return {
    player: getCharacter(selects.player.value),
    support: getCharacter(selects.support.value),
    enemyA: getCharacter(selects.enemyA.value),
    enemyB: getCharacter(selects.enemyB.value)
  };
}

function updatePreview() {
  const roster = state?.roster ?? getSelectedRoster();
  playerTeamName.textContent = `${roster.player.name} + ${roster.support.name}`;
  rivalTeamName.textContent = `${roster.enemyA.name} + ${roster.enemyB.name}`;
  allyName.textContent = roster.support.name;
  allyLine.textContent = roster.support.line;
  allyTrait.textContent = `${roleData[roster.support.role].label} / ${roster.support.type} / ${roster.support.motif}`;
  rivalLine.textContent = roster.enemyA.line;
  renderPortrait(portraits.player, roster.player, false);
  renderPortrait(portraits.support, roster.support, false);
  renderPortrait(portraits.enemyA, roster.enemyA, true);
  renderPortrait(portraits.enemyB, roster.enemyB, true);
}

function makeUnit(kind, x, y, team, character) {
  return {
    kind,
    x,
    y,
    team,
    character,
    aiCooldown: 0,
    glyph: character.name.slice(0, 1)
  };
}

function tickSecond() {
  if (!state?.running) return;
  state.time -= 1;
  if (state.cooldown > 0) state.cooldown -= 1;
  timerEl.textContent = state.time;
  updateSkillState();

  if (state.time <= 0) finishGame();
}

function gameLoop() {
  if (!state?.running) return;
  movePlayer();
  moveAI(state.units.support);
  moveAI(state.units.enemyA);
  moveAI(state.units.enemyB);
  render();
}

function movePlayer() {
  const player = state.units.player;
  const role = roleData[player.character.role];
  const steps = role.speed;
  let dx = 0;
  let dy = 0;

  if (pressedKeys.has("arrowup") || pressedKeys.has("w")) dy -= 1;
  if (pressedKeys.has("arrowdown") || pressedKeys.has("s")) dy += 1;
  if (pressedKeys.has("arrowleft") || pressedKeys.has("a")) dx -= 1;
  if (pressedKeys.has("arrowright") || pressedKeys.has("d")) dx += 1;

  if ((dx !== 0 || dy !== 0) && state.target) {
    state.target = null;
    state.path = [];
  }

  for (let i = 0; i < steps; i += 1) {
    if (dx !== 0) tryMove(player, Math.sign(dx), 0);
    if (dy !== 0) tryMove(player, 0, Math.sign(dy));
    if (dx === 0 && dy === 0) moveTowardTarget(player);
  }
}

function moveTowardTarget(unit) {
  if (!state.target || state.path.length === 0) return;
  const next = state.path.shift();
  const moved = tryMove(unit, next.x - unit.x, next.y - unit.y);

  if (!moved) {
    state.target = null;
    state.path = [];
    writeLog("進路がふさがった。もう一度、行き先を選んで。");
    return;
  }

  if (unit.x === state.target.x && unit.y === state.target.y) {
    state.target = null;
    state.path = [];
  }
}

function setMoveTarget(x, y) {
  if (!state?.running) {
    writeLog("先に開始を押すと、盤面が動き出す。");
    return;
  }
  const tile = getTile(x, y);
  if (!tile || tile.wall) {
    writeLog("そこは壁。色は乗らない。");
    return;
  }
  const path = findPath(state.units.player, { x, y });
  if (path.length === 0) {
    writeLog("そこへ向かう道は、今の盤面には見つからない。");
    return;
  }
  state.target = { x, y };
  state.path = path;
  writeLog(`移動先を指定した。${x + 1}, ${y + 1} へ向かう。`);
  render();
}

function findPath(from, to) {
  const startKey = `${from.x},${from.y}`;
  const targetKey = `${to.x},${to.y}`;
  const queue = [{ x: from.x, y: from.y }];
  const cameFrom = new Map([[startKey, null]]);
  const directions = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 }
  ];

  while (queue.length > 0) {
    const current = queue.shift();
    const currentKey = `${current.x},${current.y}`;
    if (currentKey === targetKey) break;

    directions.forEach((direction) => {
      const next = { x: current.x + direction.x, y: current.y + direction.y };
      const tile = getTile(next.x, next.y);
      const nextKey = `${next.x},${next.y}`;
      if (!tile || tile.wall || cameFrom.has(nextKey)) return;
      cameFrom.set(nextKey, current);
      queue.push(next);
    });
  }

  if (!cameFrom.has(targetKey)) return [];

  const path = [];
  let current = to;
  while (`${current.x},${current.y}` !== startKey) {
    path.unshift(current);
    current = cameFrom.get(`${current.x},${current.y}`);
  }
  return path;
}

function moveAI(unit) {
  unit.aiCooldown -= 1;
  if (unit.aiCooldown > 0) return;

  const role = roleData[unit.character.role];
  const directions = [
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 }
  ];
  const ranked = directions
    .map((direction) => {
      const nx = unit.x + direction.dx;
      const ny = unit.y + direction.dy;
      const target = getTile(nx, ny);
      const enemyOwned = target && !target.wall && target.owner !== "none" && target.owner !== unit.team;
      const empty = target && target.owner === "none";
      const score = Math.random() + (enemyOwned ? role.aiBias : 0) + (empty ? 0.25 : 0);
      return { ...direction, score };
    })
    .sort((a, b) => b.score - a.score);

  const moved = tryMove(unit, ranked[0].dx, ranked[0].dy);
  unit.aiCooldown = moved && role.speed > 1 ? 0 : 1;
}

function tryMove(unit, dx, dy) {
  if (dx === 0 && dy === 0) return false;
  const nx = clamp(unit.x + dx, 0, width - 1);
  const ny = clamp(unit.y + dy, 0, height - 1);
  const tile = getTile(nx, ny);
  if (!tile || tile.wall) return false;
  unit.x = nx;
  unit.y = ny;
  paintAt(nx, ny, unit.team, roleData[unit.character.role].paintRadius);
  return true;
}

function paintAt(cx, cy, owner, radius = 1) {
  for (let y = cy - radius; y <= cy + radius; y += 1) {
    for (let x = cx - radius; x <= cx + radius; x += 1) {
      const distance = Math.abs(cx - x) + Math.abs(cy - y);
      const tile = getTile(x, y);
      if (!tile || tile.wall || distance > radius) continue;
      tile.owner = owner;
    }
  }
}

function useSkill() {
  if (!state?.running || state.cooldown > 0) return;

  const player = state.units.player;
  const role = player.character.role;
  const team = player.team;
  state.cooldown = roleData[role].cooldown;

  if (role === "attack") {
    paintAt(player.x, player.y, team, 3);
    writeLog(`${player.character.name}が一気に踏み込んだ。周囲の色が熱を持つ。`);
  }

  if (role === "support") {
    paintAt(state.units.support.x, state.units.support.y, team, 3);
    paintAt(player.x, player.y, team, 2);
    writeLog(`${player.character.name}が支援の流れを作った。相棒の足元まで色が戻る。`);
  }

  if (role === "guard") {
    state.grid.forEach((row) => row.forEach((tile) => {
      if (tile.owner === "none" && Math.random() < 0.09) tile.owner = team;
    }));
    writeLog(`${player.character.name}が境界を固めた。空白が少しだけ味方になる。`);
  }

  if (role === "speed") {
    const corners = [[1, 1], [width - 2, 1], [1, height - 2], [width - 2, height - 2]];
    const [x, y] = corners[Math.floor(Math.random() * corners.length)];
    player.x = x;
    player.y = y;
    state.target = null;
    state.path = [];
    paintAt(x, y, team, 2);
    writeLog(`${player.character.name}が軽く跳んだ。遠い場所に色が落ちる。`);
  }

  if (role === "trick") {
    state.grid.forEach((row) => row.forEach((tile) => {
      if (!tile.wall && tile.owner === "rival" && Math.random() < 0.16) tile.owner = "ally";
    }));
    writeLog(`${player.character.name}が盤面を少し歪ませた。敵色がほどけていく。`);
  }

  if (role === "technical") {
    const rivalTiles = [];
    state.grid.forEach((row, y) => row.forEach((tile, x) => {
      if (tile.owner === "rival") rivalTiles.push([x, y]);
    }));
    rivalTiles.slice(0, 12).forEach(([x, y]) => {
      if (Math.random() < 0.7) state.grid[y][x].owner = "ally";
    });
    writeLog(`${player.character.name}が構造を読んだ。薄い支配点から静かに反転する。`);
  }

  pulseCells();
  updateSkillState();
  render();
}

function finishGame() {
  state.running = false;
  stopGame();
  skillButton.disabled = true;
  const scores = calculateScores();
  const playerWon = scores.ally >= scores.rival;
  const speaker = playerWon ? state.roster.support : state.roster.enemyA;
  writeLog(playerWon
    ? `${speaker.name}「勝った……この色、ちゃんと残ったね」`
    : `${speaker.name}「今回は、向こうの流れが少し強かったみたい」`);
}

function calculateScores() {
  let ally = 0;
  let rival = 0;
  let available = 0;
  state.grid.forEach((row) => row.forEach((tile) => {
    if (tile.wall) return;
    available += 1;
    if (tile.owner === "ally") ally += 1;
    if (tile.owner === "rival") rival += 1;
  }));
  return {
    ally: Math.round((ally / available) * 100),
    rival: Math.round((rival / available) * 100)
  };
}

function updateSkillState() {
  if (!state) return;
  if (state.cooldown > 0) {
    skillButton.disabled = true;
    skillCooldown.textContent = `あと ${state.cooldown}s`;
  } else if (state.running) {
    skillButton.disabled = false;
    skillCooldown.textContent = "Spaceで使用";
  }
}

function render() {
  if (!state) return;
  cells.forEach((cell, index) => {
    const x = index % width;
    const y = Math.floor(index / width);
    const tile = state.grid[y][x];
    cell.className = "cell";
    if (tile.wall) cell.classList.add("wall");
    if (tile.owner === "ally") cell.classList.add("ally");
    if (tile.owner === "rival") cell.classList.add("rival");
    if (state.target && state.target.x === x && state.target.y === y) cell.classList.add("target");
    cell.innerHTML = "";
  });

  Object.values(state.units).forEach((unit) => {
    const index = unit.y * width + unit.x;
    const marker = document.createElement("span");
    marker.className = `unit ${unit.kind}`;
    renderAvatar(marker, unit.character);
    marker.title = `${unit.character.name} / ${unit.character.motif}`;
    cells[index].append(marker);
  });

  const scores = calculateScores();
  playerScore.textContent = `${scores.ally}%`;
  rivalScore.textContent = `${scores.rival}%`;
  const sum = Math.max(scores.ally + scores.rival, 1);
  playerMeter.style.width = `${(scores.ally / sum) * 100}%`;
  rivalMeter.style.width = `${(scores.rival / sum) * 100}%`;
}

function renderPortrait(target, character, rival = false) {
  target.className = rival ? "portrait rival-avatar" : "portrait";
  if (target.id === "supportPortrait" || target.id === "enemyBPortrait") {
    target.classList.add("small");
  }
  renderAvatar(target, character);
  target.title = `${character.name} / ${character.motif}`;
}

function renderAvatar(target, character) {
  target.textContent = character.name.slice(0, 1);
  const img = document.createElement("img");
  img.src = character.image;
  img.alt = character.name;
  img.loading = "lazy";
  img.addEventListener("error", () => {
    img.remove();
  }, { once: true });
  target.append(img);
}

function writeLog(message) {
  logBox.innerHTML = `<p>${message}</p>`;
}

function pulseCells() {
  cells.forEach((cell) => cell.classList.add("burst"));
  window.setTimeout(() => cells.forEach((cell) => cell.classList.remove("burst")), 140);
}

function getTile(x, y) {
  if (!state || x < 0 || x >= width || y < 0 || y >= height) return null;
  return state.grid[y][x];
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d", " "].includes(key)) {
    event.preventDefault();
  }
  if (key === " ") useSkill();
  pressedKeys.add(key);
});

window.addEventListener("keyup", (event) => {
  pressedKeys.delete(event.key.toLowerCase());
});

startButton.addEventListener("click", startGame);
skillButton.addEventListener("click", useSkill);

fillSelects();
createBoard();
updatePreview();
timerEl.textContent = totalTime;
skillName.textContent = "Skill";
