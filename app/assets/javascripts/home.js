function PriceCheck(price) {
  this.price = price;
}

PriceCheck.prototype.comparison = function () {
  const leastPrice = parseInt($('#least-price').html());
  const leastLocation = $('#least-location').html();
  const difference = this.price - leastPrice;
  const differenceNote = "Traveling here will cost you " + difference + " more than the least expensive trip (" + leastLocation +")"
  const noDifferenceNote = "This is the least expensive trip"
  return difference === 0 ? noDifferenceNote : differenceNote;
}

$(function () {
  $(".dest-index-more").on('click', function(e) {
    var id = $(this).data("id");
    $.get("/destinations/" + id + ".json", function(data) {
      destDifference = new PriceCheck(data.price)
      var destination = data;

      $("#more-" + id).append("Price: $" + destination.price + "<br>");
      $("#more-" + id).append("Trip Length: " + destination.trip_length + " days" + "<br>");
      $("#more-" + id).append("Weather: " + destination.weather + "<br>");
      $("#more-" + id).append("Agent: " + destination.agent.first_name + "<br>");
      $("#more-" + id).append(destDifference.comparison());
    });
    e.preventDefault();
  });
});
