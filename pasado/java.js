let isLogin = true;
let users = []; // Array to store registered users
let loggedInUser = null; // Variable to store the currently logged-in user

function handleSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isLogin) {
        // Logic for login
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            loggedInUser = user; // Set the logged-in user
            alert(`Logged in as ${username}`);
            // You can redirect or show a logged-in view here
            document.getElementById('authForm').reset();
            updateUI();
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } else {
        // Logic for sign-up
        if (users.find(user => user.username === username)) {
            alert('Username already exists. Please choose another one.');
        } else {
            users.push({ username, password }); // Add new user to the array
            alert(`Signed up successfully as ${username}`);
            document.getElementById('authForm').reset();
            updateUI();
        }
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

function updateUI() {
    if (loggedInUser) {
        document.querySelector('.container').innerHTML = `
            <div class="welcome-container">
                <h2>Welcome, ${loggedInUser.username}!</h2>
                <button id="logoutButton">Logout</button>
            </div>
        `;
        
        document.getElementById("logoutButton").addEventListener("click", logout);
    } else {
        // Re-render the form if no user is logged in
        renderForm();
    }
}

function logout() {
    loggedInUser = null; // Clear the logged-in user
    alert("You have been logged out.");
    renderForm(); // Show the login/signup form again
}

function renderForm() {
    document.querySelector('.container').innerHTML = `
        <div class="form-container">
            <h2 id="formTitle">${isLogin ? 'Login' : 'Sign Up'}</h2>
            <form id="authForm" onsubmit="handleSubmit(event)">
                <input type="text" id="username" placeholder="Username" required>
                <input type="password" id="password" placeholder="Password" required>
                <button type="submit">Submit</button>
            </form>
            <p id="toggleText">${isLogin ? "Don't have an account?" : "Already have an account?"} <span id="toggleForm">${isLogin ? 'Sign Up' : 'Login'}</span></p>
        </div>
        <div class="image-container">
            <img src="https://example.com/login-image.jpg" alt="Login Illustration">
        </div>
    `;
    
    // Re-attach event listeners after rendering the form again
    document.getElementById('toggleForm').addEventListener('click', () => {
        isLogin = !isLogin; // Toggle between login and signup
        renderForm(); // Render the form again with updated state
    });
}

// Initial render of the form when the page loads
renderForm();
