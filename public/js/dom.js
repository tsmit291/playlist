var imgList = "";

$(document).ready(function(){
  var ajaxi = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "json"
  })
  ajaxi.done(function(response){
    console.log(response);
})
});

// document ready function
// ajax request with url, method and datatype
// done function chained to the end.
