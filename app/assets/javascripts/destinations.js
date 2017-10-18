$(function () {
  $(".dest-show-more").on('click', function(e) {
    var id = $(this).data("id");
    $.get("/destinations/" + id + ".json", function(data) {
      var destination = data;
      $("#more-" + id).append("Price: $" + destination.price + "<br>");
      $("#more-" + id).append("Trip Length: " + destination.trip_length + " days" + "<br>");
      $("#more-" + id).append("Weather: " + destination.weather + "<br>");
      destination.agent_id === 1 ? $("#more-" + id).append("Agent: Pamela") : $("#more-" + id).append("Agent: Jason");
    });
    e.preventDefault();
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
      // $(".dest-more").empty();
    });
  });
});
