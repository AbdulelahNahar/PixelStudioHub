// ===========================================
// Home Page Dynamic Text & Features (with CSS changes)
// ===========================================
(function() {
    const homeSection = document.querySelector(".home-section");
    if (!homeSection) return;

    // --- Dynamic Rotating Text for Curated Collections ---
    const textEl = homeSection.querySelector(".section-desc");
    const texts = [
        "Welcome to Pixel Studio!",
        "Explore curated pixel art collections.",
        "Join our digital art community."
    ];
    let index = 0;
    if (textEl) {
        setInterval(() => {
            textEl.textContent = texts[index % texts.length]; // rotate text
            const colors = ["#333", "#444", "#555"];
            textEl.style.color = colors[index % colors.length]; // dynamic color change
            index++;
        }, 4000); // change every 4 seconds
    }

    // --- Dynamic Feature Tags with CSS changes ---
    const featureTags = homeSection.querySelector(".collection-tags");
    if (featureTags) {
        featureTags.innerHTML = "";
        const features = ["Sprites", "Backgrounds", "Animations", "Wallpapers"];
        features.forEach(f => {
            const span = document.createElement("span");
            span.textContent = `• ${f}`;
            span.style.fontWeight = "600";
            span.style.color = "#d4af37"; // gold accent
            featureTags.appendChild(span);
        });
    }

    // Highlight home section background dynamically
    homeSection.style.transition = "background-color 0.5s";
    homeSection.style.backgroundColor = "#f9f9f9";
})();

// ===========================================
// Login Form Validation
// ===========================================
(function() {
    const loginForm = document.querySelector("body.login-bg form");
    if (!loginForm) return;

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = loginForm.querySelector("input[type='text']");
        const password = loginForm.querySelector("input[type='password']");
        const msg = loginForm.querySelector(".signup-text");

        if (!username.value.trim() || !password.value.trim()) {
            msg.textContent = "All fields are required!";
            msg.style.color = "red";
            username.style.border = "2px solid red";
            password.style.border = "2px solid red";
        } else {
            msg.textContent = "Login successful!";
            msg.style.color = "green";
            username.style.border = "2px solid green";
            password.style.border = "2px solid green";
        }
    });
})();

// ===========================================
// Signup Form Validation & Success Alert (with CSS changes)
// ===========================================
(function() {
    const signupForm = document.querySelector("body:not(.login-bg) form");
    if (!signupForm) return;

    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const inputs = signupForm.querySelectorAll("input[required]");
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value.trim()) allFilled = false;
        });

        const emailInput = signupForm.querySelector("input[type='email']");
        const email = emailInput ? emailInput.value.trim() : "";

        const passwordInput = signupForm.querySelector("input[type='password']");
        const confirmPasswordInput = signupForm.querySelectorAll("input[type='password']")[1];
        const password = passwordInput ? passwordInput.value : "";
        const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : "";

        let msg = signupForm.querySelector(".form-message");
        if (!msg) {
            msg = document.createElement("p");
            msg.classList.add("form-message");
            signupForm.appendChild(msg);
        }

        const hasUppercase = /[A-Z]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        const allowedDomains = ["gmail.com", "hotmail.com", "yahoo.com"];
        const emailDomain = email.split("@")[1];
        const validDomain = allowedDomains.includes(emailDomain);

        inputs.forEach(input => input.style.border = "1px solid #ccc"); // reset borders

        if (!allFilled) {
            msg.textContent = "Please fill out all required fields!";
            msg.style.color = "red";
            inputs.forEach(input => {
                if (!input.value.trim()) input.style.border = "2px solid red";
            });
        } else if (!email.includes("@") || !validDomain) {
            msg.textContent = "Email must be a valid domain (gmail.com, hotmail.com, yahoo.com)!";
            msg.style.color = "red";
            emailInput.style.border = "2px solid red";
        } else if (password.length < 6) {
            msg.textContent = "Password must be at least 6 characters!";
            msg.style.color = "red";
            passwordInput.style.border = "2px solid red";
        } else if (!hasUppercase) {
            msg.textContent = "Password must contain at least one uppercase letter!";
            msg.style.color = "red";
            passwordInput.style.border = "2px solid red";
        } else if (!hasSymbol) {
            msg.textContent = "Password must contain at least one symbol!";
            msg.style.color = "red";
            passwordInput.style.border = "2px solid red";
        } else if (password !== confirmPassword) {
            msg.textContent = "Passwords do not match!";
            msg.style.color = "red";
            confirmPasswordInput.style.border = "2px solid red";
        } else {
            // Success
            alert("Thank you for joining Pixel Art Studios!");
            msg.textContent = "Registration successful!";
            msg.style.color = "green";
            passwordInput.style.border = "2px solid green";
            confirmPasswordInput.style.border = "2px solid green";
            emailInput.style.border = "2px solid green";
            inputs.forEach(input => {
                if (!["email","password"].includes(input.type)) input.style.border = "2px solid green";
            });
        }
    });
})();