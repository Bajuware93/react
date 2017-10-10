$(document).ready(function(){
  $('#namebtn').click(function() {
    let val_name = $('#nameID').val();
    alert('Hier ist ' + val_name);

    $.ajax({
      type: 'POST',
      url: 'server_name.php',
      data:{
        name: val_name
      }
    }).done(function(data){
      alert(data)
      $('#ergebnis').html(data);

    }).fail(function() {
      alert( "error" );
    });

  });

});