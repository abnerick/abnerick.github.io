import _ from 'lodash';
import 'bootstrap';
import 'bootstrap-loader';
const css = require ('./app.scss');
var context = require.context('./audio', true);


$(document).ready(function() {
  // Bootstrap tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({html:true});
  })
});

function playTTS(word){
  var audio = new Audio();
  audio.src = "./audio/"+ word + ".mp3" ;
  audio.play();
}

window.playTTS = playTTS;
