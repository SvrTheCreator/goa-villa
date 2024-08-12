function mobileNav() {
  const navBtn = document.querySelector('.header__burger-menu')
  const nav = document.querySelector('.mobile-nav')

  navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav--open')
    document.body.classList.toggle('no-scroll')
  }
}
mobileNav()
function forReasons() {
  const forReasonsButtonOne = document.querySelector('#forReasonsButtonOne')
  const reasonsButtonOne = (document.querySelector(
    '#reasonsButtonOne'
  ).onclick = function () {
    forReasonsButtonOne.classList.toggle('main__reasons_text-active')
  })
  const forReasonsButtonTwo = document.querySelector('#forReasonsButtonTwo')
  const reasonsButtonTwo = (document.querySelector(
    '#reasonsButtonTwo'
  ).onclick = function () {
    forReasonsButtonTwo.classList.toggle('main__reasons_text-active')
  })
  const forReasonsButtonThree = document.querySelector('#forReasonsButtonThree')
  const reasonsButtonThree = (document.querySelector(
    '#reasonsButtonThree'
  ).onclick = function () {
    forReasonsButtonThree.classList.toggle('main__reasons_text-active')
  })
  const forReasonsButtonFour = document.querySelector('#forReasonsButtonFour')
  const reasonsButtonFour = (document.querySelector(
    '#reasonsButtonFour'
  ).onclick = function () {
    forReasonsButtonFour.classList.toggle('main__reasons_text-active')
  })
}
forReasons()
function forHowToUse() {
  const textForHowUseOne = document.querySelector('#forHow-use_button-1')
  const buttonForHowUseOne = (document.querySelector(
    '#how-use_button-1'
  ).onclick = function () {
    textForHowUseOne.classList.toggle('main__reasons_text-active')
  })
  const textForHowUseTwo = document.querySelector('#forHow-use_button-2')
  const buttonForHowUseTwo = (document.querySelector(
    '#how-use_button-2'
  ).onclick = function () {
    textForHowUseTwo.classList.toggle('main__reasons_text-active')
  })
  const textForHowUseThree = document.querySelector('#forHow-use_button-3')
  const buttonForHowUseThree = (document.querySelector(
    '#how-use_button-3'
  ).onclick = function () {
    textForHowUseThree.classList.toggle('main__reasons_text-active')
  })
  const forFaqButtonOne = document.querySelector('#forFaqButtonOne')
  const faqButtonOne = (document.querySelector('#faqButtonOne').onclick =
    () => {
      forFaqButtonOne.classList.toggle('main__faq_text-active')
    })
  const forFaqButtonTwo = document.querySelector('#forFaqButtonTwo')
  const faqButtonTwo = (document.querySelector('#faqButtonTwo').onclick =
    () => {
      forFaqButtonTwo.classList.toggle('main__faq_text-active')
    })
  const forFaqButtonThree = document.querySelector('#forFaqButtonThree')
  const faqButtonThree = (document.querySelector('#faqButtonThree').onclick =
    () => {
      forFaqButtonThree.classList.toggle('main__faq_text-active')
    })
  const forFaqButtonFour = document.querySelector('#forFaqButtonFour')
  const faqButtonFour = (document.querySelector('#faqButtonFour').onclick =
    () => {
      forFaqButtonFour.classList.toggle('main__faq_text-active')
    })
}
forHowToUse()

function scrollFromItem() {
  const indianPremierLeague = document.querySelector('.main__indian-league')
  const scrollFromIndianPremierLeague = document.querySelector(
    '#indianPremierLeague'
  )
  scrollFromIndianPremierLeague.onclick = () => {
    indianPremierLeague.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const iplAppDownload = document.querySelector('.main__betting-app')
  const scrollFromiplAppDownload = document.querySelector('#iplAppDownload')
  scrollFromiplAppDownload.onclick = () => {
    iplAppDownload.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const iplCricketBetting = document.querySelector('.main__live-betting')
  const scrollFromiplCricketBetting =
    document.querySelector('#iplCricketBetting')
  scrollFromiplCricketBetting.onclick = () => {
    iplCricketBetting.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const welcomeBonus = document.querySelector('.main__bonuses')
  const scrollFromwelcomeBonus = document.querySelector('#welcomeBonus')
  scrollFromwelcomeBonus.onclick = () => {
    welcomeBonus.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const reasonsToDownload = document.querySelector('.main__reasons')
  const scrollFromreasonsToDownload =
    document.querySelector('#reasonsToDownload')
  scrollFromreasonsToDownload.onclick = () => {
    reasonsToDownload.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const iplmobilefeatures = document.querySelector('.main__mobile-app')
  const scrollFromiplmobilefeatures =
    document.querySelector('#iplmobilefeatures')
  scrollFromiplmobilefeatures.onclick = () => {
    iplmobilefeatures.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const howToUse = document.querySelector('.main__how-use')
  const scrollFromhowToUse = document.querySelector('#howToUse')
  scrollFromhowToUse.onclick = () => {
    howToUse.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const reviews = document.querySelector('.main__reviews')
  const scrollFromreviews = document.querySelector('#reviews')
  scrollFromreviews.onclick = () => {
    reviews.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const mainInformation = document.querySelector('.main__information')
  const scrollFrommainInformation = document.querySelector('#mainInformation')
  scrollFrommainInformation.onclick = () => {
    mainInformation.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const iplPredictionApp = document.querySelector('.main__download')
  const scrollFromiplPredictionApp = document.querySelector('#iplPredictionApp')
  scrollFromiplPredictionApp.onclick = () => {
    iplPredictionApp.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const faq = document.querySelector('.main__faq')
  const scrollFromfaq = document.querySelector('#faq')
  scrollFromfaq.onclick = () => {
    faq.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
}
scrollFromItem()

function scrollForLiveBet() {
  const divScroll = document.querySelector('.main__live-betting_items')
  const leftLiveScrollButton = document.querySelector(
    '.main__live-betting_left-button'
  )
  const rightLiveScrollButton = document.querySelector(
    '.main__live-betting_right-button'
  )

  leftLiveScrollButton.onclick = () => {
    divScroll.scrollLeft -= 500
  }

  rightLiveScrollButton.onclick = () => {
    divScroll.scrollLeft += 500
  }
}
scrollForLiveBet()

function scrollForReviewers() {
  const divScrollForReviewers = document.querySelector('.main__reviewers')
  const leftReviewsButton = document.querySelector('#main__reviews_leftButton')
  const rightReviewsButton = document.querySelector(
    '#main__reviews_rightButton'
  )

  leftReviewsButton.onclick = () => {
    divScrollForReviewers.scrollLeft -= 500
  }

  rightReviewsButton.onclick = () => {
    divScrollForReviewers.scrollLeft += 500
  }
}
scrollForReviewers()
