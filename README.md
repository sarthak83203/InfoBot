# 🤖 InfoBot – Rule-Based Chatbot

InfoBot is a simple rule-based chatbot application developed using **React (Vite)** for the frontend and **Node.js, Express, and MongoDB** for the backend.  
The chatbot responds to user queries based on predefined keywords and stores both user and bot messages in the database.

---

## ✨ Features
- Interactive chat UI  
- Rule-based chatbot responses  
- Bot typing indicator  
- Stores chat messages in MongoDB  
- REST API using Express  
- CORS enabled for frontend-backend communication  

---

## 🛠️ Technology Stack
**Frontend**
- React (Vite)
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📁 Project Structure

InfoBot/
├── client/ # React frontend
├── server/ # Express backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── index.js


---

## ⚙️ Installation & Setup

### 1️⃣ Backend Setup
```bash
cd server
npm install
npm run dev

Create a .env file:

MONGO_URL=your_mongodb_connection_string

Backend runs on:

http://localhost:3000

2️⃣ Frontend Setup

cd client
npm install
npm run dev

Frontend runs on:

http://localhost:5173

🔗 API Endpoint
POST /bot/v1/message

Request

{
  "text": "hello"
}

Response

{
  "success": true,
  "user": "hello",
  "retuni": "Hi there 😊"
}

🧠 Chatbot Logic

    User input is normalized (lowercase & trimmed)

    Keywords are matched using includes()

    Predefined responses are returned

    Default message shown if no keyword matches

🎯 Use Cases

    Beginner chatbot project

    College mini-project

    Learning MERN stack basics

    Understanding REST APIs

👨‍💻 Author

Sarthak Ashok Shinde
