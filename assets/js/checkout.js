simpleCart.ready(function() {
  simpleCart.each(function(item, x) {
    $('form').append('<input type="hidden" name="Name" value="' + item.get('name') + '"/>');
    $('form').append('<input type="hidden" name="Price" value="' + item.get('price') + '"/>');
    $('form').append('<input type="hidden" name="Size" value="' + item.get('size') + '"/>');
    $('form').append('<input type="hidden" name="Color" value="' + item.get('color') + '"/>');
    $('form').append('<input type="hidden" name="Quantity" value="' + item.get('quantity') + '"/>');
    $('form').append('<input type="hidden" name="Total price" value="' + item.get('total') + '"/>');
  });
});