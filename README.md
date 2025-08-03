## 🛠️ Getting Started

### 1. Clone the Repository

```bash[
https://github.com/PinkiKumari16/crypto-tracker-client.git
```

### 2. Setup Backend

```
npm install
```

#### 1. 🔐 Environment Variables
Create a .env file inside the server directory with the following content:

```bash
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### 2. ▶️ Run the Backend Server
```bash
npm run dev
```
Server will run on: http://localhost:5000

### 3. Setup Frontend

```
npm install
```

#### 1. 🔐 Firebase Config

Create a .env file in the client directory with the following variables:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_BACKEND_API_URL=http://localhost:5000/api
```

#### 2. Run the Frontend App

```
npm run dev
```
Frontend will be available at: http://localhost:5173

## ✅ Additional Features
- Toast notifications
- User activity logging (task updates, messages sent)

## 📧 Contact
**Pinki**
- pinkikmr2672002@gmail.com
- [LinkedI](https://www.linkedin.com/in/pinki-kumari-42b409257/)

## License
This project was created for evaluation as part of an interview assignment.

