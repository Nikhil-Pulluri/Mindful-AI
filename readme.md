# Mindful AI, a chatbot Application with NestJS, Prisma, MongoDB, and Next.js

This is a therapist chatbot application integrated with a backend built using **NestJS** to handle chat and user data. The chats and user data are stored in **MongoDB** using the **Prisma ORM**. The frontend is built using **Next.js** with **NextAuth** and **Google Authentication** to manage users.

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)

## Project Description

This project is a **chatbot** that interacts with users with mentally challenged people. The **backend** (NestJS) handles the following:

- **User management**: Users can be created, and their data (including email and name) is stored in **MongoDB** using **Prisma** ORM.
- **Chat management**: Chats are stored and managed in the backend. Users can create, delete, and fetch chats.
- **Message management**: Messages within a chat can be updated, and messages can be retrieved for a specific chat.

The **frontend** (Next.js) is built using the latest **React** features and integrated with **NextAuth** for authentication. Users can log in using their **Google account**.

## Technologies Used

- **Backend**:

  - **NestJS** - A powerful Node.js framework for building efficient and scalable server-side applications.
  - **Prisma ORM** - A next-generation ORM for Node.js and TypeScript, used to interact with the MongoDB database.
  - **MongoDB** - A NoSQL database used for storing user and chat data.

- **Frontend**:

  - **Next.js** - A React framework for building modern web applications.
  - **NextAuth.js** - Authentication library for Next.js, integrated with **Google OAuth**.

- **API Documentation**:
  - **Swagger** - Auto-generated API documentation for your backend.

## Frontend Setup

To set up the frontend:

1. Clone the repository:

   ```bash
   git clone https://github.com/Nikhil-Pulluri/Mindful-AI.git
   cd Mindful-AI

   ```

2. Install the dependencies in the client directory and run the client server using below commands. Kindly change the port number based on the availability and do not forget to change the same in the server environment variable.

```bash
cd client
npm i
npm run dev
```

## Backend Setup

To set up the backend:

3. Create a new terminal instance and install the dependencies in the server directory and run the backend server using the below commands.

```bash
cd server
npm i
npm run start:dev
```

4. Now, both the servers are running and you can use http://localhost:<your_port_number> to access the website.

## API Endpoints

Please refer to the swagger document through http://localhost:3000/api after starting the server.

## Environment Variables

In both client and server sides, please refer to the env examples to get the api keys and secrets from your end.
