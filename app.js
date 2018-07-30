var ul = document.getElementById("slideimage");




var left = document.querySelector(".left");
var ri8 = document.querySelector(".ri8");
var foo = 0;

function slideright() {
    if (foo > -1550) {
        foo = foo - 400;
        ul.style.marginLeft = foo + "px";
        console.log(foo);

    } else {
        console.log(foo)
    }
}

function slideleft() {
    if (foo != 0) {
        foo = foo + 400;
        ul.style.marginLeft = foo + "px";
    }
}

ri8.addEventListener("click", slideright)
left.addEventListener('click', slideleft)

var li = document.getElementById("slideimage2");

var left1 = document.querySelector(".left1");
var ri8_2 = document.querySelector(".ri8_2");
var a = 0;

function slideright_2() {
    if (a > -1610) {
        a = a - 400;
        li.style.marginLeft = a + "px";
        console.log(a);
    }
}

function slideleft1() {
    if (a != 0) {
        a = a + 400;
        li.style.marginLeft = a + "px";
    }
}
left1.addEventListener("click", slideleft1)
ri8_2.addEventListener("click", slideright_2)


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function login() {
    alert("Thanks for Login!");
}

function signup() {
    alert("Welcome, " + document.getElementById("username").value);
}