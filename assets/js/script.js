$(document).ready(function(){
    $("#register_Section").hide();
});
$("#redirect_Signin").click(function(){
    $("#register_Section").fadeOut();
    $("#signin_Section").fadeIn();
});
$("#redirect_Register").click(function(){
    $("#signin_Section").fadeOut();
    $("#register_Section").fadeIn();
});