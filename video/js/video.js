(function(){

  var video = document.getElementById('video');
  var vendorUrl = window.URL || window.webkitURL;

  navigator.getMedia =    navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozUserMedia ||
                          navigator.msGetUserMedia;


  navigator.getMedia({
    video: true,
    audio: false,
  }, function(stream) {
    console.log(stream);
    video.src = vendorUrl.createObjectURL(stream);
    video.play();
  }, function(error) {
    console.log(error);
  })


})();
