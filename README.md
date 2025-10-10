 # ♻️ Waste Collection Management System
 
A full-stack web application designed to manage recyclable waste collection requests efficiently. The system enables users to register, request waste pickups, and track status updates via a secure dashboard. Admins can monitor, assign, and manage pickup requests.
     
### 👤 User 
- User registration & login
- Dashboard with profile information
- Create pickup request forms   
- Track request status  
- Update/Delete requests 
       
### 🛠️ Admin
- Admin login with secure authentication  
- View and manage all pickup requests
- Assign and update request statuses
- Secure route protection for admin access

### Frontend (`/app`)
- React.js / Flutter (choose depending on your frontend)
- Tailwind CSS / Bootstrap for UI
- Axios / Supabase client for API communication

### Backend (`/backend`)
- Node.js + Express
- MongoDB (via MongoDB Compass)
- JWT for authentication
- REST APIs for user and request management

## 📁 Project Structure

waste-collector-project/
│
├── app/ # Frontend code (React/Flutter)
│
├── backend/ # Backend code (Node.js/Express)
│
└── README.md # Project documentation

## ⚙️ Setup Instructions

### 1. Clone the Repository
git clone https://github.com/Rachana16-2004/waste-collector-project.git
cd waste-collector-project
2. Setup Backend
cd backend
npm install
npm run dev
Configure your .env file (MongoDB URI, JWT secret, etc.)

## 3. Setup Frontend
cd ../app
npm install
npm start
📦 MongoDB Collections Used
users – for storing user information
admins – for admin credentials
requests – for storing user pickup requests
pickuprequests – for detailed pickup handling
























