$(document).ready(function(){
    $("#main_level,#india_level,#japan_level,#singapore_level,#vietnam_level,#designation,#company_Functionality").hide();
});
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/
$('#dropdown-menu-type li').click(function () {
var selected_Type = $(this).attr('id');
    if(selected_Type!="jobseeker_Register"){
        $("#main_level,#india_level,#japan_level,#singapore_level,#vietnam_level,#designation,#company_Functionality").hide();
        $("#company_Functionality").css("display","block");
    }else{
        $("#company_Functionality").css("display","none");
    }
})
$('#company_Functionality  .dropdown #dropdown-menu-cmp li').click(function () {
    var selected_Cmp = $(this).attr('id');
if((selected_Cmp).includes('mainsunwell')){
    $("#main_level,#india_level,#japan_level,#singapore_level,#vietnam_level").hide();
    $("#main_level").css("display","block");
}
else if((selected_Cmp).includes('sunwellindia')){
    $("#main_level,#india_level,#japan_level,#singapore_level,#vietnam_level").hide();
    $("#india_level").show();
}
else if((selected_Cmp).includes('sunwelljapan')){
    $("#main_level,#india_level,#japan_level,#singapore_level,#vietnam_level").hide();
    $("#japan_level").show();
}
else if((selected_Cmp).includes('sunwellsingapore')){
    $("#main_level,#india_level,#japan_level,#singapore_level,#vietnam_level").hide();
    $("#singapore_level").show();
}
else if((selected_Cmp).includes('sunwellvietnam')){
    $("#main_level,#india_level,#japan_level,#singapore_level,#vietnam_level").hide();
    $("#vietnam_level").show();
}
}); 
$('#dropdown-menu-level li').click(function(){
    $("#designation").show();
})