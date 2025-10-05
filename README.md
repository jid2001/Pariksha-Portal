# Pariksha-Portal

A robust online examination portal built using Spring Boot, Hibernate, Angular, MySQL, Spring Security, and JWT Token.

---

## 🚀 Overview

Pariksha-Portal is a full-featured web application designed to simplify the process of conducting, managing, and participating in online quizzes and exams. With secure authentication, role-based access, and a clean, responsive frontend, it provides essential tools for students and administrators alike.

---

## 🛠️ Tech Stack

- **Backend:** Java, Spring Boot, Spring Security, Hibernate, MySQL, JWT Token
- **Frontend:** Angular (TypeScript, HTML, CSS)
- **Security:** BCrypt Password Encryption, JWT Authentication, Angular AuthGuards

---

## 👤 User / Student Features

- Register and log in securely
- View and update profile information
- Select and attempt quizzes by category (if active)
- Multiple quiz attempts allowed
- Timed quizzes with auto-submission on timeout
- Immediate feedback: marks and correct answers upon submission

---

## 🛡️ Admin / Teacher Features

- Add, view, update, and delete categories, quizzes, and questions
- Assign quizzes to categories and add questions to quizzes
- Manage all exam content and user attempts via a protected dashboard

---

## 🔒 Security

- JWT-based authentication for secure API access
- Passwords encrypted using BCryptPasswordEncoder (Spring Security)
- Angular route protection using AuthGuard

---

## 🖥️ Getting Started

### Prerequisites
- Node.js & Angular CLI
- Java (JDK 8+)
- MySQL

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/jid2001/Pariksha-Portal.git
   ```

2. **Backend**
   - Navigate to the backend project directory (Spring Boot).
   - Configure your MySQL credentials in the `application.properties` file.
   - Build and run the Spring Boot application.

3. **Frontend**
   - Navigate to `Examportal/` directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the Angular development server:
     ```bash
     ng serve
     ```
   - Visit [Exam Portal]([http://localhost:4200](https://app-examportal-frontend-360821922590.asia-south1.run.app/user-dashboard)) in your browser.

---

## 🧪 Testing

- **Unit Tests:** Run `ng test` (frontend) or use your preferred Java test runner (backend).
- **End-to-End Tests:** Run `ng e2e` after setting up end-to-end test dependencies.

---

## 📂 Project Structure

- `/Examportal/` — Angular frontend application
- `/src/main/java/` — Spring Boot backend (REST APIs, models, security)
- `/src/main/resources/` — Configuration files

---

## 🤝 Contribution

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/jid2001/Pariksha-Portal/issues).

---

## 📜 License

This project currently does not specify a license.

---

## 🌟 Acknowledgements

- Built with [Angular CLI](https://angular.io/cli)
- Inspired by the need for robust, user-friendly online exam solutions

---

> **Note:** For any questions or setup issues, please refer to the official documentation of [Spring Boot](https://spring.io/projects/spring-boot) and [Angular](https://angular.io/docs).
