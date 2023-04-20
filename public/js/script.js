function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  console.clear()
 console.warn('Mở dev tool làm mẹ j?')
};

