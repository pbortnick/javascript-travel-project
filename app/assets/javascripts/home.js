$(function () {
  $(".dest-index-more").on('click', function(e) {
    var id = $(this).data("id");
    $.get("/destinations/" + id + ".json", function(data) {
      var destination = data;
      $("#more-" + id).append("Price: $" + destination.price + "<br>");
      $("#more-" + id).append("Trip Length: " + destination.trip_length + " days" + "<br>");
      $("#more-" + id).append("Weather: " + destination.weather + "<br>");
      $("#more-" + id).append("Agent: " + destination.agent.first_name + "<br>");
    });
    e.preventDefault();
  });
});
