$(document).ready(function(){
    console.log('hellow');
  var box1 = $('.box1');
  var btn = $('.btn');

  btn.on('click', function(){
      console.lon('ok');
    box1.toggleClass('box-act');
  });
});
