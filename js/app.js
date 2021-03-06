
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");



    const navbar = document.querySelector('nav')
    const transitionObjs = document.querySelectorAll('.transition');

    var lastKnownScrollY = window.scrollY


    function checkNav() {
      if (lastKnownScrollY - window.scrollY > 0) {
        navbar.classList.remove('minimised')
      }
      if (lastKnownScrollY - window.scrollY < 0) {
        navbar.classList.add('minimised')
      }
      lastKnownScrollY = window.scrollY
    }


    const typeOn = document.querySelector('.type-on')
    const heroChevron = document.querySelector('.hero .fa-chevron-down')

    let typedText = ''
    typeOn.innerHTML = typedText

    function updateType(){
      typedText = typedText + typeOn.dataset.type[typedText.length]
      typeOn.innerHTML = typedText
      typing = setTimeout(updateType, (20 + Math.random()*130))

      if (typedText.length === typeOn.dataset.type.length){
        clearTimeout(typing)
        typeOn.classList.add('flash')
        heroChevron.classList.add('visable')
      }
    }

    let typing = setTimeout(updateType, (500))



    function checkTransitions() {
      transitionObjs.forEach(transitionObj => {
        const transitionAt = (window.scrollY + window.innerHeight) - (transitionObj.height || transitionObj.scrollHeight) * 0.4;
        const isHalfShown = transitionAt > transitionObj.offsetTop;

        if (isHalfShown) {
          transitionObj.classList.add('active');
        }
      });
    }

    function debounce(func, wait = 14, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments
        var later = function() {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      };
    }

    window.addEventListener('scroll', debounce(() => {
      checkTransitions()
      checkNav()
    }))

    var nav = document.querySelector("nav"),
    navToggle = document.querySelector("nav .skip");


    if (navToggle) {
      navToggle.addEventListener("click",
      function(e) {
        if (nav.classList.contains("open")) {
          nav.classList.remove("open");

        } else {
          nav.classList.add("open");

        }
        e.preventDefault();
      }, false);
    }

    /* Any click outside of the nav element will close the menu if it's open */
    var specifiedElement = document.querySelector('nav');
    document.addEventListener('click', function(event) {
      var isClickInside = specifiedElement.contains(event.target);
      if (!isClickInside && nav.classList.contains("open")) {
        nav.classList.remove("open");
      }
});

  });
