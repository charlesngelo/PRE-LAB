let isLogin = true;

function handleSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isLogin) {
        alert(`Logged in as ${username}`);
        // Logic for login can be added here
        document.getElementById('authForm').reset();
        
        // Redirect or show logged-in view here
        
    } else {
        alert(`Signed up with username ${username}`);
        // Logic for sign-up can be added here
        document.getElementById('authForm').reset();
        
        // Redirect or show logged-in view here
        
    }
}

document.getElementById('toggleForm').addEventListener('click', () => {
    isLogin = !isLogin; // Toggle between login and signup
    document.getElementById('formTitle').innerText = isLogin ? 'Login' : 'Sign Up';
    
    document.getElementById('toggleText').innerHTML = isLogin ? 
        "Don't have an account? <span id='toggleForm'>Sign Up</span>" : 
        "Already have an account? <span id='toggleForm'>Login</span>";
    
    // Clear the input fields when switching forms
    document.getElementById('authForm').reset();
});
