# npm install -y
# npm i express
# npm install cors

# When we use CORS ?
- When frontend and backend are hosted in different domain , then browser blocks the requests due to the same-origin policy.
## What is the Same-Origin Policy?
- The same-origin policy restricts web pages from making requests to a domain, protocol, or port different from the one serving the web page. And this is done to protect users from cross-site scripting (XSS) and other malicious attacks.

### Two URLs are considered same-origin if:
- They have the same protocol (e.g., http or https).
- They have the same domain (e.g., example.com).
- They use the same port (e.g., :80, :443, etc.).
 #### Example:
- Allowed (same origin):
- Frontend: http://example.com
- Backend: http://example.com/api

- Blocked (different origins):
- Frontend: http://example.com
- Backend: http://api.example.com (different subdomain)