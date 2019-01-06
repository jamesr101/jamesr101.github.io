
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


    function checkTransitions() {
      transitionObjs.forEach(transitionObj => {
        const transitionAt = (window.scrollY + window.innerHeight) - (transitionObj.height || transitionObj.scrollHeight) / 2;
        const isHalfShown = transitionAt > transitionObj.offsetTop;

        if (isHalfShown) {
          transitionObj.classList.add('active');
        }
      });
    }

    function debounce(func, wait = 18, immediate = true) {
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

    var nav = document.querySelector("nav ul"),
    navToggle = document.querySelector("nav .skip");

    if (navToggle) {
      navToggle.addEventListener("click",
      function(e) {
        if (nav.className == "open") {
          nav.className = "";
        } else {
          nav.className = "open";
        }
        e.preventDefault();
      }, false);
    }

    /* Any click outside of the nav element will close the menu if it's open */
    var specifiedElement = document.querySelector('nav');
    document.addEventListener('click', function(event) {
      var isClickInside = specifiedElement.contains(event.target);
      if (!isClickInside && nav.className == "open") {
        nav.className = "";
      }
});

  });
