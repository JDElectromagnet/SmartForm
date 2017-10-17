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
  document.getElementById('#answers').innerHTML = userData.name;

});
