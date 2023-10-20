function Menu(e) {
  let List = document.querySelector('ul');

  e.name === 'menu' ? ((e.name = 'close'), List.classList.add('top-[80px]'), 
      List.classList.add('opacity-100')) : ((e.name = 'menu'),
          List.classList.remove('top-[80px]'), List.classList.remove('opacity-100'));
}
