$.fn.BeerSlider = function ( options ) {
  options = options || {};
  return this.each(function() {
    new BeerSlider(this, options);
  });
};
$('.beer-slider').BeerSlider({start: 50});
