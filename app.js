function toggleExpand(element) {
  const isExpanded = element.classList.toggle('expanded');
  
  if (isExpanded) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}