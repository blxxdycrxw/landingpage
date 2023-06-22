document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.nav-2 ul li a');
  
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', scrollToSection);
  }
  
  function scrollToSection(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      var offsetTop = targetElement.offsetTop;
      
      if (targetId === '#socials' || targetId === '#publicity' || targetId === '#seo' || targetId === '#contentc' || targetId === '#emailm' || targetId === '#data-ana' || targetId === '#consultancy') {
        offsetTop -= 45;
      }
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
});