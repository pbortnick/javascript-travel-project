$(function () {
  $(".dest-more").on('click', function(e) {
    var id = $(this).data("id");
    $.get("/destinations/" + id , function(data) {
      $("#more-" + id).append(data["price"]);
      $("#more-" + id).append(data["trip_length"]);
      $("#more-" + id).append(data["weather"]);
    });
    e.preventDefault();
  });
});
