document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    alert('Your email address is: ' + email);
});


