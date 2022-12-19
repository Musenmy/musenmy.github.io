// 要素やクラスを指定しておく
const checkToggle = document.getElementById('js_mode_toggle');
const rotateIcon = document.getElementById('js_rotate');
const classLight = 'js-mode-light';

// デバイスがライトモードかどうかチェック
const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;

// ローカルストレージに保存するための適当なKey名
const keyLocalStorage = 'whike-theme-mode';

// ローカルストレージの情報を取得
const localTheme = localStorage.getItem(keyLocalStorage);

// 絵文字を回転させる角度
let nowRotate = 0;

// ローカルストレージの中身と、端末がライトモードかどうか（ie,edgeには無意味）をチェック
if(localTheme === 'light') {
  // ローカルストレージの情報が優先
  rotateInfinite();
  changeMode('light');
} else if(localTheme === 'dark') {
  changeMode('dark');
} else if(isLight) {
  rotateInfinite();
  changeMode('light');
}

// チェックボックスでの切り替え、選択をローカルストレージに保存
// モード切替スイッチが変更されたら発動
checkToggle.addEventListener('change', function(e) {
  // 絵文字大回転
  rotateInfinite();

  // チェックされたらライトモード、されなければダークモードにし、ローカルストレージにどちらを選んだか保存する
  if(e.target.checked) {
    changeMode('light');
    localStorage.setItem(keyLocalStorage,'light');
  } else {
    changeMode('dark');
    localStorage.setItem(keyLocalStorage,'dark');
  }
});

/**
 * テーマ切り替え
 * @param {String} mode 'light' もしくは 'dark'
 */
function changeMode(mode) {
  // 引数にしたがってbodyにクラスをつける
  // チェックボックス経由で変更かかったときはいいんだけど、ローカルストレージとかからモードを変えた場合にチェック状態がおかしくなるので、合わせておく
  if(mode === 'light') {
    document.body.classList.add(classLight);
    checkToggle.checked = true;
  } else if(mode === 'dark') {
    document.body.classList.remove(classLight);
    checkToggle.checked = false;
  }
}

/**
 * 月と太陽アイコン無限回転
 * 呼ばれるたびに180度角度が追加されていく
 */
function rotateInfinite() {
  nowRotate += 180;
  rotateIcon.style.transform = 'rotate(' + nowRotate + 'deg)';
}
