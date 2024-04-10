document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.type a');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        links.forEach(function(l) {
          l.classList.remove('selected');
        });
        this.classList.add('selected');
      });
  
      if (window.location.href === link.href) {
        link.classList.add('selected');
      }
    });
  });
  