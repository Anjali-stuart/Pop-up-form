function show() {
    document.getElementById("container").style.display = "block";
    document.getElementById("page-entry").style.display = "none";

}
//setInterval(10000,show());
// --------------made this function for option text------------
//  function clcked(){
//     var a = document.getElementById("msg");
//     var b = document.getElementById("slct");
//     b.style.border = "2px solid blue";
//     document.getElementById("alrt1").style.visibility = "visible";
// }


function next() {
    var a = document.getElementById("msg");
    var b = document.getElementById("slct");

    if (b.value == "enquiry type") {
        b.style.border = "2px solid red";
        document.getElementById("alrt1").style.visibility = "visible";

    } else if (a.value == "") {
        a.style.border="2px solid red";
        document.getElementById("alrt2").style.visibility = "visible";

    } else {
        a.style.border="none";
        document.getElementById("alrt2").style.visibility = "hidden";
        b.style.border = "none";
        document.getElementById("alrt1").style.visibility = "hidden";
        document.getElementById("container").style.display = "none";
        document.getElementById("container-2").style.display = "block";
    }

}

console.log(document.querySelector("textarea").attributes)

function next2() {
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var email = document.getElementById("e-mail");
    var phone = document.getElementById("num");
    if (firstName.value == "") {
        document.getElementById("alrt3").style.visibility = "visible";
        firstName.style.border = "2px solid red";
    } else if (lastName.value == "") {
        document.getElementById("alrt4").style.visibility = "visible";
        lastName.style.border = "2px solid red";
        
    } else if (email.value == "") {
        document.getElementById("alrt5").style.visibility = "visible";
        email.style.border = "2px solid red";
    } else if (phone.value == "") {
        document.getElementById("alrt6").style.visibility = "visible";
        phone.style.border = "2px solid red";
    } 
    else {
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        phone.value = "";
        document.getElementById("alrt3").style.visibility = "hidden";
        firstName.style.border = "none";
        document.getElementById("alrt4").style.visibility = "hidden";
        lastName.style.border = "none";
        document.getElementById("alrt5").style.visibility = "hidden";
        email.style.border = "none";
        document.getElementById("alrt6").style.visibility = "hidden";
        phone.style.border = "none";
        document.getElementById("container").style.display = "none";
        document.getElementById("container-2").style.display = "none";
        document.getElementById("container-3").style.display = "block";
      
        
    }

}

function reset() {
    firstName.value = "";
    lastName.value == "";
    email.value == "";
    phone.value == "";
}

function previous() {
    document.getElementById("container").style.display = "block";
    document.getElementById("container-2").style.display = "none";
    // document.getElementById("container-3").style.display="none";
    // document.getElementById("container-4").style.display="none";
    document.getElementById("btn").style.display = "none";
}

function exit() {
    document.getElementById("container").style.display = "none";
    document.getElementById("container-2").style.display = "none";
    document.getElementById("container-3").style.display = "none";
    document.getElementById("page-entry").style.display = "block";
    document.getElementById("msg").value="";
    document.getElementById("slct").value="enquiry type";
}

// function validate(){
//     var a = document.getElementById("msg");
//     if (a==" "){
//         alert("please fill all the fields.");
//     }
// }