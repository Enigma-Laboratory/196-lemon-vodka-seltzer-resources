const mockData = [
  {
    id: 'slide-1',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 1',
    },
    image: {
      src: './assets/img/chapter3-us/can.svg',
      alt: 'Suntory -196 Lemon Can',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-2',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter3-us/store.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-3',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter3-us/store.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-4',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter3-us/store.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
]

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//   const scrollY = window.pageYOffset

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight
//     const sectionTop = current.offsetTop - 50
//     sectionId = current.getAttribute('id')

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//     } else {
//       document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//     }
//   })
// }
// window.addEventListener('scroll', scrollActive)

/*==============Carousel in US===============*/
document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.getElementById('slides-container-chapter-3-us')
  const prevButton = document.querySelector('.prev')
  const nextButton = document.querySelector('.next')
  let isTransitioning = false

  function createSlide(slide) {
    const slideDiv = document.createElement('div')
    slideDiv.classList.add('slide')
    slideDiv.id = slide.id
    const isPadding = mockData.length >= mockData.indexOf(slide) + 1

    slideDiv.innerHTML = `
      <div class="area" style="${isPadding ? 'margin-right: 26px;' : ''}">
        <div class="area-header">
          <img src="${slide.areaHeader.icon}" />
          <div>${slide.areaHeader.title}</div>
        </div>
        <img class="img-detail-area" src="${slide.image.src}" alt="${slide.image.alt}" />
        <p class="comment">${slide.comment}</p>
      </div>
    `
    return slideDiv
  }

  // Initialize slides
  mockData.forEach((slide) => {
    slidesContainer.appendChild(createSlide(slide))
  })

  // Update carousel position
  function updateCarousel(offset) {
    slidesContainer.style.transition = 'transform 0.5s ease'
    slidesContainer.style.transform = `translateX(${offset}px)`
  }

  // Handle next button click
  nextButton.addEventListener('click', () => {
    if (isTransitioning) return
    isTransitioning = true

    const slideWidth = document.querySelector('.slide').clientWidth
    const offset = -slideWidth

    updateCarousel(offset)

    setTimeout(() => {
      slidesContainer.style.transition = 'none'
      slidesContainer.style.transform = `translateX(0)`
      slidesContainer.appendChild(slidesContainer.firstElementChild)
      isTransitioning = false
    }, 500) // Adjust timing to match CSS transition
  })

  // Handle prev button click
  prevButton.addEventListener('click', () => {
    if (isTransitioning) return
    isTransitioning = true

    const slideWidth = document.querySelector('.slide').clientWidth
    const offset = slideWidth

    slidesContainer.style.transition = 'none'
    slidesContainer.style.transform = `translateX(${-offset}px)`
    slidesContainer.insertBefore(slidesContainer.lastElementChild, slidesContainer.firstElementChild)

    setTimeout(() => {
      slidesContainer.style.transition = 'transform 0.5s ease'
      slidesContainer.style.transform = `translateX(0)`
      isTransitioning = false
    }, 300) // Start transition immediately
  })

  window.addEventListener('resize', () => {
    slidesContainer.style.transition = 'none'
    slidesContainer.style.transform = `translateX(0)`
  }) // Reset position on resize
})

const mock_data_aus = [
  {
    id: 'slide-aus-1',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 1',
    },
    image: {
      src: './assets/img/chapter-3-aus/together.svg',
      alt: 'Suntory -196 Lemon Can',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-aus-2',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter-3-aus/messages.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-aus-3',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter-3-aus/together.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-aus-4',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter-3-aus/messages.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
]
/*==============Carousel in AUS===============*/
document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.getElementById('slides-container-chapter-3-aus')
  const prevButton = document.querySelector('.prev-chapter-3-aus')
  const nextButton = document.querySelector('.next-chapter-3-aus')
  let isTransitioning = false

  function createSlide(slide) {
    const slideDiv = document.createElement('div')
    slideDiv.classList.add('slide')
    slideDiv.id = slide.id
    const isPadding = mockData.length >= mockData.indexOf(slide) + 1

    slideDiv.innerHTML = `
      <div class="area" style="${isPadding ? 'margin-right: 26px;' : ''}">
        <div class="area-header">
          <img src="${slide.areaHeader.icon}" />
          <div>${slide.areaHeader.title}</div>
        </div>
        <img class="img-detail-area" src="${slide.image.src}" alt="${slide.image.alt}" />
        <p class="comment">${slide.comment}</p>
      </div>
    `
    return slideDiv
  }

  // Initialize slides
  mock_data_aus.forEach((slide) => {
    slidesContainer.appendChild(createSlide(slide))
  })

  // Update carousel position
  function updateCarousel(offset) {
    slidesContainer.style.transition = 'transform 0.5s ease'
    slidesContainer.style.transform = `translateX(${offset}px)`
  }

  // Handle next button click
  nextButton.addEventListener('click', () => {
    if (isTransitioning) return
    isTransitioning = true

    const slideWidth = document.querySelector('.slide').clientWidth
    const offset = -slideWidth

    updateCarousel(offset)

    setTimeout(() => {
      slidesContainer.style.transition = 'none'
      slidesContainer.style.transform = `translateX(0)`
      slidesContainer.appendChild(slidesContainer.firstElementChild)
      isTransitioning = false
    }, 500) // Adjust timing to match CSS transition
  })

  // Handle prev button click
  prevButton.addEventListener('click', () => {
    if (isTransitioning) return
    isTransitioning = true

    const slideWidth = document.querySelector('.slide').clientWidth
    const offset = slideWidth

    slidesContainer.style.transition = 'none'
    slidesContainer.style.transform = `translateX(${-offset}px)`
    slidesContainer.insertBefore(slidesContainer.lastElementChild, slidesContainer.firstElementChild)

    setTimeout(() => {
      slidesContainer.style.transition = 'transform 0.5s ease'
      slidesContainer.style.transform = `translateX(0)`
      isTransitioning = false
    }, 300) // Start transition immediately
  })

  window.addEventListener('resize', () => {
    slidesContainer.style.transition = 'none'
    slidesContainer.style.transform = `translateX(0)`
  }) // Reset position on resize
})

const mock_data_de = [
  {
    id: 'slide-aus-1',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 1',
    },
    image: {
      src: './assets/img/chapter-3-de/people.svg',
      alt: 'Suntory -196 Lemon Can',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-aus-2',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter-3-de/banner.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-aus-3',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter-3-de/people.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-aus-4',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter-3-de/banner.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
]

/*==============Carousel in DA===============*/
document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.getElementById('slides-container-chapter-3-de')
  const prevButton = document.querySelector('.prev-chapter-3-de')
  const nextButton = document.querySelector('.next-chapter-3-de')
  let isTransitioning = false

  function createSlide(slide) {
    const slideDiv = document.createElement('div')
    slideDiv.classList.add('slide')
    slideDiv.id = slide.id
    const isPadding = mockData.length >= mockData.indexOf(slide) + 1

    slideDiv.innerHTML = `
      <div class="area" style="${isPadding ? 'margin-right: 26px;' : ''}">
        <div class="area-header">
          <img src="${slide.areaHeader.icon}" />
          <div>${slide.areaHeader.title}</div>
        </div>
        <img class="img-detail-area" src="${slide.image.src}" alt="${slide.image.alt}" />
        <p class="comment">${slide.comment}</p>
      </div>
    `
    return slideDiv
  }

  // Initialize slides
  mock_data_de.forEach((slide) => {
    slidesContainer.appendChild(createSlide(slide))
  })

  // Update carousel position
  function updateCarousel(offset) {
    slidesContainer.style.transition = 'transform 0.5s ease'
    slidesContainer.style.transform = `translateX(${offset}px)`
  }

  // Handle next button click
  nextButton.addEventListener('click', () => {
    if (isTransitioning) return
    isTransitioning = true

    const slideWidth = document.querySelector('.slide').clientWidth
    const offset = -slideWidth

    updateCarousel(offset)

    setTimeout(() => {
      slidesContainer.style.transition = 'none'
      slidesContainer.style.transform = `translateX(0)`
      slidesContainer.appendChild(slidesContainer.firstElementChild)
      isTransitioning = false
    }, 500) // Adjust timing to match CSS transition
  })

  // Handle prev button click
  prevButton.addEventListener('click', () => {
    if (isTransitioning) return
    isTransitioning = true

    const slideWidth = document.querySelector('.slide').clientWidth
    const offset = slideWidth

    slidesContainer.style.transition = 'none'
    slidesContainer.style.transform = `translateX(${-offset}px)`
    slidesContainer.insertBefore(slidesContainer.lastElementChild, slidesContainer.firstElementChild)

    setTimeout(() => {
      slidesContainer.style.transition = 'transform 0.5s ease'
      slidesContainer.style.transform = `translateX(0)`
      isTransitioning = false
    }, 300) // Start transition immediately
  })

  window.addEventListener('resize', () => {
    slidesContainer.style.transition = 'none'
    slidesContainer.style.transform = `translateX(0)`
  }) // Reset position on resize
})

const mock_data_uk = [
  {
    id: 'slide-aus-1',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 1',
    },
    image: {
      src: './assets/img/chapter-3-uk/brochure.svg',
      alt: 'Suntory -196 Lemon Can',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-aus-2',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter-3-uk/banner.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-aus-3',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter-3-uk/brochure.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
  {
    id: 'slide-aus-4',
    areaHeader: {
      icon: './assets/img/marker.svg',
      title: 'Area 2',
    },
    image: {
      src: './assets/img/chapter-3-uk/banner.svg',
      alt: 'Store Display',
    },
    comment:
      'Comment:Welcome to our website! Here you will find a wide array of resources and information tailored just for you. WhetherWelcome to our website! Here you will find a wide array of resources and information tailored just for you. Whether',
  },
]
/*==============Carousel in UK===============*/
document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.getElementById('slides-container-chapter-3-uk')
  const prevButton = document.querySelector('.prev-chapter-3-uk')
  const nextButton = document.querySelector('.next-chapter-3-uk')
  let isTransitioning = false

  function createSlide(slide) {
    const slideDiv = document.createElement('div')
    slideDiv.classList.add('slide')
    slideDiv.id = slide.id
    const isPadding = mockData.length >= mockData.indexOf(slide) + 1

    slideDiv.innerHTML = `
      <div class="area" style="${isPadding ? 'margin-right: 26px;' : ''}">
        <div class="area-header">
          <img src="${slide.areaHeader.icon}" />
          <div>${slide.areaHeader.title}</div>
        </div>
        <img class="img-detail-area" src="${slide.image.src}" alt="${slide.image.alt}" />
        <p class="comment">${slide.comment}</p>
      </div>
    `
    return slideDiv
  }

  // Initialize slides
  mock_data_uk.forEach((slide) => {
    slidesContainer.appendChild(createSlide(slide))
  })

  // Update carousel position
  function updateCarousel(offset) {
    slidesContainer.style.transition = 'transform 0.5s ease'
    slidesContainer.style.transform = `translateX(${offset}px)`
  }

  // Handle next button click
  nextButton.addEventListener('click', () => {
    if (isTransitioning) return
    isTransitioning = true

    const slideWidth = document.querySelector('.slide').clientWidth
    const offset = -slideWidth

    updateCarousel(offset)

    setTimeout(() => {
      slidesContainer.style.transition = 'none'
      slidesContainer.style.transform = `translateX(0)`
      slidesContainer.appendChild(slidesContainer.firstElementChild)
      isTransitioning = false
    }, 500) // Adjust timing to match CSS transition
  })

  // Handle prev button click
  prevButton.addEventListener('click', () => {
    if (isTransitioning) return
    isTransitioning = true

    const slideWidth = document.querySelector('.slide').clientWidth
    const offset = slideWidth

    slidesContainer.style.transition = 'none'
    slidesContainer.style.transform = `translateX(${-offset}px)`
    slidesContainer.insertBefore(slidesContainer.lastElementChild, slidesContainer.firstElementChild)

    setTimeout(() => {
      slidesContainer.style.transition = 'transform 0.5s ease'
      slidesContainer.style.transform = `translateX(0)`
      isTransitioning = false
    }, 300) // Start transition immediately
  })

  window.addEventListener('resize', () => {
    slidesContainer.style.transition = 'none'
    slidesContainer.style.transform = `translateX(0)`
  }) // Reset position on resize
})


//NOTE: Check chapter 2 when entering the viewport, the effect will be activated
document.addEventListener('DOMContentLoaded', function() {
  const content = document.querySelector('.section__chapter2');

  const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: '0px', // No margin around the root
      threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
              // Optionally, you can unobserve the element if you want the animation to happen only once
              // observer.unobserve(entry.target);
          } else {
              // entry.target.classList.remove('active');
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(content);
});

document.addEventListener('DOMContentLoaded', function() {
  const contents = document.querySelectorAll('[animation="opacity"]')

  const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: '0px', // No margin around the root
      threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
              // Optionally, you can unobserve the element if you want the animation to happen only once
              // observer.unobserve(entry.target);
          } else {
              // entry.target.classList.remove('active');
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  contents.forEach(content => {
    observer.observe(content);
  });
});