# 🚀 SubSync AI

<div align="center">

### A Full-Stack SaaS Project Management Platform

Built with **React**, **Django REST Framework**, **JWT Authentication**, and **RESTful APIs**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Django](https://img.shields.io/badge/Django-5-092E20?logo=django)
![DRF](https://img.shields.io/badge/Django_REST_Framework-red)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-blue)

</div>

---

# 📌 Overview

SubSync AI is a modern **Full-Stack SaaS Project Management Platform** that allows authenticated users to manage projects through a clean dashboard backed by secure REST APIs.

The application demonstrates production-inspired backend architecture using Django REST Framework and a responsive React frontend with JWT authentication.

---

# ✨ Features

## 🔐 Authentication

- JWT Authentication
- Secure Login
- Protected Routes
- Token Refresh
- User-specific Data Access

---

## 📁 Project Management

- Create Projects
- View Projects
- Update Projects
- Delete Projects
- Dashboard Summary
- Analytics Endpoint

---

## ⚡ Backend Features

- RESTful API Design
- Search
- Filtering
- Ordering
- Pagination
- Serializer Validation
- User Permissions
- Business Logic using Service Layer
- Swagger Documentation

---

## 🎨 Frontend Features

- Responsive Dashboard
- Modern UI
- Search Projects
- Status Filtering
- Dashboard Statistics
- Project Cards
- Create Project Modal

---

# 🛠 Tech Stack

| Category          | Technologies                                          |
| ----------------- | ----------------------------------------------------- |
| Frontend          | React.js, Vite, Tailwind CSS, Axios, React Router DOM |
| Backend           | Django, Django REST Framework, Simple JWT             |
| Database          | SQLite                                                |
| API Documentation | DRF Spectacular (Swagger/OpenAPI)                     |
| Filtering         | django-filter                                         |
| Version Control   | Git, GitHub                                           |

---

# 📂 Project Structure

```text
SubSync-AI
│
├── backend
│   ├── config
│   ├── users
│   ├── projects
│   ├── subscriptions
│   └── manage.py
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   └── services
│   │
│   └── public
│
├── docs
├── requirements.txt
└── README.md
```

---

# 🔗 API Endpoints

## Authentication

```http
POST /api/auth/register/
POST /api/auth/login/
POST /api/auth/token/refresh/
```

---

## Projects

```http
GET    /api/projects/
POST   /api/projects/
GET    /api/projects/{id}/
PUT    /api/projects/{id}/
DELETE /api/projects/{id}/
```

---

## Dashboard

```http
GET /api/projects/dashboard/
```

Returns

- Total Projects
- Active Projects
- Draft Projects
- Archived Projects
- Subscription Information
- Recent Projects

---

## Analytics

```http
GET /api/projects/analytics/
```

Returns

- Total Projects
- Active Projects
- Draft Projects
- Archived Projects

---

# 📸 Screenshots

## Login Page

> Add screenshot here

---

## Dashboard

> Add screenshot here

---

## Swagger API Documentation

> Add screenshot here

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/KritiSandal/SubSync-AI.git
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 📖 Backend Highlights

- JWT Authentication
- Secure REST APIs
- Search, Filtering & Ordering
- Pagination
- Dashboard Summary API
- Analytics API
- Serializer Validation
- User-level Permissions
- Service Layer Architecture
- Swagger/OpenAPI Documentation

---

# 🎯 Future Improvements

- PostgreSQL Integration
- AI-powered Project Description Generation
- AI Task Suggestions
- Docker Deployment
- File Uploads
- Team Collaboration
- Email Notifications
- CI/CD Pipeline

---

# 👩‍💻 Author

**Kriti Sandal**

B.Tech Computer Science Engineering

GitHub

https://github.com/KritiSandal

LinkedIn

https://www.linkedin.com/in/kriti-sandal/

---

# ⭐ Support

If you found this project interesting, consider giving it a ⭐ on GitHub.

---

## 📜 License

This project is licensed under the MIT License.
