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


$(function() {
  $(".next").on("click", function() {

    var nextId = parseInt($(".next").attr("data-id")) + 1;

    $.get("/agents/" + nextId + ".json", function(data) {
      var agent = data;
      function Name(first_name, last_name) {
        agent.first_name = first_name;
        agent.last_name  = last_name;
      }

      Name.prototype.fullName = function () {
        return agent.first_name + " " + agent.last_name;
      }
      debugger;
      $(".agentName").text(fullName())
    });
  });
});
