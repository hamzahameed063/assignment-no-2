$(function(){
   $(".btn").click(handleBtnClick);
});

function handleBtnClick(){
  var einput = $(".email-input").val();
  var pinput = $(".password-input").val();
  if(!einput){
    $(".email-input").addClass("error");
    $(".email-error").addClass("error-text");
    $(".email-error").html("**Filled is empty");
    return false;
  }
  if(!pinput){
    $(".password-input").addClass("error");
    $(".password-error").addClass("error-text");
    $(".password-error").html("**Filled is empty");
    return false;
  }

}