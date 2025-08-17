# 🎬 YouTube Clone

A fully functional **YouTube Clone** built with **React**, **YouTube Data API v3**, **Firebase Authentication**, and **Redux Toolkit**.  
This project replicates core YouTube features such as browsing videos, searching, authentication, and viewing video details.

🔗 **Live Demo:** [Click Here](https://your-live-link.com)

---

## 🚀 Features

- 🔐 **Authentication with Firebase**
  - User Signup / Login
  - Protected Routes (only logged-in users can access certain pages)

- 🎥 **Video Features**
  - Browse and watch videos
  - Video cards with thumbnails, titles, and channel info
  - Video details page with playback

- 🔍 **Search**
  - Search for videos using **YouTube Data API v3**

- 📌 **UI Components**
  - Navbar with search
  - Sidebar with categories
  - Subscribe button
  - Responsive layout

- ⚡ **State Management**
  - Implemented using **Redux Toolkit**

---

## 🛠️ Tech Stack

- **Frontend:** React, JSX, CSS
- **State Management:** Redux Toolkit
- **API:** YouTube Data API v3
- **Authentication:** Firebase Auth
- **Build Tool:** Vite 

---

## 📂 Project Structure
```
src
┣ api
┃ ┗ youtube.js
┣ assets
┣ components
┃ ┣ Icons.jsx
┃ ┣ Logo.jsx
┃ ┣ Navbar.jsx
┃ ┣ ProtectedRoute.jsx
┃ ┣ Sidebar.jsx
┃ ┣ SubscribeButton.jsx
┃ ┗ VideoCard.jsx
┣ pages
┃ ┣ Home.jsx
┃ ┣ Login.jsx
┃ ┣ Signup.jsx
┃ ┗ VideoPage.jsx
┣ redux
┃ ┣ authSlice.jsx
┃ ┣ currentVideoSlice.jsx
┃ ┣ store.jsx
┃ ┗ videosSlice.jsx
┣ App.css
┣ App.jsx
┣ firebase.js
┣ index.css
┗ main.jsx
```

---

## ⚙️ Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/youtube-clone.git
   cd youtube-clone
   ```
   
2. Install dependencies:

  ```bash
  npm install
  ```

3. Create a .env file in the root and add your API keys:

  ```.env
  VITE_YT_API_KEY = your_youtube_api_key
  ```
4. Start the development server:

  ```bash
  npm run dev
  ```

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!


## 👨‍💻 Built by Abhishek Bochare
