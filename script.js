
// ページが読み込まれたときに実行するスクリプト
window.onload = function() {
    // 「お誕生日おめでとう！」のアニメーションを表示した後に非表示にする
    setTimeout(function() {
        document.getElementById('birthday-message').style.display = 'none';
        // 「20歳おめでとう！」と動画を表示する
        document.getElementById('birthday-heading').style.display = 'block';
        document.querySelector('.video-container').style.display = 'flex';
    }, 3000);  // 3秒後に切り替え
};
