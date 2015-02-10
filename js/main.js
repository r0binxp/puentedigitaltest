$(document).ready(function(){

    var imagenGalerN;

    $("#conozcaMas").click(function(){
        window.location.href = "historia.html";
    });
    $("#masServicios").click(function(){
        window.location.href = "servicios.html";
    });
    $(".galeriaFotos li").click(function(){
        var i = $(this).index();
        cargaGaleria(i+1);

    })

})

function cargaGaleria(imgN) {

    $imagenGalerN = $("#imagenGaler").attr("src","img/galeria/"+ imgN +".JPG");
    return $imagenGalerN
}
function cargaSendMail(){
 
 
    $("#sendboton").attr("disabled", true);
 
    $(".c_error").remove();
 
    var filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
    var s_email = $('#inputEmail').val();
    var s_name = $('#inputNombre').val();    
    var s_msg = $('#inputArea').val();
 
    if (filter.test(s_email)){
    sendMail = "true";
    } else{
    $('#inputEmail').after("<span class='c_error' id='c_error_mail'>Ingrese e-mail valido.</span>");
     //aplicamos color de borde si el se encontro algun error en el envio
    $('.form-horizontal').css("border-color","#e74c3c");   
    sendMail = "false";
    }
    if (s_name.length == 0 ){
    $('#inputNombre').after( "<span class='c_error' id='c_error_name'>Ingrese su nombre.</span>" );
    var sendMail = "false";
    }
    if (s_msg.length == 0 ){
    $('#inputArea').after( "<span class='c_error' id='c_error_msg'>Ingrese mensaje.</span>" );
    var sendMail = "false";
    }
 
    
    if(sendMail == "true"){
     
     var datos = {
 
             "nombre" : $('#inputNombre').val(),
 
             "email" : $('#inputEmail').val(),
 
             "mensaje" : $('#inputArea').val()
 
     };
 
     $.ajax({
 
             data:  datos,
             // hacemos referencia al archivo contacto.php
             url:   '../contacto.php',
 
             type:  'post',
 
             beforeSend: function () {
             //aplicamos color de borde si el envio es exitoso
                    $('.form-horizontal').css("border-color","#25A25A");
 
                     $("#sendboton").val("Enviando...");
 
             },
 
             success:  function (response) {
 
                    $('form')[0].reset(); 
                    $("#sendboton").val("CONTACTENOS");
                    $("#c_information p").html(response);
                    $("#c_information").fadeIn('slow');
                    $("#sendboton").removeAttr("disabled");
                     
 
 
             }
 
     });
 
} else{
    $("#sendboton").removeAttr("disabled");
}
 
}



