PubSub.subscribe('openHero', function() {
  $('.hero-wrapper').addClass('is-visible')
  $('body').addClass('is-not-scrollable')
})

PubSub.subscribe('closeHero', function() {
  $('.hero-wrapper').removeClass('is-visible')
  $('body').removeClass('is-not-scrollable')
})

$('.hero-wrapper').on('click', function() {
  PubSub.publish('closeHero')
})

$('.hero-container').on('click', function(e){
  e.stopPropagation();
})