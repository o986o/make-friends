$(document).ready(function(){

$(document).on("mousemove", function(){
    console.log(event.pageY);
  $(".box").css({"margin-left" : -125+(event.pageX*0.25)*(-1)});
  $(".box").css({"margin-top" : -125+(event.pageY*0.25)*(-1)});
    });

    $(".box").waypoint(function(){
        $(".box").addClass("active");
    }, {offset:"50%"});

    $(".box").waypoint(function(){
        $(".box").removeClass("active");
    }, {offset:"20%"});
});

// addClass는 한 번만 action을 하는 것이다.
// toggleClass는 acrtion을 계속 반복하는 것이다.
//removeClass는 addClass의 액션을 끝내는 것이다.
