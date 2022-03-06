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

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// 화면에 scroll 이벤트 추가
window.addEventListener('scroll', _.throttle(function() { 
  // lodash 라이브러리 사용해서 함수의 사용횟수 조절하기
  // console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    })
  }else {
    // scroll값이 500이하일때 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300)); 
// _.throttle(함수, 시간s);
// gsap.to(요소, 지속시간, {옵션: 객체 데이터 형식}); js 애니메이션 라이브러리

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7, // 여러개의 요소가 순차적으로 실행되도록
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion // 반대값으로 반환
  if(isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  }else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
      selector, // 선택자
      random(1.5, 2.5), // 애니메이션 동작 시간
      { // 옵션
        y: size,
        repeat: -1, //무한반복
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
      }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해 날짜를 변수에 담기