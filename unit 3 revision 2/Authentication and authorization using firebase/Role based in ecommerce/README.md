-# E-Commerce Admin Panel with Role-Based Authorization

This project is an **E-Commerce Admin Panel** built using **HTML, CSS, JavaScript, and Firebase Realtime Database**. It implements **Role-Based Authorization (RBA)** where users can have one of two roles: `Admin` or `User`.

---

## ✅ Features

### 1. User Roles in Firebase Realtime Database

- Every registered user has a `role` stored in Firebase Realtime Database under `/users/{uid}`.
- Two roles available:
  - **Admin**: Can add, edit, and delete products.
  - **User**: Can only view products.

---

### 2. Authentication (Sign Up & Login)

#### 🔐 Registration (register.html)

- User registers using email, password, and selects role from dropdown (Admin/User).
- Upon successful registration:
  - Firebase Authentication creates the user.
  - Email and role are stored in Firebase Realtime Database.
  - Redirects to login page.

#### 🔐 Login (index.html)

- Users enter email and password.
- On successful login:
  - User's role is fetched from Firebase Realtime Database.
  - Role is saved in `sessionStorage`.
  - Redirection based on role:
    - **Admin → admin-dashboard.html**
    - **User → user-dashboard.html**
  - If credentials are invalid, alert message:  
    `Incorrect email or password!`

---

### 3. Admin Dashboard (admin-dashboard.html)

- Access restricted to Admins only.
- Admin can:
  - Add a new product (title, price, image URL).
  - Edit existing products.
  - Delete any product.
  - View the list of products fetched from Firebase DB.

---

### 4. User Dashboard (user-dashboard.html)

- Access restricted to Users only.
- Users can:
  - View the list of products.
  - Cannot add, edit, or delete products.

---

## ✅ Folder Structure
