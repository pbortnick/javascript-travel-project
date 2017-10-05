$(function() {
  $("a.load_destinations").on("click", function(e) {
    $.get(this.href + ".json").success(function(json){
      var $ol = $("div.destinations ol")
      $ol.html("")
      json.forEach(function(destination){
        $ol.append("<li>" + destination.location + "</li>")
      })
    })
    e.preventDefault();
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
  $(".next").on("click", function() {

    var nextId = parseInt($(".next").attr("data-id")) + 1;

    $.get("/agents/" + nextId + ".json", function(data) {
      agent = new Name(data.first_name, data.last_name)
      $(".next").attr("data-id", data.id);
      $(".agentName").text(agent.fullName());
      $(".destinations ol").empty();
    });
  });
});
