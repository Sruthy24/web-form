document.getElementById("registrationForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value;

    if(name.length < 3){
        alert("Name should contain at least 3 characters.");
        return;
    }

    if(password.length < 8){
        alert("Password must be at least 8 characters.");
        return;
    }

    let phonePattern = /^[0-9]{10}$/;

    if(!phonePattern.test(phone)){
        alert("Enter a valid 10-digit phone number.");
        return;
    }

    if(age < 16){
        alert("Age must be at least 16.");
        return;
    }

    document.getElementById("message").style.color = "green";
    document.getElementById("message").textContent =
    "Registration Successful!";

    document.getElementById("registrationForm").reset();

});
