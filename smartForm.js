// Your jQuery goes here
var userData = {};
// if(localStorage.getItem('userData')){
//   userData= JSON.parse(localStorage.getItem('userData'));
//   $('.question').hide();
//   $('#'+userData.currentQuestion).show();
//   $("#name").val(userData.name);
//   $("#email").val(userData.email);
// }
// else {

var userData = {
  name: "test",
  email: "",
  html: {likes:[], dislikes:[]},
  css: {likes:[], dislikes:[]},
  js: {likes:[], dislikes:[]},
  strengths: {html:"",css:"", js:""},
  currentQuestion: "welcome"
};
//  localStorage.setItem('userData', JSON.stringify(userData));
//}

$("#startbtn").click(function(event){
  $("#welcome").hide();
  $("#q1").show();
});

$("#name").change(function(event){
console.log($("#name").val());
});

$("#email").change(function(event){
console.log($("#email").val());

  // if($("#email").val() && $("name").val()== ""){
  // }
  $("#q1Next").prop("disabled", false);

});

$("#q1Next").click(function(event){
  // userData.name = $("#name").val();
  // userData.email = $("#email").val();
  // userData.currentQuestion = "q1";
  // localStorage.setItem('userData',JSON.stringify(userData));
  $("#q1").hide();
  $("#q2").show();
});

$("#h").click(function(event){
  //$("#q2").hide();
  $("#q2a").show();
  $("#q2b").hide();
  $("#q2c").hide();
});

$("#hPrev").click(function(event){
  $("#q1").show();
  $("#q2").hide();
  $("#q2a").hide();
  $("#q2b").hide();
  $("#q2c").hide();
});


$("#hNext").click(function(event){
//shows CSS
  $("#q2a").hide();
  $("#q2b").show();
  $("#q2c").hide();
});

$("#c").click(function(event){
  //$("#q2").hide();
  $("#q2a").hide();
  $("#q2b").show();
  $("#q2c").hide();
});

$("#cPrev").click(function(event){
//shows CSS
$("#q2a").show();
$("#q2b").hide();
$("#q2c").hide();
});

$("#cNext").click(function(event){
//shows CSS
$("#q2a").hide();
$("#q2b").hide();
$("#q2c").show();
});


$("#j").click(function(event){
  //$("#q2").hide();
  $("#q2a").hide();
  $("#q2b").hide();
  $("#q2c").show();
});

$("#jPrev").click(function(event){
  //$("#q2").hide();
  $("#q2a").hide();
  $("#q2b").show();
  $("#q2c").hide();
});

$("#jNext").click(function(event){
//shows CSS
$("#q2a").hide();
$("#q2b").hide();
$("#q2c").hide();
$("#q3").show();

});
$("#jjPrev").click(function(event){
//shows CSS
$("#q2a").hide();
$("#q2b").hide();
$("#q2c").show();
});

$("#jjNext").click(function(event){
//shows CSS
$("#q2").hide();
$("#q2a").hide();
$("#q2b").hide();
$("#q2c").hide();
$("#q3").hide();
$("#thanks").show();
});
// $("#htmlQ").click(function(event){
//   //$("#q2").hide();
//   $("#q2a").show();
//   //$("#q2b").show();
// });
