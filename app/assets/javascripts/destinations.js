$(function () {
  $("a.dest-more").on("click", function() {
    var id = $(this).data("id");
    $.get("/destinations/" + id + ".json", function(data) {
      $("#price-" + id).append("Price: " + data["price"]);
      $("#trip_length-" + id).append("Trip Length: " + data["trip_length"]);
      $("#weather-" + id).append("Weather: " + data["weather"]);
    });
  });
});

$(function() {
  $(".js-next-destination").on("click", function() {
    var nextId = parseInt($(".js-next-destination").attr("data-id")) + 1;
    $.get("/destinations/" + nextId + ".json", function(data) {
      $(".js-next-destination").attr("data-id", data["id"]);
      $(".destinationLocation").text(data.location)
      $(".price").text("Price: " + data.price);
      $(".trip-length").text("Trip Length: " + data.trip_length);
      $(".weather").text("Weather: " + data.weather);
      $(".dest-more").empty();
    });
  });
});
