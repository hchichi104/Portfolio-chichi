document.addEventListener("DOMContentLoaded", function () {

  // 스크롤 이벤트
  document.querySelector('.title > a').addEventListener('click', function () {
      window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth'
      });
  });
});


