## HTML & CSS Design Tasks

Below are beginner-friendly HTML & CSS tasks focused on layout, styling, and responsive design.

---

### 1. Create a Profile Card

**Description**: Build a profile card with an image, name, title, and a short description.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<div class="profile-card">
  <img src="https://via.placeholder.com/100" alt="Profile Picture">
  <h2>Jane Doe</h2>
  <h4>Frontend Developer</h4>
  <p>Passionate about creating responsive and engaging web applications.</p>
</div>
```

#### CSS:

```css
.profile-card {
  max-width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.profile-card img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}
```

</details>

---

### 2. Responsive Navigation Bar

**Description**: Create a horizontal navbar that becomes a vertical stack on smaller screens.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<nav class="navbar">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</nav>
```

#### CSS:

```css
.navbar {
  display: flex;
  gap: 20px;
  background-color: #333;
  padding: 10px;
}
.navbar a {
  color: white;
  text-decoration: none;
}
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
  }
}
```

</details>

---

### 3. Contact Form Styling

**Description**: Style a basic contact form with inputs and a submit button.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<form class="contact-form">
  <input type="text" placeholder="Your Name">
  <input type="email" placeholder="Your Email">
  <textarea placeholder="Message"></textarea>
  <button type="submit">Send</button>
</form>
```

#### CSS:

```css
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
}
.contact-form input,
.contact-form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.contact-form button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
```

</details>

---

### 4. Pricing Table Layout

**Description**: Build a simple 3-column pricing table.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<div class="pricing-container">
  <div class="pricing-card">
    <h3>Basic</h3>
    <p>$9/mo</p>
    <ul>
      <li>1 user</li>
      <li>10GB storage</li>
    </ul>
  </div>
  <div class="pricing-card">
    <h3>Pro</h3>
    <p>$19/mo</p>
    <ul>
      <li>5 users</li>
      <li>100GB storage</li>
    </ul>
  </div>
  <div class="pricing-card">
    <h3>Enterprise</h3>
    <p>$49/mo</p>
    <ul>
      <li>Unlimited users</li>
      <li>1TB storage</li>
    </ul>
  </div>
</div>
```

#### CSS:

```css
.pricing-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}
.pricing-card {
  flex: 1;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  text-align: center;
}
.pricing-card ul {
  list-style: none;
  padding: 0;
}
```

</details>

---

### 5. Login Modal Layout

**Description**: Create a centered login modal overlay.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<div class="modal-overlay">
  <div class="modal">
    <h2>Login</h2>
    <input type="text" placeholder="Username">
    <input type="password" placeholder="Password">
    <button>Login</button>
  </div>
</div>
```

#### CSS:

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 300px;
}
```

</details>

---

### 6. Image Gallery Grid

**Description**: Create a responsive grid layout to display images.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<div class="gallery">
  <img src="https://via.placeholder.com/150" alt="Image 1">
  <img src="https://via.placeholder.com/150" alt="Image 2">
  <img src="https://via.placeholder.com/150" alt="Image 3">
  <img src="https://via.placeholder.com/150" alt="Image 4">
</div>
```

#### CSS:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 20px;
}
.gallery img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
```

</details>

---

### 7. Newsletter Signup Section

**Description**: Design a centered newsletter signup call to action.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<div class="newsletter">
  <h2>Subscribe to our newsletter</h2>
  <input type="email" placeholder="Enter your email">
  <button>Subscribe</button>
</div>
```

#### CSS:

```css
.newsletter {
  text-align: center;
  padding: 40px;
  background-color: #f1f1f1;
}
.newsletter input {
  padding: 10px;
  width: 250px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.newsletter button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
}
```

</details>

---

### 8. Simple Footer Layout

**Description**: Create a responsive footer with three columns.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<footer class="site-footer">
  <div>About</div>
  <div>Links</div>
  <div>Contact</div>
</footer>
```

#### CSS:

```css
.site-footer {
  display: flex;
  justify-content: space-around;
  background-color: #222;
  color: white;
  padding: 20px;
  flex-wrap: wrap;
}
.site-footer div {
  margin: 10px;
}
```

</details>

---

### 9. Button Hover Effects

**Description**: Add hover effects for different button styles.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<button class="hover-btn">Hover Me</button>
```

#### CSS:

```css
.hover-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.hover-btn:hover {
  background-color: #0056b3;
}
```

</details>

---

### 10. Sticky Header

**Description**: Create a sticky header that remains at the top on scroll.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<header class="sticky-header">
  <h1>My Website</h1>
</header>
```

#### CSS:

```css
.sticky-header {
  position: sticky;
  top: 0;
  background: #333;
  color: white;
  padding: 15px;
  z-index: 1000;
}
```

</details>

---
