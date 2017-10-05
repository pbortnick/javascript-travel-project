// $(function () {
//   $("a.load_destinations").on('click', function() {
//     var id = $(this).data("id");
//     $.get("/agents/" + id + "destinations", function(data) {
//       $("div.destinations ol").html(data["destination.location"]);
//     });
//   });
// });

$(function() {
  $("a.load_destinations").on("click", function(data) {
    $.get(this.href + ".json").success(function(json){
      var $ol = $("div.destinations ol")
      $ol.html("")
      json.forEach(function(destination){
        $ol.append("<li>" + destination.location + "</li>")
      })
    })
    data.preventDefault();
  })
})

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
      $(".js-next").attr("href", "/agents/" + nextId);
      agent = new Name(data.first_name, data.last_name)
      $(".agentName").text(agent.fullName());
      $(".destinations ol").empty();
    });
  });
});
