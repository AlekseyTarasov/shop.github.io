simpleCart.ready(function() {
  simpleCart.each(function(item, x) {
    $('form').append('<input type="hidden" name="Name" value="' + item.get('name') + '"/>');
  });
});
