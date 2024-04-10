document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.type a');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        localStorage.setItem('selectedLink', this.id);
      });
  
      if (localStorage.getItem('selectedLink') === link.id) {
        link.classList.add('selected');
      }
    });
  });
  