const slider = document.querySelectorAll('.content__wrapper');

var indexSlide = 0;

slider.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideShow = () => {
  slider.forEach((slide) => {
    slide.style.transform = `translateX(-${indexSlide * 100}%)`;
  });
};

const previousPatient = () => {
  indexSlide--;
  slideShow();
};

const nextPatient = () => {
  indexSlide++;
  slideShow();
};

var show;

const menuOpen = () => {
  if (show == 1) {
    document.getElementById('menus').style.display = 'block';

    return (show = 0);
  } else {
    document.getElementById('menus').style.display = 'none';
    return (show = 1);
  }
};
