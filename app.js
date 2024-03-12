function toggleExpand(element) {
  const isExpanded = element.classList.toggle('expanded');
  
  if (isExpanded) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function toggleNavbar() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('expanded');
}

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;

    window.scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
  event.preventDefault();
}

