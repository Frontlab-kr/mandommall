// $(document).ready(function () {
//   // 현재 페이지의 URL을 가져옴
//   var url = window.location.pathname;
//   // URL에서 파일 이름을 추출
//   var fileName = decodeURIComponent(url.substring(url.lastIndexOf('/') + 1));
//   // 파일 이름이 비어 있으면 기본 파일 이름으로 index.html 설정
//   if (!fileName) {
//     fileName = 'index.html';
//   }
//   // title 태그에 파일 이름 설정
//   $('title').text(fileName);
// });

// $(document).ready(function () {
//   $('#mandom-header').load('../components/desktop/header.html');
//   $('#mandom-footer').load('../components/desktop/footer.html');
//   $('#mandom-gnb').load('../components/desktop/gnb.html');
// });

var stateMenu = false;
function menuOpen() {
  stateMenu = true;
  $('body').addClass('stateMenu');
}
function menuClose() {
  stateMenu = true;
  $('body').removeClass('stateMenu');
}
