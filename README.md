# 🌐 Personal Portfolio Website

A modern, responsive personal portfolio built with **React** on the frontend and a Node.js/Express backend to handle **contact form email sending** using Nodemailer.

---

## 🚀 Features

### 🎨 Frontend (React + Tailwind)
- Fully responsive personal portfolio UI  
- Sections: Hero, About, Skills, Projects, Contact  
- Contact form connected directly to backend  
- Reusable components  
- Toast notifications for success/error  

---

## 🖥️ Backend (Node.js + Express)
- API endpoint `/contact` to receive form submissions  
- Validates form input  
- Sends an email using **Nodemailer**  
- Returns JSON responses  
- Configured for deployment on **Railway**  

---

## ✉️ Email Sending (Nodemailer)
The backend uses Nodemailer to send emails directly to your inbox.

- Uses environment variables  
- Supports Gmail, Outlook, or custom SMTP  

Example environment variables:

EMAIL_USER=your-email@example.com

EMAIL_PASS=your-app-password
RECEIVER_EMAIL=your-email@example.com


---

## 📁 Project Structure



root
│
├── frontend/ → React portfolio
│ ├── src/
│ └── ...
│
└── backend/ → Node + Express server
├── index.js
├── package.json
├── .env
└── ...


---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev

3️⃣ Backend Setup
cd backend
npm install
npm start


Make sure to add a .env file:

EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
RECEIVER_EMAIL=your-email@example.com

🌍 Deployment
🔹 Frontend → Vercel

Connect repository

Select /frontend folder as root

Build command: npm run build

Framework: Vite (or CRA depending on your setup)

🔹 Backend → Railway

Connect repository

Set environment variables

Deploy automatically

📩 API Endpoint
POST /contact

Request body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}


Response:

{
  "success": true,
  "message": "Email sent successfully!"
}

🛠️ Technologies Used
Frontend

React

Tailwind CSS

React Hot Toast

Vite

Backend

Node.js

Express.js

Nodemailer

Dotenv

📜 License

This project is open-source and free to use.

👤 Author

Mohammed Abrar
Frontend & Backend Developer
Addis Ababa University — ECE Student