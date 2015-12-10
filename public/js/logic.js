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
      var result = response["results"][images]["cover_art"];
      imgList.push(images);
      }
      console.log(result);
})
});
