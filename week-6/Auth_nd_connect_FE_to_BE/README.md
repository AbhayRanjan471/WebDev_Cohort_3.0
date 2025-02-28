# 🔹 Difference Between `jwt.verify()` and `jwt.decode()`  

| Feature          | `jwt.verify(token, secret)` | `jwt.decode(token)` |
|-----------------|---------------------------|-------------------|
| **Purpose**     | Verifies the token's authenticity and integrity | Extracts payload **without** verification |
| **Requires Secret Key?** | ✅ Yes, to verify the signature | ❌ No, does not check the signature |
| **Checks Expiry (`exp` claim)?** | ✅ Yes, throws an error if expired | ❌ No, does not check expiration |
| **Checks Signature?** | ✅ Yes, ensures the token is not tampered with | ❌ No, does not validate the signature |
| **Use Case** | When you need to validate if a token is legitimate before using it | When you only need to extract payload data without verifying it |
| **Returns** | Decoded payload **if valid**, otherwise throws an error | Decoded payload even if the token is invalid |
| **Security** | 🔒 **Secure** – ensures token integrity | ⚠️ **Not secure** – should only be used for debugging |

---

## ✅ Using `jwt.verify()` (Secure)
```js
const jwt = require("jsonwebtoken");
const secretKey = "your_secret_key"; // Keep this secure!

const token = "YOUR_JWT_HERE";

try {
    const decoded = jwt.verify(token, secretKey);
    console.log("Valid token:", decoded); // Returns payload if valid
} catch (error) {
    console.log("Invalid token:", error.message); // Throws error if invalid/expired
}
```

⚠️ Using jwt.decode() (Unsafe for Authentication)
```js
const jwt = require("jsonwebtoken");

const token = "YOUR_JWT_HERE";
const decoded = jwt.decode(token);
console.log(decoded); // Returns payload even if the token is expired or tampered with
```
👉 jwt.decode() does NOT check if the token is valid—it just extracts the payload.
Never use it for authentication!

🔹 When to Use Which?
✅ Use jwt.verify() when checking user authentication (e.g., protecting API routes).
⚠️ Use jwt.decode() only when you want to inspect the token's content (e.g., debugging).