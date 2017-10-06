// $(function() {
//   $(".dest-more").on("click", function(e) {
//     debugger;
//     $.get(this.href + ".json").success(function(json){
//       var $ol = $("div.destination-info ol")
//       $ol.html("")
//       json.forEach(function(destination){
//         $ol.append("<li>" + destination.location + "</li>" + "<li>" + destination.price + "</li>" + "<li>" + destination.trip_length + "</li>" + "<li>" + destination.weather + "</li>")
//       })
//     })
//     e.preventDefault();
//   })
// })

// $(function () {
//   $(".dest-more").on('click', function(e) {
//     var id = $(this).data("id");
//     $.get("/destinations/" + id , function(data) {
//       $("#more-" + id).append(data["price"]);
//       $("#more-" + id).append(data["trip_length"]);
//       $("#more-" + id).append(data["weather"]);
//     });
//     e.preventDefault();
//   });
// });

// $(function () {
//   $(".dest-more").on('click', function() {
//     var id = $(this).data("id");
//     $.get("/destinations/" + id + "/destination_data", function(data) {
//       $("#price-" + id).html(data.price);      $("#trip_length-" + id).html(data.price);
//       $("#weather-" + id).html(data.price);
//     });
//   });
// });

$(function() {
  $(".js-next-destination").on("click", function() {

    var nextId = parseInt($(".js-next-destination").attr("data-id")) + 1;

    $.get("/destinations/" + nextId + "/destination_data", function(data) {
      $(".js-next-destination").attr("data-id", data["id"]);
      $(".destinationLocation").text(data.location);
      $(".price").text(data.price);
      $(".trip_length").text(data.trip_length);
      $(".weather").text(data.weather);
    });
  });
});
