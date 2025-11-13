# Zomato Reel Experience - Social Food Discovery Platform

A Reels-style social food discovery app featuring vertical video feeds, dual user authentication, and food-partner integration.

One-line summary:  Responsive interface with secure auth and smooth media playback, showcasing restaurants and dishes via a Reels-style feed.

## 🚀 Core Features

### For Users

* **Vertical Video Feed:** Reels-style short videos with smooth vertical scrolling
* **Interact:** Like, save, and browse saved videos
* **Auth:** Secure login/registration with token persistence
* **Responsive:** Optimized for mobile and desktop

### For Food Partners

* **Business Profiles:** Showcase restaurant info and stats
* **Video Upload:** Post videos with descriptions
* **Content Management:** Create and manage food posts
* **Store Integration:** "Visit Store" to directly engage customers

## 🛠 Tech Stack

**Frontend:** React, React Router, Axios, Custom CSS (theming & responsive)

**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, multer

## 📦 Quick Install

### Prereqs

* Node.js (v14+)
* MongoDB
* npm or yarn

```bash
git clone https://github.com//foodreel.git
cd foodreel
```

### Backend

```bash
cd backend
npm install
# create .env with PORT, MONGODB_URI, JWT_SECRET
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

**Frontend:** [http://localhost:5173](http://localhost:5173)

**Backend:** [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
foodreel/
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   └── package.json
└── README.md
```

## 🎯 Usage (quick)

**Users:** Register → Scroll reels → Like/save → Visit store

**Partners:** Register → Upload videos → Manage profile

## 🔐 Authentication

* JWT-based auth
* bcrypt for password hashing
* Role-based access (User vs Partner)
* Tokens stored in localStorage

## 🎨 Theming & UX

* Light/Dark mode support (system preference)
* CSS variables for consistent theming
* Responsive layout and accessibility considerations

## 📱 API Endpoints

**Auth**

* `POST /api/auth/user/register`
* `POST /api/auth/user/login`
* `POST /api/auth/partner/register`
* `POST /api/auth/partner/login`

**Food Content**

* `GET /api/food`
* `POST /api/food`
* `POST /api/food/like`
* `POST /api/food/save`

**Partners**

* `GET /api/food-partner/:id`

## 🚀 Future Enhancements

* Real-time notifications
* Comments on videos
* Advanced search & filters
* Social sharing and analytics dashboard

