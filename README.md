# My Task Web App

A simple task management web application built with React (frontend) and Express (backend) using MySQL as the database.

---

## 🚀 Project Overview

- **Frontend:** React with React Hook Form, Yup validation, Bootstrap UI  
- **Backend:** Express.js REST API with MySQL database  
- **Features:**  
  - Add tasks with title and description  
  - List latest 5 incomplete tasks  
  - Mark tasks as completed  

---

## 📋 Prerequisites

- Node.js v16 or newer  
- MySQL server installed and running  
- npm or yarn package manager  
- Postman (for API testing)  

---

## ⚙️ Backend Setup

1. Navigate to the backend folder in your terminal:

   ```bash
   cd backend
   Install dependencies:
npm install


⚙️ Frontend Setup
Navigate to the frontend folder in your terminal:
cd frontend
Install dependencies:
npm install
Start the React development server:
npm run dev
Open your browser and go to:
http://localhost:3000


Example Postman Requests (check by postman)


GET Tasks

URL: http://localhost:5000/tasks

Method: GET

No request body needed.



POST New Task

URL: http://localhost:5000/tasks

Method: POST

Body (raw JSON):



PUT Mark Task Complete

URL: http://localhost:5000/tasks/1/complete (replace 1 with the task ID)

Method: PUT

No request body.




