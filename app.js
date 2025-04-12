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

var options = {
  root: null,
  rootMargin: '60%',
  threshold: 0.5 // Adjust the threshold as needed
};

// Callback function to handle intersection changes
function handleIntersection(entries, observer) {
  entries.forEach(function(entry) {
      if (entry.isIntersecting) {
          var imageUrl = entry.target.getAttribute('data-src');
          entry.target.style.backgroundImage = 'url(' + imageUrl + ')';
          observer.unobserve(entry.target); // Stop observing once loaded
      }
  });
}

// Create Intersection Observer
var observer = new IntersectionObserver(handleIntersection, options);

// Observe each element with the 'galleryimage' class
var galleryImages = document.querySelectorAll('.galleryimage');
galleryImages.forEach(function(image) {
  observer.observe(image);
});

// Accordion funkcionalitás
document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
          // Az aktuális accordion elem ('accordion-item')
          const currentItem = this.parentElement;

          // Aktív osztály váltása az elemen
          currentItem.classList.toggle('active');

          // Az ikon szövegének váltása (+/-)
          const icon = this.querySelector('.icon');
          if (currentItem.classList.contains('active')) {
              icon.textContent = '−'; // Vagy használhatsz rotate-et CSS-ben
          } else {
              icon.textContent = '+';
          }

          // Tartalom (accordion-content) elérése
          const content = this.nextElementSibling;

          // Magasság beállítása (CSS transition intézi a többit)
          if (currentItem.classList.contains('active')) {
              // Beállítás előtt lekérjük a görgetési magasságot, hogy a CSS tudja mire animáljon
              content.style.maxHeight = content.scrollHeight + "px";
          } else {
              content.style.maxHeight = null; // Visszaállítjuk 0-ra (CSS alapján)
          }

          // Opcionális: Ha azt szeretnéd, hogy csak egy lehessen nyitva egyszerre (Accordion stílus)
          // Kapcsold ki a kommentet a következő soroknál:
          /*
          accordionHeaders.forEach(otherHeader => {
              if (otherHeader !== this) {
                  const otherItem = otherHeader.parentElement;
                  if (otherItem.classList.contains('active')) {
                      otherItem.classList.remove('active');
                      otherHeader.querySelector('.icon').textContent = '+';
                      otherHeader.nextElementSibling.style.maxHeight = null;
                  }
              }
          });
          // Biztosítjuk, hogy a most kattintott elem nyitva legyen, ha előtte be volt zárva
           if (!currentItem.classList.contains('active')) {
               // A toggle már megtörtént feljebb, újra meg kell hívni a nyitáshoz
               currentItem.classList.add('active');
               icon.textContent = '−';
               content.style.maxHeight = content.scrollHeight + "px";
           }
          */
      });
  });

  // Ha vannak alapból nyitott elemek (pl. az első), itt lehet beállítani
  // const firstItem = document.querySelector('.accordion-item');
  // if (firstItem) {
  //     firstItem.classList.add('active');
  //     firstItem.querySelector('.accordion-header .icon').textContent = '−';
  //     const firstContent = firstItem.querySelector('.accordion-content');
  //     firstContent.style.maxHeight = firstContent.scrollHeight + "px";
  // }
});

