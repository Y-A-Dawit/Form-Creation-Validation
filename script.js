document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('registration-form');
        form.addEventListener('submit', function(event) { // anonymous function replaced by arrow function here
            event.preventDefault();

            const feedbackDiv = document.getElementById('form-feedback');
    
            const passwordNew = document.getElementById('password');
            const password = passwordNew.value.trim();
        
            const emailNew = document.getElementById('email');
            const email = emailNew.value.trim();
        
            const userNameNew = document.getElementById('username');
            const username = userNameNew.value.trim();
        
            let isValid = true; // helps to track validation state, instead of using return statement in each condition
            const messages = []; // without an html element initialized with empty, string it can display error message to warn the client
        
            if(username.length < 3) {
                isValid = false; // shouldn't use 'let' to assign a new value, if used it will creat a new local scope
                messages.push('Username is not valid!');
                // return; // if validation fails, it won't show any error message because messages.push stores the error message inside the array, not show it to the user before the return statement unlike the other form validation code
            }
        
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                isValid = false;
                messages.push('Invalid email format!');
            }
        
            if (password.length < 8) {
                isValid = false;
                messages.push('PAssword must be at least 8 characters long!');
            }
        
            feedbackDiv.style.display = "block";
            if(isValid === true) {
                feedbackDiv.textContent = 'Registration successful';
                feedbackDiv.style.color = "#28a745";
                //return; no - shouldn't use a return statement here, because it prevents form submission. if possible good to use return on input field not like this div element
            } else {
                feedbackDiv.innerHTML = messages.join("<br>")
                feedbackDiv.style.color = '#dc3545';
            }
            setTimeout(() => {
                form.submit();
            }, 3000);
        })
})
