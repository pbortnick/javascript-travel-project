$(function () {
  $("a.load").on("click", function() {
    var id = $(this).data("id");
    $.get("/agents/" + id + ".json", function(data) {
      data.destinations.forEach(function(destination) {
        $(".destinations ol").append("<li>"+ destination.location + "</li>");
      })
    });
  });
});

function Name(first_name, last_name) {
  this.first_name = first_name;
  this.last_name  = last_name;
}

Name.prototype.fullName = function () {
  return this.first_name + " " + this.last_name;
}

$(function() {
  $(".js-next").on("click", function() {

    var nextId = parseInt($(".js-next").attr("data-id")) + 1;

    $.get("/agents/" + nextId + ".json", function(data) {
      $(".js-next").attr("data-id", data["id"]);
      agent = new Name(data["first_name"], data["last_name"]);
      $("a.load").empty();
      $(".agentName").text(agent.fullName());
      data.destinations.forEach(function(destination) {
        $(".destinations ol").html("<li>"+ destination.location + "</li>");
      });
    });
  });
});
