$(document).ready(function(){
  $("#sbmform").on("submit", function(ev){
    ev.preventDefault();
    $.ajax({
  method: "POST",
  url: "ajax.php",
  data: $(this).serialize()
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
  });
});
