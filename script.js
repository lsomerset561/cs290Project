//disable form submit if there are invalid fields
(function() {
  window.addEventListener('load', function() {
    var businessForm = document.getElementById('needsValidation');
    businessForm.addEventListener('submit', function(event) {
      if (businessForm.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      businessForm.classList.add('was-validated');
    }, false);
  }, false);
})();