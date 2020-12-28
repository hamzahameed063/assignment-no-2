$(function(){
   $(".btn").click(handleBtnClick);
});

function handleBtnClick(){
  var input = $(".form-control").val();
  console.log(input);
  if(!input){
    $(".form-control").addClass("error");
  }
}