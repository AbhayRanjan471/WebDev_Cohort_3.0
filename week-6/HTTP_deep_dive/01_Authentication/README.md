# Understanding Tokens in Authentication

## What is a Token?
A **token** is a small piece of data used to authenticate and authorize users. It acts as a **digital key** that proves a user's identity when interacting with a system.

## Why Do We Use Tokens?
- **Security**: Avoids storing sensitive data like passwords in every request.
- **Stateless Authentication**: No need to store session data on the server; everything is handled via the token.
- **Scalability**: Works well for distributed applications (e.g., mobile apps, web apps, APIs).
- **Authorization**: Ensures users have the correct access rights.

---

## How Does a Token Work?
### 1. User Signs In
- The user enters their **email** and **password** in a login form.
- The browser/app sends this data to the server via an **HTTP request**.

### 2. Server Verifies Credentials
- The server checks if the email and password are correct.
- If valid, the server generates a **token** (e.g., JWT – JSON Web Token).

### 3. Server Sends the Token to the Client
- The token is sent to the client (browser, mobile app) in the **response**.

### 4. Token is Stored in the Client
- The client stores the token in:
  - **LocalStorage** (persistent, but vulnerable to XSS attacks).
  - **SessionStorage** (cleared when the tab is closed).
  - **HTTP-Only Cookies** (more secure).

### 5. Client Sends Token in Future Requests
- Every time the user makes a request (e.g., fetching profile data), the token is **sent in the headers**.

### 6. Server Validates Token
- The server **decodes** the token.
- If the token is **valid**, access is granted.
- If the token is **expired or tampered with**, access is denied.

---

## Example: How Tokens Work in Code

### **1. User Logs In and Gets a Token**
```javascript
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Validate user (example: check in database)
    if (email === 'john@example.com' && password === 'securepassword') {
        const token = jwt.sign({ email }, 'secretKey', { expiresIn: '1h' }); // Token valid for 1 hour
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});
```

### **2. User Makes a Request with the Token**
```javascript
fetch('/profile', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

### **3. Server Validates the Token**
```javascript
const jwt = require('jsonwebtoken');

app.get('/profile', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]; // Extract token from header
    
    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        res.json({ message: 'Profile data', user: decoded });
    });
});
```

---

## Types of Tokens
### 1. **JWT (JSON Web Token)**
- A self-contained token with user info inside.
- Can be decoded without contacting the server.
- Used in most modern authentication systems.

### 2. **OAuth Tokens**
- Used for third-party authentication (Google, Facebook login).
- Includes **Access Tokens** and **Refresh Tokens**.

### 3. **Session Tokens**
- Stored on the server instead of the client.
- Used in traditional authentication.

---

## When Do We Use Tokens?
- **Web Authentication**: Logging in to websites securely.
- **API Authentication**: Secure communication between frontend & backend.
- **Single Sign-On (SSO)**: One login for multiple services (Google login, Facebook login).
- **Mobile Apps**: Token-based authentication for secure mobile access.

---

## Key Takeaways
✅ Tokens **improve security** by removing the need to store passwords in every request.  
✅ The browser/app stores the token **securely** and sends it with **each request**.  
✅ The server **verifies the token** before allowing access to **protected resources**.  
✅ **JWT** is the most popular type of token for modern web applications.  

---
🚀