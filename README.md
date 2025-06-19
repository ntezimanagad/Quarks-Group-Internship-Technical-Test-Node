Quarks Group Internship Technical Test – Node.js + React

This repository contains my solution to the **backend development internship task** provided by Quarks Group LTD.

I built:
- A simple Node.js/Express backend API that supports user creation and retrieval
- A lightweight React frontend to demonstrate and test the API
- No database is used — all user data is stored in-memory


Technologies Used
Backend

Node.js
Express
UUID
CORS

Frontend

React.js
Axios

How to Run the Project
1. Clone the Repository

git clone https://github.com/ntezimanagad/Quarks-Group-Internship-Technical-Test-Node.git
cd Quarks-Group-Internship-Technical-Test-Node

Backend Setup (Node.js API)

cd backend
npm install
node index.js
The server will run at:
http://localhost:3000

Frontend Setup (React App)

cd frontend
npm install
npm run dev


API Endpoints (Test with Postman or curl)
POST /users
Description: Create a new user
Request Body:

{
  "name": "Ntezimana Gad",
  "email": "gad.ntezimana@gmail.com"
}

Response

{
  "id": "ad2b26f1-d4f9-413c-ad3b-f86e59740e30",
  "name": "Ntezimana Gad",
  "email": "gad.ntezimana@gmail.com"
}

curl example:

curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name":"Ntezimana Gad", "email":"gad.ntezimana@gmail.com"}'

GET /users/ad2b26f1-d4f9-413c-ad3b-f86e59740e30
Description: Fetch user details by ID

Response (Success):

{
  "id": "ad2b26f1-d4f9-413c-ad3b-f86e59740e30",
  "name": "Ntezimana Gad",
  "email": "gad.ntezimana@gmail.com"
}
Response (User Not Found):

{
  "error": "User not found"
}

curl example:

curl http://localhost:3000/users/<user-id>

=======================================

Frontend Functionality
I built a simple UI with React to:

Create users

Fetch users by ID

Display success/error messages

Show JSON responses

Screenshots
 Create User
 Fetch User by ID
![gad Quarks](https://github.com/user-attachments/assets/b27032aa-b119-419c-a704-ee15d92b5325)


The frontend was not required, but I built it to demonstrate the backend API clearly and professionally.

Thank You
Thank you for reviewing my submission. I’m excited about the opportunity to contribute and grow with Quarks Group LTD.

Ntezimana Gad
