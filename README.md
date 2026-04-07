---

# 🚀 ZephyraTech Full-Stack Developer Intern - Backend Task

This repository contains the backend implementation for the ZephyraTech recruitment assignment. The system provides a robust authentication flow using modern web technologies.

---

## 🛠 Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Language:** TypeScript
* **Database:** MongoDB Atlas (via Mongoose)
* **Security:** JWT (JSON Web Tokens) & Bcrypt.js
* **Environment:** Dotenv

---

## 📂 Project Structure

```text
src/
├── config/      # Database connection configuration
├── controllers/ # Business logic for API endpoints
├── models/      # Mongoose schemas (e.g., User Model)
├── routes/      # Express route definitions
└── index.ts     # Main entry point of the application
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/tharu-2003/Zephyratechtask-Backend.git
cd Zephyratechtask-Backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and configure your credentials:
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key_here
```

### 4. Running the Application
* **Development Mode:**
    ```bash
    npm run dev
    ```
* **Build for Production:**
    ```bash
    npm run build
    ```

---

## 📡 API Endpoints

| Method | Route | Description | Access |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Create a new user account | Public |
| **POST** | `/api/auth/login` | Authenticate user & get token | Public |

---

## 🧪 Testing with Postman

1.  Navigate to the `/postman` folder in this repository.
2.  Import the provided JSON collection into your **Postman** app.
3.  Ensure the server is running on `http://localhost:5000` (or your configured port) before testing.

---

## 🔑 Key Features
* **Secure Password Hashing:** Uses `bcryptjs` to encrypt passwords before storing.
* **Token-Based Auth:** Implements `JWT` for secure, stateless authentication.
* **Type Safety:** Fully written in `TypeScript` to minimize runtime errors.
* **Clean Architecture:** Separated concerns between routes, controllers, and models.

---