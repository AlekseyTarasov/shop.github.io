simpleCart.ready(function() {
  simpleCart.each(function(item, x) {
    $('form').append('<input type="hidden" name="Name" value="' + item.get('name') + '"/>');
    $('form').append('<input type="hidden" name="Price" value="'$'' + item.get('price') + '"/>');
  });
});