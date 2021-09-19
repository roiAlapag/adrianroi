function validation() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error").value;

    if (fname.length<2) {
        alert("Please Enter Valid First Name");
        return false;
    }
    if (lname.length<2) {
        alert("Please Enter Valid Last Name");
        return false;
    }
    if (email.indexOf("@") == -1 || email.lenght <8) {
        alert("Please Enter Valid Email");
        return false;
    }
    if (message.length<90) {
        alert("Please Enter More than 90 Character");
        return false;
    }
    alert("Successfully message ME!")
    return false;
}