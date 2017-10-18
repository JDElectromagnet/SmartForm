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
$("#answers").hide();
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
  userData.email = $("#email").val();
  userData.currentQuestion = "q1";
  localStorage.setItem('userData',JSON.stringify(userData));
  $("#q1").hide();
  $("#q2").show();
});

$("#h").click(function(event){
  //$("#q2").hide();
  //Shows htmlQ
  $("#q2a").show();
  $("#q2b").hide();
  $("#q2c").hide();
  for(var i=0;i<8;i++)
  {
      userData.html.likes[i]=null;
      userData.html.dislikes[i]=null;
      userData.currentQuestion = "q2a";
      localStorage.setItem('userData',JSON.stringify(userData));
  }

});

///// html likes
  $("#hl1").click(function(event){
    userData.html.likes[0] = 1;
    userData.currentQuestion = "q2a";
    localStorage.setItem('userData',JSON.stringify(userData));
  })
  $("#hl2").click(function(event){
    userData.html.likes[1] = 1;
    userData.currentQuestion = "q2a";
    localStorage.setItem('userData',JSON.stringify(userData));
  })
  $("#hl3").click(function(event){
    userData.html.likes[2] = 1;
    userData.currentQuestion = "q2a";
    localStorage.setItem('userData',JSON.stringify(userData));
  })
  $("#hl4").click(function(event){
    userData.html.likes[3] = 1;
    userData.currentQuestion = "q2a";
    localStorage.setItem('userData',JSON.stringify(userData));
  })
////// html dislikes
  $("#hd5").click(function(event){
    userData.html.dislikes[0] = 1;
    userData.currentQuestion = "q2a";
    localStorage.setItem('userData',JSON.stringify(userData));
  })
  $("#hd6").click(function(event){
    userData.html.dislikes[1] = 1;
    userData.currentQuestion = "q2a";
    localStorage.setItem('userData',JSON.stringify(userData));
  })
  $("#hd7").click(function(event){
    userData.html.dislikes[2] = 1;
    userData.currentQuestion = "q2a";
    localStorage.setItem('userData',JSON.stringify(userData));
  })
  $("#hd8").click(function(event){
    userData.html.dislikes[3] = 1;
    userData.currentQuestion = "q2a";
    localStorage.setItem('userData',JSON.stringify(userData));
  })
///////
$("#hPrev").click(function(event){
  $("#q1").show();
  $("#q2").hide();
  $("#q2a").hide();
  $("#q2b").hide();
  $("#q2c").hide();
});


$("#hNext").click(function(event){
//shows CSS
for(var i=0;i<9;i++)
{
  if(userData.html.likes[i]!=1){
    userData.html.dislikes[i]=1;
    userData.currentQuestion = "q2a";
    localStorage.setItem('userData',JSON.stringify(userData));
  }
}
  $("#q2a").hide();
  $("#q2b").show();
  $("#q2c").hide();




});
///////CCSSS//// likes
$("#cl0").click(function(event){
  userData.css.likes[0] = 1;
  userData.currentQuestion = "q2a";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#cl1").click(function(event){
  userData.css.likes[1] = 1;
  userData.currentQuestion = "q2a";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#cl2").click(function(event){
  userData.css.likes[2] = 1;
  userData.currentQuestion = "q2a";
  localStorage.setItem('userData',JSON.stringify(userData));
})


////////CSS dislikes
$("#cd0").click(function(event){
  userData.css.dislikes[0] = 1;
  userData.currentQuestion = "q2a";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#cd1").click(function(event){
  userData.css.dislikes[1] = 1;
  userData.currentQuestion = "q2a";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#cd2").click(function(event){
  userData.css.dislikes[2] = 1;
  userData.currentQuestion = "q2a";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#cd3").click(function(event){
  userData.css.dislikes[3] = 1;
  userData.currentQuestion = "q2a";
  localStorage.setItem('userData',JSON.stringify(userData));
})
////////
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

///////Js//// likes
$("#jl0").click(function(event){
  userData.js.likes[0] = 1;
  userData.currentQuestion = "q2c";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#jl1").click(function(event){
  userData.js.likes[1] = 1;
  userData.currentQuestion = "q2c";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#jl2").click(function(event){
  userData.js.likes[2] = 1;
  userData.currentQuestion = "q2c";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#jl3").click(function(event){
  userData.js.likes[2] = 1;
  userData.currentQuestion = "q2c";
  localStorage.setItem('userData',JSON.stringify(userData));
})

////////Js dislikes
$("#jd0").click(function(event){
  userData.js.dislikes[0] = 1;
  userData.currentQuestion = "q2c";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#jd1").click(function(event){
  userData.js.dislikes[1] = 1;
  userData.currentQuestion = "q2c";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#jd2").click(function(event){
  userData.js.dislikes[2] = 1;
  userData.currentQuestion = "q2c";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#jd3").click(function(event){
  userData.js.dislikes[3] = 1;
  userData.currentQuestion = "q2c";
  localStorage.setItem('userData',JSON.stringify(userData));
})
////////
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


////strengths html
$("#hinlineRadio1").click(function(event){
  userData.strengths.html = "Weak";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#hinlineRadio2").click(function(event){
  userData.strengths.html = "Average";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#hinlineRadio3").click(function(event){
  userData.strengths.html = "Good";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#hinlineRadio4").click(function(event){
  userData.strengths.html = "Expert";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));
})
//////

////strengths css
$("#cinlineRadio1").click(function(event){
  userData.strengths.css = "Weak";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#cinlineRadio2").click(function(event){
  userData.strengths.css = "Average";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#cinlineRadio3").click(function(event){
  userData.strengths.css = "Good";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#cinlineRadio4").click(function(event){
  userData.strengths.css = "Expert";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));
})
//////

////strengths css
$("#jinlineRadio1").click(function(event){
  userData.strengths.js = "Weak";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#jinlineRadio2").click(function(event){
  userData.strengths.js = "Average";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#jinlineRadio3").click(function(event){
  userData.strengths.js = "Good";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));
})
$("#jinlineRadio4").click(function(event){
  userData.strengths.js = "Expert";
  userData.currentQuestion = "q3";
  localStorage.setItem('userData',JSON.stringify(userData));

})


//////
$("#view").click(function(event){
  $("#thanks").hide();
  $("#answers").show();
  document.getElementById('0').innerHTML = "Name: "+userData.name;
  document.getElementById('1').innerHTML = "Email: "+userData.email;
  document.getElementById('2').innerHTML = "HTML Likes";
  document.getElementById('3').innerHTML = "Learning the basics is trivial: "+userData.html.likes[0];
  document.getElementById('4').innerHTML = "No hassle: write code in a text editor and open in Browser: "+userData.html.likes[1];
  document.getElementById('5').innerHTML = "Tags are easy to remember: "+userData.html.likes[2];
  document.getElementById('6').innerHTML = "HTML5 features like canvas are powerful: "+userData.html.likes[3];
  document.getElementById('7').innerHTML = "HTML Dislikes";
  document.getElementById('8').innerHTML = "Difficult to learn: "+userData.html.dislikes[0];
  document.getElementById('9').innerHTML = "Having to close tags is annoying!: "+userData.html.dislikes[1];
  document.getElementById('10').innerHTML = "Code looks pretty messy: "+userData.html.dislikes[2];
  document.getElementById('11').innerHTML = "Too many tags and attributes to remember: "+userData.html.dislikes[3];
  ////////////////////////////////////////////////////////////CSS////////////////////////////////////////////////

  document.getElementById('c2').innerHTML = "CSS Likes";
  document.getElementById('c3').innerHTML = "Syntax is easy to learn: "+userData.css.likes[0];
  document.getElementById('c4').innerHTML = "Can be used as an art tool: "+userData.css.likes[1];
  document.getElementById('c5').innerHTML = "Enables creativity in web design: "+userData.css.likes[2];
  document.getElementById('c7').innerHTML = "CSS Dislikes";
  document.getElementById('c8').innerHTML = "Difficult to learn: "+userData.css.dislikes[0];
  document.getElementById('c9').innerHTML = "Debugging is a nightmare: "+userData.css.dislikes[1];
  document.getElementById('c10').innerHTML = "Conflicts can be very confusing: "+userData.css.dislikes[2];
  document.getElementById('c11').innerHTML = "Code is messy: "+userData.css.dislikes[3];

  /////////////////////////////////////////////javascript///////////////////////////////////////////

  document.getElementById('j2').innerHTML = "JAVASCRIPT Likes";
  document.getElementById('j3').innerHTML = "Easy to learn: "+userData.js.likes[0];
  document.getElementById('j4').innerHTML = "Multple programming styles supported: "+userData.js.likes[1];
  document.getElementById('j5').innerHTML = "Just code and run easily in the browser: "+userData.js.likes[2];
  document.getElementById('j6').innerHTML = "Huge growing community and plenty of resources online: "+userData.js.likes[3];
  document.getElementById('j7').innerHTML = "JAVASCRIPT Dislikes";
  document.getElementById('j8').innerHTML = "Difficult to learn: "+userData.js.dislikes[0];
  document.getElementById('j9').innerHTML = "Multple programming paradigms supported (too many options): "+userData.js.dislikes[1];
  document.getElementById('j10').innerHTML = "Easy to right messy code: "+userData.js.dislikes[2];
  document.getElementById('j11').innerHTML = "No multi threading: "+userData.js.dislikes[3];

  ////////////////////////strengths
  document.getElementById('s0').innerHTML = "HTML";
  document.getElementById('s1').innerHTML = userData.strengths.html;
  document.getElementById('s2').innerHTML = "CSS";
  document.getElementById('s3').innerHTML = userData.strengths.css;
  document.getElementById('s4').innerHTML = "JAVASCRIPT";
  document.getElementById('s5').innerHTML = userData.strengths.js;

  console.log(userData);
});
