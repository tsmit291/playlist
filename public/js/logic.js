$(document).ready(function(){
  var ajaxi = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "json"
  })
  ajaxi.done(function(response){
    imgList = [];
    for (var i = 0; i < 3; i++) {
      var images = Math.floor(Math.random() * response['results'].length);
      var result = response['results'][images]['cover_art'];
        imgList.push(result);
      // document.getElementById("placeHold").innerHTML= imgList[i];
      $('#placeHold').append('<img class="coverPhotos" src="images/'+imgList[i]+'"/>');
      console.log(imgList);
    };
    var playlistResults = response['results'];
    for (var i = 0; i < playlistResults.length; i++) {
    var albumPicts = playlistResults[i]['cover_art'];
      $('.albumCovers').append('<img class="coverPict" src="images/'+albumPicts+'"/>');
      console.log(albumPicts);
    }

  });
})
//
// var ajaxiPost = $.ajax({
//   url: "https://lit-fortress-6467.herokuapp.com/post",
//   method: "POST"
//   data: {goo: "bar"}
// })
// });
//
