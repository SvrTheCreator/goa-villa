const nav = document.querySelector('.mobile-nav')
const svgBurger = document.querySelector('svg')

function mobileNav() {
  const navBtn = document.querySelector('.header__burger-menu')
  navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav--open')
    svgBurger.classList.toggle('burger-active')
    document.body.classList.toggle('no-scroll')
  }
}
mobileNav()
function forReasons() {
  const forReasonsButtonOne = document.querySelector('#forReasonsButtonOne')
  const reasonsButtonOne = document.querySelector('#reasonsButtonOne')
  reasonsButtonOne.onclick = function () {
    forReasonsButtonOne.classList.toggle('main__reasons_text-active')
  }
  const forReasonsButtonTwo = document.querySelector('#forReasonsButtonTwo')
  const reasonsButtonTwo = document.querySelector('#reasonsButtonTwo')
  reasonsButtonTwo.onclick = function () {
    forReasonsButtonTwo.classList.toggle('main__reasons_text-active')
  }
  const forReasonsButtonThree = document.querySelector('#forReasonsButtonThree')
  const reasonsButtonThree = document.querySelector('#reasonsButtonThree')
  reasonsButtonThree.onclick = function () {
    forReasonsButtonThree.classList.toggle('main__reasons_text-active')
  }
  const forReasonsButtonFour = document.querySelector('#forReasonsButtonFour')
  const reasonsButtonFour = document.querySelector('#reasonsButtonFour')
  reasonsButtonFour.onclick = function () {
    forReasonsButtonFour.classList.toggle('main__reasons_text-active')
  }
}
forReasons()
function forHowToUse() {
  const textForHowUseOne = document.querySelector('#forHow-use_button-1')
  const buttonForHowUseOne = document.querySelector('#how-use_button-1')
  buttonForHowUseOne.onclick = function () {
    textForHowUseOne.classList.toggle('main__how-use_text-active')
  }
  const textForHowUseTwo = document.querySelector('#forHow-use_button-2')
  const buttonForHowUseTwo = document.querySelector('#how-use_button-2')
  buttonForHowUseTwo.onclick = function () {
    textForHowUseTwo.classList.toggle('main__how-use_text-active')
  }
  const textForHowUseThree = document.querySelector('#forHow-use_button-3')
  const buttonForHowUseThree = document.querySelector('#how-use_button-3')
  buttonForHowUseThree.onclick = function () {
    textForHowUseThree.classList.toggle('main__how-use_text-active')
  }
}
forHowToUse()
function forFaq() {
  const forFaqButtonOne = document.querySelector('#forFaqButtonOne')
  const faqButtonOne = document.querySelector('#faqButtonOne')
  faqButtonOne.onclick = () => {
    forFaqButtonOne.classList.toggle('main__faq_text-active')
  }
  const forFaqButtonTwo = document.querySelector('#forFaqButtonTwo')
  const faqButtonTwo = document.querySelector('#faqButtonTwo')
  faqButtonTwo.onclick = () => {
    forFaqButtonTwo.classList.toggle('main__faq_text-active')
  }
  const forFaqButtonThree = document.querySelector('#forFaqButtonThree')
  const faqButtonThree = document.querySelector('#faqButtonThree')
  faqButtonThree.onclick = () => {
    forFaqButtonThree.classList.toggle('main__faq_text-active')
  }
  const forFaqButtonFour = document.querySelector('#forFaqButtonFour')
  const faqButtonFour = document.querySelector('#faqButtonFour')
  faqButtonFour.onclick = () => {
    forFaqButtonFour.classList.toggle('main__faq_text-active')
  }
}
forFaq()

const homeContent = document.querySelector('.header__content')
const indianPremierLeague = document.querySelector('.main__indian-league')
const iplAppDownload = document.querySelector('.main__betting-app')
const iplCricketBetting = document.querySelector('.main__live-betting')
const welcomeBonus = document.querySelector('.main__bonuses')
const howToUse = document.querySelector('.main__how-use')
const reviews = document.querySelector('.main__reviews')
const reasonsToDownload = document.querySelector('.main__reasons')
const iplmobilefeatures = document.querySelector('.main__mobile-app')
const mainInformation = document.querySelector('.main__information')
const iplPredictionApp = document.querySelector('.main__download')
const faq = document.querySelector('.main__faq')

function reuseScroll(params) {
  params.scrollIntoView({ block: 'center', behavior: 'smooth' })
}

function headerScrollFromItem() {
  const buttonForHomeContent = document.querySelector('#headerHome')
  buttonForHomeContent.onclick = () => {
    reuseScroll(homeContent)
  }
  const buttonForHeaderDownload = document.querySelector('#headerDownload')
  buttonForHeaderDownload.onclick = () => {
    reuseScroll(iplAppDownload)
  }
  const buttonForHeaderBonus = document.querySelector('#headerBonus')
  buttonForHeaderBonus.onclick = () => {
    reuseScroll(welcomeBonus)
  }
  const buttonForHeaderHowToUse = document.querySelector('#headerHowToUse')
  buttonForHeaderHowToUse.onclick = () => {
    reuseScroll(howToUse)
  }
  const buttonForHeaderReviews = document.querySelector('#headerReviews')
  buttonForHeaderReviews.onclick = () => {
    reuseScroll(reviews)
  }
  const buttonForHeaderFaq = document.querySelector('#headerFaq')
  buttonForHeaderFaq.onclick = () => {
    reuseScroll(faq)
  }
}
headerScrollFromItem()

function reuseUtils() {
  document.body.classList.remove('no-scroll')
  svgBurger.classList.remove('burger-active')
}

function mobileHeaderScrollFromItem() {
  const buttonForHomeContent = document.querySelector('#mobileHeaderHome')
  buttonForHomeContent.onclick = () => {
    nav.classList.remove('mobile-nav--open')
    reuseUtils()
    homeContent.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const buttonForHeaderDownload = document.querySelector(
    '#mobileHeaderIplDownload'
  )
  buttonForHeaderDownload.onclick = () => {
    nav.classList.remove('mobile-nav--open')
    reuseUtils()
    reuseScroll(iplAppDownload)
  }
  const buttonForHeaderBonus = document.querySelector('#mobileHeaderBonus')
  buttonForHeaderBonus.onclick = () => {
    nav.classList.remove('mobile-nav--open')
    reuseUtils()
    reuseScroll(welcomeBonus)
  }
  const buttonForHeaderHowToUse = document.querySelector(
    '#mobileHeaderHowToUse'
  )
  buttonForHeaderHowToUse.onclick = () => {
    nav.classList.remove('mobile-nav--open')
    reuseUtils()
    reuseScroll(howToUse)
  }
  const buttonForHeaderReviews = document.querySelector('#mobileHeaderReviews')
  buttonForHeaderReviews.onclick = () => {
    nav.classList.remove('mobile-nav--open')
    reuseUtils()
    reuseScroll(reviews)
  }
  const buttonForHeaderFaq = document.querySelector('#mobileHeaderFaq')
  buttonForHeaderFaq.onclick = () => {
    nav.classList.remove('mobile-nav--open')
    reuseUtils()
    reuseScroll(faq)
  }
}
mobileHeaderScrollFromItem()

function scrollFromItem() {
  const scrollFromIndianPremierLeague = document.querySelector(
    '#indianPremierLeague'
  )
  scrollFromIndianPremierLeague.onclick = () => {
    reuseScroll(indianPremierLeague)
  }
  const scrollFromiplAppDownload = document.querySelector('#iplAppDownload')
  scrollFromiplAppDownload.onclick = () => {
    reuseScroll(iplAppDownload)
  }
  const scrollFromiplCricketBetting =
    document.querySelector('#iplCricketBetting')
  scrollFromiplCricketBetting.onclick = () => {
    reuseScroll(iplCricketBetting)
  }
  const scrollFromwelcomeBonus = document.querySelector('#welcomeBonus')
  scrollFromwelcomeBonus.onclick = () => {
    reuseScroll(welcomeBonus)
  }
  const scrollFromreasonsToDownload =
    document.querySelector('#reasonsToDownload')
  scrollFromreasonsToDownload.onclick = () => {
    reuseScroll(reasonsToDownload)
  }
  const scrollFromiplmobilefeatures =
    document.querySelector('#iplmobilefeatures')
  scrollFromiplmobilefeatures.onclick = () => {
    reuseScroll(iplmobilefeatures)
  }
  const scrollFromhowToUse = document.querySelector('#howToUse')
  scrollFromhowToUse.onclick = () => {
    reuseScroll(howToUse)
  }

  const scrollFromreviews = document.querySelector('#reviews')
  scrollFromreviews.onclick = () => {
    reuseScroll(reviews)
  }
  const scrollFrommainInformation = document.querySelector('#mainInformation')
  scrollFrommainInformation.onclick = () => {
    reuseScroll(mainInformation)
  }
  const scrollFromiplPredictionApp = document.querySelector('#iplPredictionApp')
  scrollFromiplPredictionApp.onclick = () => {
    reuseScroll(iplPredictionApp)
  }
  const scrollFromfaq = document.querySelector('#faq')
  scrollFromfaq.onclick = () => {
    reuseScroll(faq)
  }
}
scrollFromItem()

function hideButtonsForLiveBetting(currentSwiper) {
  let buttonLeft = document.querySelector('.main__live-betting_left-button')
  let buttonRight = document.querySelector('.main__live-betting_right-button')
  if (currentSwiper.on('reachBeginning')) {
    buttonLeft.style.opacity = '0'
  }
  currentSwiper.on('reachBeginning', function () {
    buttonLeft.style.opacity = '0'
    buttonRight.style.opacity = '1'
  })
  currentSwiper.on('fromEdge', function () {
    buttonLeft.style.opacity = '1'
    buttonRight.style.opacity = '1'
  })
  currentSwiper.on('reachEnd', function () {
    buttonRight.style.opacity = '0'
    buttonLeft.style.opacity = '1'
  })
}

function sliderForLiveBetting() {
  const swiper = new Swiper('.main__live-betting_items', {
    direction: 'horizontal',
    loop: false,
    freeMode: true,
    spaceBetween: 20,
    allowTouchMove: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    setWrapperSize: true,
    breakpoints: {
      430: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1.5,
      },
      900: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1338: {
        slidesPerView: 2.5,
        draggable: true,
      },
    },
    navigation: {
      nextEl: '.main__live-betting_right-button',
      prevEl: '.main__live-betting_left-button',
    },
  })
  hideButtonsForLiveBetting(swiper)
}
sliderForLiveBetting()

function hideButtonsForReviewers(currentSwiper) {
  let buttonLeft = document.querySelector('#main__reviews_leftButton')
  let buttonRight = document.querySelector('#main__reviews_rightButton')
  if (currentSwiper.on('reachBeginning')) {
    buttonLeft.style.opacity = '0'
  }
  currentSwiper.on('reachBeginning', function () {
    buttonLeft.style.opacity = '0'
    buttonRight.style.opacity = '1'
  })
  currentSwiper.on('fromEdge', function () {
    buttonLeft.style.opacity = '1'
    buttonRight.style.opacity = '1'
  })

  currentSwiper.on('reachEnd', function () {
    buttonRight.style.opacity = '0'
    buttonLeft.style.opacity = '1'
  })
}

function sliderForReviewers() {
  const swiper = new Swiper('.main__reviewers', {
    direction: 'horizontal',
    loop: false,
    freeMode: true,
    spaceBetween: 20,
    allowTouchMove: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      430: {
        slidesPerView: 1.2,
      },
      600: {
        slidesPerView: 1.2,
      },
      900: {
        slidesPerView: 1.3,
      },
      1200: {
        slidesPerView: 1.3,
      },
      1338: {
        slidesPerView: 1.45,
      },
    },
    navigation: {
      nextEl: '#main__reviews_rightButton',
      prevEl: '#main__reviews_leftButton',
    },
  })
  hideButtonsForReviewers(swiper)
}
sliderForReviewers()

function hideButtonsForIndianLeague(currentSwiper) {
  const leftIndianSlider = document.querySelector(
    '.main__indian-league_content_slider-first'
  )
  const rightIndianSlider = document.querySelector(
    '.main__indian-league_content_slider-second'
  )
  let buttonLeft = document.querySelector('#indianButtonLeft')
  let buttonRight = document.querySelector('#indianButtonRight')
  if (currentSwiper.on('reachBeginning')) {
    buttonLeft.style.opacity = '0'
  }
  currentSwiper.on('reachBeginning', function () {
    buttonLeft.style.opacity = '0'
    buttonRight.style.opacity = '1'
    rightIndianSlider.classList.remove('indian-slider-active')
    leftIndianSlider.classList.add('indian-slider-active')
  })
  currentSwiper.on('reachEnd', function () {
    buttonRight.style.opacity = '0'
    buttonLeft.style.opacity = '1'
    leftIndianSlider.classList.remove('indian-slider-active')
    rightIndianSlider.classList.add('indian-slider-active')
  })
}

function sliderForIndianLeague() {
  const swiper = new Swiper('.main__indian-league_items', {
    direction: 'horizontal',
    loop: false,
    freeMode: true,
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: false,
    navigation: {
      nextEl: '#indianButtonRight',
      prevEl: '#indianButtonLeft',
    },
  })
  hideButtonsForIndianLeague(swiper)
}
sliderForIndianLeague()
