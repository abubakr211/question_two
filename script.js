document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    displaySignupDetails();
});

function displaySignupDetails() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
  
    var signupDetails = "Congratulations " + firstName + " " + lastName + ", you are now signed up!";
  
    document.getElementById("signupDetails").innerText = signupDetails;
}