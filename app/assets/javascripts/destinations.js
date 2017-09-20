$(function(){
  $(".js-destinations").on("click", function(e){
    $.ajax({
      method: "GET",
      url: this.href
    }).success(function(response){
    })

    $.get(this.href).success(function(response){
      $("div.destinations").html(response)
    })

    $.get(this.href).success(function(json){

      var $ol = $("div.destinations ol")
      $ol.html("")

      json.forEach(function(destination){

        $ol.append("<li>" + destination.name + "</li>");
      })
    })

    e.preventDefault();
  })

 $(".js-destinations").on("click", function(e){
   $.ajax({
     url: this.href,
     dataType: 'script'
   })

   e.preventDefault();
 })
})
