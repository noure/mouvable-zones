$(document).ready(function(){

    $('div').show();

    $('div').draggable({
      drag: function(event, box){
        var p = Math.round((box.position.left) * .1);
        $(this).css({
          '-webkit-box-shadow' : (box.position.left * .01) + 'px ' + (box.position.top * .01) + 'px ' + '20px rgb' + '(' + p + ' ,' + p + ',' + p + ')',
          'transition' : '0.0s',
          'padding' : '2px',
        });
      },
      stop: function(event, box){
        var p = Math.round((box.position.left) * .08);
        $(this).css({
          '-webkit-box-shadow' : (box.position.left * .006) + 'px ' + (box.position.top * .006) + 'px ' + '10px rgb' + '(' + p + ' ,' + p + ',' + p + ')',
          'transition' : '0.5s',
          'padding' : '0px',
        });
      }
    });


  $('div').mousedown(function(){
    var box = $(this).position();
    var p = Math.round((box.left) * .1);
    $(this).css({
      '-webkit-box-shadow' : (box.left * .01) + 'px ' + (box.top * .01) + 'px ' + '20px rgb' + '(' + p + ' ,' + p + ',' + p + ')',
      'transition' : '0.5s',
      'padding' : '2px',
    });
    $(this).addClass('top').removeClass('bottom');
    $(this).siblings().removeClass('top').addClass('bottom');
  });


  $('div').mouseup(function(){
    var box = $(this).position();
    var p = Math.round((box.left) * .08);
    $(this).css({
      '-webkit-box-shadow' :  (box.left * .006) + 'px ' + (box.top * .006) + 'px ' + '10px rgb' + '(' + p + ' ,' + p + ',' + p + ')',
      'transition' : '0.5s',
      'padding' : '0px',
    });
  });


});
