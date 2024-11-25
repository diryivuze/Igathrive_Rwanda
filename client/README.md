# IgaThrive Rwanda Project Setup Guide

## Project Description

The **IgaThrive Rwanda** project is designed to enhance digital literacy and coding proficiency among students, teachers, and unemployed youth in Rwanda. This platform offers online and in-person training, certifications, and access to learning resources. The project includes a web application hosted at [IgaThrive Platform](https://igathrive.netlify.app/), with its API documentation available at [API Docs](https://igathrive-rwanda.onrender.com/docs).

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
3. [Setup Instructions](#setup-instructions)
   - [Frontend Setup](#frontend-setup)
   - [Backend Setup](#backend-setup)
4. [Running the Application](#running-the-application)
5. [Deployment](#deployment)
6. [Testing](#testing)
7. [Key Features](#key-features)
8. [Support](#support)

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

1. **Node.js** (version 18.x or higher)
2. **pnpm** (version 8.x or higher)
3. **PostgreSQL** (latest version recommended)
4. **Git** (for cloning the repository)
5. **Vite** (for frontend development)
6. **Backend Environment Variables** (.env configuration)

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/diryivuze/Igathrive_Rwanda.git
   cd Igathrive_Rwanda
   ```

2. Navigate to the appropriate folders for frontend and backend configurations.

---

## Setup Instructions

### Frontend Setup

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Install dependencies using `pnpm`:
   ```bash
   pnpm install
   ```

3. Create a `.env` file in the `client` directory and add the following:
   ```env
   VITE_BACKEND_URL=https://igathrive-rwanda.onrender.com
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

The frontend will run locally on `http://localhost:5173`.

---

### Backend Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Configure the environment variables in a `.env` file:
   ```env
   DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<dbname>
   JWT_SECRET=<your-secret-key>
   PORT=5000
   ```

4. Run database migrations:
   ```bash
   pnpm prisma migrate deploy
   ```

5. Start the backend server:
   ```bash
   pnpm start
   ```

The backend will run locally on `http://localhost:5000`.

---

## Running the Application

1. Ensure both frontend and backend are running.
2. Open the frontend URL in your browser: `http://localhost:5173`.
3. Interact with the platform and API endpoints.

---

## Deployment

### Frontend Deployment

1. Build the project:
   ```bash
   pnpm build
   ```
2. Deploy the `dist` folder using Netlify or any static hosting service.

### Backend Deployment

1. Ensure the production database is set up and accessible.
2. Deploy the backend using platforms like Render or AWS Elastic Beanstalk.
3. Configure environment variables in the deployment platform.

---

## Testing

1. Run frontend tests:
   ```bash
   pnpm test
   ```

2. Run backend tests:
   ```bash
   pnpm test
   ```

3. Verify API functionality using the documentation at [API Docs](https://igathrive-rwanda.onrender.com/docs).

---

## Key Features

- Digital skills training for different age groups.
- Certification and assessment system.
- Interactive course catalog and learning resources.
- Responsive design for accessibility on multiple devices.

---

## Support

For any issues or inquiries, contact the project maintainer:

**Daniel Iryivuze**
Email: [danieliryivuze4@gmail.com](mailto:danieliryivuze4@gmail.com)
