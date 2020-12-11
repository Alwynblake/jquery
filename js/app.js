'use strict';
// https://developers.google.com/speed/libraries#jquery
// let body = document.getElementsByTagName('body')[0];
// html is the getter
// let body = $('body').html();
// console.log(body);

$('button').on('click', function() {
  //getting the text from the button
  // console.log($(this).text());

  //setting the text in the button to something new
  // console.log($(this).text('level'));

  //toggle
  $('ul').toggle('hide');
});

