// =======================================================================
// sidebar Arrow to go up to the top
var sideBarArrow = document.querySelector('.scrollnavUpDown')

// =======================================================================
// white section
var whiteSection = document.querySelector('.section-white')
var whiteArticle = document.querySelectorAll('.white-article')
var whiteArticleIcon = document.querySelectorAll('.white-article-icon')
var whiteArticleH3 = document.querySelectorAll('.white-article-h3')
var whiteArticleP = document.querySelectorAll('.white-article-p')

// =======================================================================
// products section
var sectionProducts = document.querySelector('.section-products')
var sectionProductsH2 = document.querySelectorAll('.section-products-h2')
var sectionProductsP1 = document.querySelectorAll('.section-products-p1')

var bigpanel = document.querySelector('.row-big-panels')
var bigpanelImages = document.querySelectorAll('.big-panel-image')
var bigpanelH3 = document.querySelectorAll('.big-panel-h3')

var rowSmallPanel = document.querySelector('.row-similar-offers')
var smallPanelh2 = document.querySelector('.similar-offers-h2')
var smallpanelImages = document.querySelectorAll('.smallpanelImages')

// =======================================================================
// form section
var sectionMap = document.querySelector('.row-section-map')
var formLabels = document.querySelectorAll('label')
var formInputs = document.querySelectorAll('input')
var textarea = document.querySelector('textarea')

function opacityOnScroll() {
  var windowTop0 = window.pageYOffset
  var windowTop = window.pageYOffset + 200
  var windowTop300 = window.pageYOffset + 300

  if (windowTop > sectionMap.offsetTop) {
    document
      .querySelector('.section-map-h2-header')
      .classList.add('form-opacity-active')

    for (var i = 0; i < formLabels.length; i++) {
      formLabels[i].classList.add('form-opacity-active')
    }
    for (var i = 0; i < formInputs.length; i++) {
      formInputs[i].classList.add('form-opacity-active')
    }

    textarea.classList.add('form-opacity-active')

    sectionMap
      .querySelector('.button-form-submit')
      .classList.add('form-opacity-active')
  } else {
    document
      .querySelector('.section-map-h2-header')
      .classList.remove('form-opacity-active')

    for (var i = 0; i < formLabels.length; i++) {
      formLabels[i].classList.remove('form-opacity-active')
    }
    for (var i = 0; i < formInputs.length; i++) {
      formInputs[i].classList.remove('form-opacity-active')
    }

    textarea.classList.remove('form-opacity-active')

    sectionMap
      .querySelector('.button-form-submit')
      .classList.remove('form-opacity-active')
  }

  // sidebar arrow go up to the top of the page ===============================

  if (windowTop0 > 600) {
    sideBarArrow.style.transition = 'all .4s'
    sideBarArrow.style.opacity = 1
  } else {
    sideBarArrow.style.opacity = 0
  }

  // white section ==========================================================
  if (windowTop > whiteSection.offsetTop) {
    for (var i = 0; i < whiteArticleIcon.length; i++) {
      whiteArticleIcon[i].classList.add('section-white-opacity-active')
    }

    for (var i = 0; i < whiteArticleH3.length; i++) {
      whiteArticleH3[i].classList.add('section-white-opacity-active')
    }

    for (var i = 0; i < whiteArticleP.length; i++) {
      whiteArticleP[i].classList.add('section-white-opacity-active')
      whiteArticleP[i].style.animationDelay = '.2s'
    }
  } else {
    for (var i = 0; i < whiteArticleIcon.length; i++) {
      whiteArticleIcon[i].classList.remove('section-white-opacity-active')
    }
    for (var i = 0; i < whiteArticleH3.length; i++) {
      whiteArticleH3[i].classList.remove('section-white-opacity-active')
      whiteArticleH3[i].style.animationDelay = '.5s'
    }
    for (var i = 0; i < whiteArticleP.length; i++) {
      whiteArticleP[i].classList.remove('section-white-opacity-active')
    }
  }

  // products section ======================================================
  if (windowTop > sectionProducts.offsetTop) {
    for (var i = 0; i < sectionProductsH2.length; i++) {
      sectionProductsH2[i].classList.add('products-opacity-active')
    }

    for (var i = 0; i < sectionProductsP1.length; i++) {
      sectionProductsP1[i].classList.add('products-opacity-active')
    }
  } else {
    for (var i = 0; i < sectionProductsH2.length; i++) {
      sectionProductsH2[i].classList.remove('products-opacity-active')
    }
    for (var i = 0; i < sectionProductsP1.length; i++) {
      sectionProductsP1[i].classList.remove('products-opacity-active')
    }
  }

  if (windowTop300 > bigpanel.offsetTop) {
    for (var i = 0; i < bigpanelImages.length; i++) {
      bigpanelImages[i].classList.add('products-opacity-active')
    }

    for (var i = 0; i < bigpanelH3.length; i++) {
      bigpanelH3[i].classList.add('products-opacity-active')
    }
  } else {
    for (var i = 0; i < bigpanelImages.length; i++) {
      bigpanelImages[i].classList.remove('products-opacity-active')
    }
    for (var i = 0; i < bigpanelH3.length; i++) {
      bigpanelH3[i].classList.remove('products-opacity-active')
    }
  }

  if (windowTop > rowSmallPanel.offsetTop) {
    smallPanelh2.classList.add('products-opacity-active')

    for (var i = 0; i < smallpanelImages.length; i++) {
      smallpanelImages[i].classList.add('products-opacity-active')
    }
  } else {
    smallPanelh2.classList.remove('products-opacity-active')
    for (var i = 0; i < smallpanelImages.length; i++) {
      smallpanelImages[i].classList.remove('products-opacity-active')
    }
  }
}

window.addEventListener('scroll', opacityOnScroll)

// This is the code for the nav links scroll to sections===================

// $('.scrollnavUpDown').css("opacity", 0);
//
// $(window).scroll(function(){
//    var pixelsScrolled= $(window).scrollTop();
//    if(pixelsScrolled >= 300){
//       $('.scrollnavUpDown').css("transition", ".5s");
//       $('.scrollnavUpDown').css("opacity", 1);
//    } else{
//       $('.scrollnavUpDown').css("opacity", 0);
//    }
//
// });
