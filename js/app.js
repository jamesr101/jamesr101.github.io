
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const navbar = document.querySelector('nav')


    window.addEventListener('scroll', checkScroll)


    var lastKnownScrollY = 0

    function checkScroll() {
      if (lastKnownScrollY - window.scrollY > 0) {
      console.log('going up!', window.scrollY)
      navbar.classList.remove('minimised')

      }

      if (lastKnownScrollY - window.scrollY < 0) {
        console.log('going down!', window.scrollY)
        navbar.classList.add('minimised')
      }
      lastKnownScrollY = window.scrollY
    }
  });
