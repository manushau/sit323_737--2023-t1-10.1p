$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $.post('/', $(this).serialize(), function(data) {
      $('#result').text(data);
    });
  });
});
