$(function() {
  $("a.more_info").on("click", function(e) {
    $.get(this.href).success(function(response){
      $("div.more").html(response)
    })
    e.preventDefault;
  });
})
