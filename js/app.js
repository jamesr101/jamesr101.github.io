
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




    window.addEventListener('scroll', checkSlide)

    const sliderImages = document.querySelectorAll('.transition');

    function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height || sliderImage.scrollHeight) / 2;
        // bottom of the image
        // const imageBottom = sliderImage.offsetTop + (sliderImage.height || sliderImage.scrollHeight);
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        // const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown) {
          sliderImage.classList.add('active');
        }
      });
    }

  });
