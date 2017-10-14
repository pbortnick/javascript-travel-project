$(function () {
  $(".dest-index-more").on('click', function(e) {
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
