$(function () {
  $("a.load").on("click", function() {
    // $('.destinations ol li:last-child').remove();
    // $(".destinations").show();
    $(".new_destination_agent").show();
    var id = $(this).data("id");
    $.get("/agents/" + id + "/destinations.json", function(data) {
      data.map(function(destination) {
        $(".destinations ol").append("<li><a href=destinations/" + destination.id +">" + destination.location + "</a></li>");
      })
    });
  });
});

$(function () {
  $("#new_destination").on("submit", function(e) {
    e.preventDefault();
    var form = this;
    // url to submit post request to
    const url = this.action;
    // form data
    const data = {
      'authenticity_token': $("input[name='authenticity_token']").val(),
      'destination': {
        'location': $("#destination_location").val(),
        'price':
        $("#destination_price").val(),
        'trip_length':
        $("#destination_trip_length").val(),
        'weather':
        $("#destination_weather").val()
      }
    };
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: function(response) {
        var $ol = $("div.destinations ol")
        $ol.append(response);
        form.reset();
        $button = $('#a-d-submit')
        $.rails.enableElement($button)
        $button.removeAttr('disabled')
        // $('.destinations ol li:first-child').remove();
      }
    })
  });
});


// $(function() {
//   $("#new_destination").submit(function(e){
//     e.preventDefault();
//     const form = this;
//     $.ajax({
//         url: this.action,
//         type: "POST",
//         data: $(this).serialize(),
//         success: function(result) {
//           form.reset();
//           var $ol = $("div.comments ol")
//           $ol.append(result)
//           debugger;
//         }
//     });
//   })
// });

// $(function () {
//   $("#destination-form").on("submit", function(e){
//     e.preventDefault();
//     const form = this;
//     $.ajax({
//       type: ($("input[name='_method']").val() || this.method),
//       url: this.action,
//       data: $(this).serialize(),
//       success: function(response){
//         debugger;
//         form.reset();
//         var $ol = $("div.destinations ol")
//         $ol.append(response);
//       }
//     });
//   });
// })

// function Name(first_name, last_name) {
//   this.first_name = first_name;
//   this.last_name  = last_name;
// }
//
// Name.prototype.fullName = function () {
//   return this.first_name + " " + this.last_name;
// }

// $(function() {
//   $(".js-next").on("click", function() {
//
//     var nextId = parseInt($(".js-next").attr("data-id")) + 1;
//
//     $.get("/agents/" + nextId + ".json", function(data) {
//       $(".destinations ol").empty();
//       $(".js-next").attr("data-id", data.id);
//       agent = new Name(data.first_name, data.last_name);
//       $("a.load").empty();
//       // $(".form").empty();
//       $(".agentName").text(agent.fullName());
//     })
//     $.get("/agents/" + nextId + "/destinations.json", function(data) {
//       data.map(function(destination) {
//         $(".destinations ol").append("<li><a href=destinations/" + destination.id +">" + destination.location + "</a></li>");
//       })
//     });
//   });
// });
