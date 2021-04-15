$(document).ready(function(){
    // Get value on button click and show alert
    $("#btnkirimpesan").click(function(){
        var str = $("#nama").val();
        var strEmail = $("#email").val();
        alert("Nama:" +str+ "\nEmail:" +strEmail);
       // alert();
      //var txtName =  $('#txtName').val();
      //var txt =  $('#txt').val();
      //alert(' NAME y:'+txtName+'  FEEDBACK :'+txt);
    });
});