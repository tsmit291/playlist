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
    }
})
});







//array holding what I get from my for loop
//each time I iterate through my loop (up to three times), i grab a random number and a random result for cover art.
// push the results (cover art) into the imgList array.
// append that array into my placehold id.
//
