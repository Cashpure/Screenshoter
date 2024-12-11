let arrow = document.querySelector('.arrow')

$(function () {
   $('.header-nav__link-last-inner')
      .on('mouseover', function () {
         document.querySelector('.language-selector-container').style.display = 'block'
         arrow.style.transform = 'rotate(135deg)'
      })
      .on("mouseout", function () {
         document.querySelector('.language-selector-container').style.display = 'none'
         arrow.style.transform = 'rotate(-45deg)'
      })

   $('.ru').on('click', function (e) {
      e.preventDefault()
      // // if ($(this).hasClass('selected') == false) {
      // // $(this).toggleClass('selected')
      // // $('.eng').toggleClass('selected')
      // document.querySelector('.header-nav__link-last').innerText = 'RU'
      // document.querySelector('.header-nav__link-last').value = 'RU'
      // // }
   })
   $('.eng').on('click', function (e) {
      e.preventDefault()
      // if ($(this).hasClass('selected') == false) {
      // $(this).toggleClass('selected')
      // $('.ru').toggleClass('selected')
      // document.querySelector('.header-nav__link-last').innerText = 'ENG'
      // document.querySelector('.header-nav__link-last').value = 'ENG'
      // }
   })



   $(".header-nav__link").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      $('.header-nav').toggleClass('header-nav--opened')
      $('.overlay').fadeToggle('fast')
      $('.burger').toggleClass('burger--active')
      e.preventDefault();
      return false;
   });
   $(".footer-link").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
   });



   $('.burger').on('click', function (e) {
      e.preventDefault()
      $('.header-nav').toggleClass('header-nav--opened')
      $('.overlay').fadeToggle('fast')
      $('.burger').toggleClass('burger--active')
   })

   $('.overlay').on('click', function () {
      $('.overlay').fadeToggle('fast')
      $('.burger').toggleClass('burger--active')
      $('.header-nav').toggleClass('header-nav--opened')
   })

   $('.faq-item').on('click', function () {
      $(this).children('.faq-item__btn').toggleClass('faq-item__btn--active')
      $(this).children('.faq-item__ask').children('.faq-item__answer').slideToggle()
   })

})

let selectRu = document.querySelector('.ru')
let selectEng = document.querySelector('.eng')
let allLeng = ['RU', 'ENG']
selectRu.value = 'RU'
selectEng.value = 'ENG'
selectRu.addEventListener('click', changeURLLanguageRu)
selectEng.addEventListener('click', changeURLLanguageEng)

function changeURLLanguageRu() {
   let lang = selectRu.value
   location.href = window.location.pathname + '#' + lang
   location.reload()
   // document.querySelector('.eng').classList.remove('selected')
   // document.querySelector('.ru').classList.add('selected')
}
function changeURLLanguageEng() {
   let lang = selectEng.value
   location.href = window.location.pathname + '#' + lang
   location.reload()
   // document.querySelector('.ru').classList.remove('selected')
   // document.querySelector('.eng').classList.add('selected')
}
let selectedLang = document.querySelector('.header-nav__link-last')
function changeLang() {
   let hash = window.location.hash
   hash = hash.substr(1)
   console.log(hash)
   selectedLang.innerText = hash
   if (selectedLang.innerText == 'RU') {
      document.querySelector('.eng').classList.remove('selected')
      document.querySelector('.ru').classList.add('selected')
   } else {
      document.querySelector('.ru').classList.remove('selected')
      document.querySelector('.eng').classList.add('selected')
   }
   if (!allLeng.includes(hash)) {
      location.href = window.location.pathname + '#RU'
      location.reload()
   }

   document.querySelector('.lng-functions').innerHTML = langArr['functions'][hash]
   for (let key in langArr) {
      document.querySelector('.lng-' + key).innerHTML = langArr[key][hash]
   }
}
changeLang()


