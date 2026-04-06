# Chat Application

A real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring Socket.IO for instant messaging, user authentication, and image sharing capabilities.

## 🚀 Features

- **Real-time Messaging**: Instant chat with Socket.IO
- **User Authentication**: Secure signup, login, and logout functionality
- **Profile Management**: Update profile pictures and user information
- **Online Status**: See which users are currently online
- **Image Sharing**: Send and receive images in chat
- **Responsive Design**: Modern UI with Tailwind CSS and DaisyUI
- **State Management**: Zustand for efficient state handling
- **File Uploads**: Cloudinary integration for image storage

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI framework
- **Vite 7.1.7** - Build tool and dev server
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **DaisyUI 5.3.7** - Component library
- **Zustand 5.0.8** - State management
- **React Router DOM 7.9.4** - Routing
- **Socket.IO Client 4.8.1** - Real-time communication
- **Axios 1.12.2** - HTTP client
- **React Hot Toast 2.6.0** - Notification system
- **Lucide React 0.546.0** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js 4.21.2** - Web framework
- **Socket.IO 4.8.1** - Real-time communication
- **MongoDB 8.19.1** - Database
- **Mongoose** - ODM for MongoDB
- **JWT 9.0.2** - Authentication tokens
- **bcryptjs 3.0.2** - Password hashing
- **Cloudinary 2.7.0** - Image storage
- **Cookie-parser 1.4.7** - Cookie handling
- **CORS 2.8.5** - Cross-origin resource sharing

## 📁 Project Structure

```
chat-app/
├── backend/
│   ├── src/
│   │   ├── controllers/        # Route controllers
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   ├── lib/               # Utility libraries
│   │   │   ├── db.js
│   │   │   ├── socket.js
│   │   │   ├── utils.js
│   │   │   └── cloudinary.js
│   │   ├── middlewares/       # Custom middleware
│   │   │   └── auth.middleware.js
│   │   ├── models/            # Database models
│   │   │   ├── user.model.js
│   │   │   └── message.model.js
│   │   ├── routes/            # API routes
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   └── index.js           # Server entry point
│   ├── .env.example           # Environment variables template
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── MessageSkeleton.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoChatSelected.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── SidebarSkeleton.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignUpPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   └── SettingsPage.jsx
│   │   ├── store/             # Zustand stores
│   │   │   ├── useAuthStore.js
│   │   │   └── useChatStore.js
│   │   ├── lib/               # Utility libraries
│   │   │   └── axios.js
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # App entry point
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
└── package.json               # Root package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   npm run build
   ```

3. **Set up environment variables**
   
   Copy the `.env.example` file from the backend directory:
   ```bash
   cp backend/.env.example backend/.env
   ```
   
   Update the `.env` file with your actual values:
   ```env
   # MongoDB
   MONGO_URI=mongodb://localhost:27017/chat-app
   
   # JWT
   JWT_SECRET=your_jwt_secret_key_here
   
   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Server
   PORT=5001
   NODE_ENV=development
   ```

4. **Start the development servers**
   
   **Backend (Terminal 1):**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5001

## 🔧 API Endpoints

### Authentication Routes
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/check` - Check authentication status
- `PUT /api/auth/update-profile` - Update user profile

### Message Routes
- `GET /api/messages/users` - Get all users for sidebar
- `GET /api/messages/:id` - Get messages with a specific user
- `POST /api/messages/send/:id` - Send a message to a user

## 🏗️ Architecture

### Authentication Flow
1. User registers/logs in via JWT tokens
2. Tokens stored in HTTP-only cookies
3. Protected routes verify tokens via middleware
4. Socket connections established after authentication

### Real-time Communication
1. Socket.IO connections established on user authentication
2. Users receive online status updates
3. Messages delivered instantly to connected clients
4. Socket events: `connection`, `disconnect`, `newMessage`, `getOnlineUsers`

### State Management
- **useAuthStore**: Handles user authentication, profile updates, and socket connections
- **useChatStore**: Manages chat messages, user selection, and real-time message subscriptions

## 🎨 UI Components

### Key Features
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Theme**: Modern dark interface with Tailwind CSS
- **Loading States**: Skeleton loaders for better UX
- **Toast Notifications**: User feedback for all actions
- **Animated Elements**: Smooth transitions and micro-interactions

### Component Structure
- **Navbar**: Navigation and user menu
- **Sidebar**: User list with online indicators
- **ChatContainer**: Main chat interface
- **MessageInput**: Text and image message composition
- **ChatHeader**: Active chat user information

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **HTTP-only Cookies**: Prevent XSS attacks
- **CORS Configuration**: Proper cross-origin resource sharing
- **Input Validation**: Server-side validation for all inputs

## 📱 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables for Production
- Set `NODE_ENV=production`
- Configure production MongoDB URI
- Update Cloudinary credentials
- Set secure cookie settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**
   - Kill the process using the port: `taskkill /PID <process-id> /F`
   - Or change the port in `.env` file

2. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the `MONGO_URI` in `.env` file
   - Verify network connectivity for MongoDB Atlas

3. **Socket Connection Issues**
   - Check backend server is running
   - Verify CORS configuration
   - Ensure proper authentication

4. **Image Upload Failures**
   - Verify Cloudinary credentials
   - Check image size limits
   - Ensure proper Cloudinary configuration

## 📞 Support

For support and questions, please open an issue in the repository.