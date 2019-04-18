$(function(){
  /*モーダルオープン*/
  $('.js-image-modal').on('click',function(){
    $('body').addClass('no-scroll');
    $('#overlay').fadeIn();
    var id = $(this).data('id');
    $('.js-modal[data-id="modal' + id + '"]').scrollTop(0);
    $('.js-modal[data-id="modal' + id + '"]').fadeIn();
  })

  $('.close-modal').on('click', function(){
    $('body').removeClass('no-scroll');
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
    $('.js-modal').scrollTop(0);
  });
  $('#overlay').on('click', function(){
    $('body').removeClass('no-scroll');
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
    $('.js-modal').scrollTop(0);
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
  },500);
  });



});