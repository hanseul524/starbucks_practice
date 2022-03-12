const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// searchEl로 이미 .search 요소를 찾았기 때문에 그 안의 input요소를 찾을때는
// searchEl안에서 querySelector를 사용

searchEl.addEventListener('click', function() {
  searchInputEl.focus(); // focus 강제 적용
  // input 태그뿐만 아니라 .search div를 클릭했을때 focus가 실행됨
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); 
  //html 속성을 지정할때 사용하는 메소드(속성의 이름, 실제 들어갈 값)
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); 
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해 날짜를 변수에 담기