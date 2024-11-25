# RBAC - Role Based Aceesed Controll.

## Overview

RBAC is a security framework used to manage access to resources in a system based on predefined roles within an organization. It allows you to assign permissions to roles rather than directly to users, making it easier to manage and enforce consistent access policies.
## Key Features

- **User**: CRUD Properties are used in creating new User.
- **Role**: CRUD  Properties are used in creating new Role.
- **Role Features**: read, write, delete, manage_users, manage_roles.

  

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React, Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB


## Teach-Stack
| UI-Part | Controller | Server-Part |
|---------|------------------|--------------|
|![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![TAILWINDCSS](https://img.shields.io/badge/TailwindCSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)|![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white) |![Express.JS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![Node.JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) 

## Deployments
|FRONTEND|BACKEND|DATABASE|
|--------|-------|--------|
|![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)|![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)|![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)


## Setup and Installation

### Step-by-Step Setup:

1. **Clone the repository**:

    ```bash
    git clone [https://github.com/SG3659/RBAC.git]
    ```

2. **Navigate to the project directory**:

    ```bash
    cd RBAC
    ```

3. **Install dependencies**:
    - Navigate to the `frontend` and `server` folders and install dependencies separately:

    ```bash
    cd frontend
    npm install

    cd server
    npm install
    ```

4. **Set up the environment variables** for API keys from coding platforms and Google synchronization.

5. **Run the development servers**:

    - Start the frontend:

    ```bash
    cd frontend
    npm run dev 
    ```

    - Start the backend:

    ```bash
    cd server
    npm run dev
    ```

6. **Navigate to** [http://localhost:8000](http://localhost:8000) to explore the platform.


7. ## API Routes

The following table lists the available API routes and their descriptions:
All Api personaly checked on Postman.

| Route | Method | Description |
|-------|-------------|----------|
| auth/ | `POST` | Register user's data in Database |
| auth/authLogin/ | `POST` | By checking user's credentials allow them to log-in in the web-applicattion |
| role/ | `POST` |	Create role  |
| roleUpdate/:id | `PATCH` |	Update specific role details and allowed only for the author |
| roleDelete/:id | `DELETE` |	Delete specific role and allowed only for the author  |
| roleGet/ | `GET` | Get All role creted by author|
| user/ | `POST` |	Create user  |
| userUpdate/:id | `PATCH` |	Update specific user details and allowed only for the author |
| userDelete/:id | `DELETE` |	Delete specific user and allowed only for the author  |
| userGets/ | `GET` | Get All role creted by author|
| userGet/:id | `GET` | Get specific user only for the author |


Thank you 💙
