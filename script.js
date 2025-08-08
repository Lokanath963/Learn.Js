f = document.querySelector("form")
f.addEventListener("submit",function(event) {
uname = document.querySelector("#username").value;
if(uname==="")
alert("Username cannot be empty");
if(uname.length <5 || uname.length > 10)
    alert("Username must be min 5 and max 10 characters long")

email = document.querySelector("#email").value;
alert(email);
pswd = document.querySelector("#password").value;
alert(pswd);
})