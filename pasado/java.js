let isLogin = true;

function handleSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isLogin) {
        // Simulate login
        alert(`Logged in as ${username}`);
        // Here you would typically check credentials against a database
        // For demonstration purposes, we are just showing an alert.
        
        // Clear form fields
        document.getElementById('authForm').reset();
        
        // You can redirect or show a logged-in view here.
        
    } else {
        // Simulate sign-up
        alert(`Signed up with username ${username}`);
        // Here you would typically save the new user to a database
        
        // Clear form fields
        document.getElementById('authForm').reset();
        
        // You can redirect or show a logged-in view here.
        
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
