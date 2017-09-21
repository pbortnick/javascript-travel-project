$(function() {
  $("#button").on("click", function(e){
    var $button = $(this);
    var url = $button.data("url")

    $.get(url, function(){
      $button.after("<%= j render('/destinations/form') %>")
    })
    e.preventDefault();
  })
})


$(function() {
  $("a.load_destinations").on("click", function(e) {
    $.get(this.href).success(function(json){
      var $ol = $("div.destinations ol")
      $ol.html("")
      json.forEach(function(destination){
        $ol.append("<li>" + destination.location + "</li>")
      })
    })
    e.preventDefault();
  })
})

$(function() {
  $("#destination_location").on("submit", function(e){
    $.ajax({
      type: ($("input[name='_method']").val() || this.method),
      url: this.href,
      data: $(this).serialize(),
      success: function(response) {
        $("#destination_location").val("");
        var $ol = $("div.destinations ol")
        $ol.append(response);
      }
    });
    e.preventDefault();
  })
})




//

//
// $(function() {
//   $("a.load_destinations").on("click", function(e) {
//     $.get(this.href).success(function(response){
//       $("div.destinations").html(response)
//     })
//     e.preventDefault;
//   });
// })
//
// // $(function() {
// //   $("a.load_destinations").on("click", function(e) {
// //     $.get(this.href).success(function(json){
// //       var $ol = $("div.destinations ol")
// //       $ol.html("");
// //       json.forEach(function(destination) {
// //         $ol.append("<li>" + destination.location + "</li>)";
// //       });
// //     });
// //     e.preventDefault;
// //   });
// // })
//
//
//
// $(function() {
//   $("#new_destination").on("submit", function(e) {
//     url = this.actions,
//     data = {
//       'authenticity_token': $("input[name='authenticity_token']").val()
//       content: { $("#destination_location").val(),
//       $("#destination_price").val(),
//       $("#destination_trip_length").val(),
//       $("#destination_weather").val(),
//       }
//     }
//     $.ajax({
//       type: "POST",
//       url: url,
//       data: data,
//       success: function() {
//         var $ol = $("div.destinations ol")
//         $ol.append("#destination_location");
//       }
//
//     })
//     e.preventDefault
//   })
// })
