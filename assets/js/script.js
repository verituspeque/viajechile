$(function() {
$("#enviar").click(function () {
alert("¡El mensaje ha sido enviado exitosamente!")

})

$(".card-title").click(function (){
$(".card-text").toggle();
})

$("body").on("dblclick", "h5", function (){
  $(this).css("color", "black");
})
})
