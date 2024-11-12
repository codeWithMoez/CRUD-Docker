# Microservices CRUD Application with Docker

This project is a simple microservices-based CRUD application built with a **frontend**, **backend API**, and **SQLite** database. Each service runs in a separate Docker container, orchestrated using Docker Compose. The application allows users to create, view, and manage user and order data through a web interface.

## Project Structure

```plaintext
project-root/
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   ├── style.css
│   └── app.js
├── user-service/
│   ├── Dockerfile
│   ├── server.js
├── order-service/
│   ├── Dockerfile
│   ├── server.js
├── docker-compose.yml
└── README.md
