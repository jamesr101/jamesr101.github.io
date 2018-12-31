
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const navbar = document.querySelector('nav')
    console.dir(navbar)

    window.addEventListener('scroll', checkScroll)


    var lastKnownScrollY = 0

    function checkScroll() {
      if (lastKnownScrollY - window.scrollY > 0) {
      console.count('going up!')
      navbar.classList.remove('minimised')

      }

      if (lastKnownScrollY - window.scrollY < 0) {
        console.count('going down!')
        navbar.classList.add('minimised')
      }
      lastKnownScrollY = window.scrollY
    }
  });
