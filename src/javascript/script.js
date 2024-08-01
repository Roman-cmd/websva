let lastScrollTop = 0;
const header = document.querySelector('.header');
const target = document.querySelector('.target'); // предыдущий блок, после которого нужно показать header

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let targetTop = target.getBoundingClientRect().top;

  if (scrollTop > lastScrollTop){
    // при скролле вниз
    header.classList.add('header-hide');
  } else {
    // при скролле вверх
    if (targetTop >= window.innerHeight) { // если верхняя граница блока "target" ниже нижней границы видимой части страницы
      header.classList.remove('header-hide');
    }
  }
  lastScrollTop = scrollTop;
});
