// Your jQuery goes here

var userData = {
  name: "",
  email: "",
  html: {likes:[], dislikes:[]},
  css: {likes:[], dislikes:[]},
  js: {likes:[], dislikes:[]},
  strengths: {html:"",css:"", js:""},
  currentQuestion: "welcome"
};

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
  userData.name = $("#name").val();
  userData.name = $("#email").val();
  $("#q1").hide();
  $("#q2").show();
});

$("#htmlQ").click(function(event){
  $("#q2").hide();
  $("#q2b").show();
});
