
# 🐾 Virtual Pet Adoption Center

A full stack web application for managing a virtual pet adoption center, built with **React (Vite)** for the frontend and **Node.js (Express)** for the backend.

## 📦 Project Structure

```
virtual-pet-adoption-center/
│
├── frontend/   # React Vite project
└── backend/    # Node.js Express API
```

---

## 🚀 Live Repo

👉 [GitHub Repository](https://github.com/bdhamithkumara/virtual-pet-adoption-center)

---

## 🛠️ Getting Started (Local Setup)

Follow these steps to clone and run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/bdhamithkumara/virtual-pet-adoption-center.git
cd virtual-pet-adoption-center
```

---

### 2️⃣ Install Dependencies

#### 📦 Backend Setup

```bash
cd backend
npm install
```

#### 📦 Frontend Setup

```bash
cd ../frontend
npm install
```

---

### 3️⃣ Run the Applications

#### ▶️ Start Backend Server

```bash
cd backend
 npm start
```

By default, the backend server runs on **http://localhost:3000**

---

#### ▶️ Start Frontend Development Server

In a new terminal tab:

```bash
cd frontend
npm run dev
```

By default, the frontend runs on **http://localhost:5173**

---

## 📹 Demo

You can add a GIF or video demo here. If your video is inside `public/assets/demo.mp4`, you can link it like this:

[🎥 Watch Demo Video](./frontend/public/assets/demo.mp4)

Or better yet, upload a GIF and display it:

![App Demo](./frontend/public/assets/demo.gif)

---

## 📖 Features

- 🐶 View list of adoptable pets
- ✏️ Edit pet details
- 🐾 Adopt pets
- 📄 Generate downloadable adoption certificates (PDF)
- 🔍 Filter pets by mood
- 📦 Full-stack setup with REST API

---

## 📜 Technologies Used

- **Frontend:** React (Vite), Tailwind CSS, @react-pdf/renderer, Icons libraries
- **Backend:** Node.js, Express, UUID

---

## ⚙️ Notes

- Ensure both frontend and backend are running simultaneously for full functionality.
- The backend uses in-memory storage (data resets on server restart).
- CORS is enabled for local development between **localhost:3000** and **localhost:5173**

---

## 📬 Contact

Made by [@bdhamithkumara](https://github.com/bdhamithkumara) — feel free to contribute, star 🌟 the repo or fork!