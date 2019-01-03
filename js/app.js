
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

    function debounce(func, wait = 20, immediate = true) {
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

  });
