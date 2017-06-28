import _ from 'lodash';
const css = require ('./app.scss');
var context = require.context('./audio', true);
var bs = require('bootstrap');

$(document).ready(function() {
  // Bootstrap tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({html:true});
  })
});

function playTTS(word){
  var audio = new Audio();
  audio.src = "/audio/"+ word + ".mp3" ;
  audio.play();
}

window.playTTS = playTTS;
