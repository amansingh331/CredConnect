# CredConnect

CredConnect is a secure platform designed to connect individuals seeking counseling services with certified professionals. The system allows users to book counseling sessions, manage their appointments, and maintain privacy throughout the process.

## Features

- **User Authentication**: Secure login and registration system using JWT authentication.
- **Appointment Scheduling**: Users can book and manage counseling sessions with certified professionals.
- **Session History**: Track and view past counseling sessions.
- **Secure Communication**: Encrypted messaging for users and counselors.
- **Notifications**: Users receive reminders for upcoming sessions and updates.
- **API Integration**: Easy-to-use API for third-party services to integrate with the platform.

## Tech Stack

- **Frontend**: React Native
- **Backend**: Node.js with Express ([GitHub Repo](https://github.com/amansingh331/credconnect-backend-final))
- **Database**: MySQL
- **API**: RESTful APIs for communication between frontend and backend
- **Other Tools**: Expo for React Native development

## Installation

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm or yarn
- MySQL

### Backend (Node.js and Express)

The backend code can be found in a separate repository: [credconnect-backend-final](https://github.com/amansingh331/credconnect-backend-final). Follow the instructions in that repository for setting up the backend.

### Frontend (React Native)

1. Clone this repository:
   ```bash
   git clone https://github.com/amansingh331/CredConnect.git


2. Navigate to the frontend directory:
   ```bash
   cd CredConnect/frontend

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm start

## API Integration

You can test the API endpoints by making requests to `http://localhost:5000/api`. Below are the key endpoints:

- **User Authentication**:
  - `POST /api/login`: User login
  - `POST /api/register`: User registration

- **Book Counseling Sessions**:
  - `POST /api/book-session`: Schedule a counseling session with a professional

- **Session History**:
  - `GET /api/session-history/{userId}`: Retrieve past sessions for a specific user

## Usage

Once the server is running, you can:

- **Sign up**: Create a user account or log in if you already have one.
- **Book Counseling Sessions**: Navigate to the sessions section to schedule your appointments with counselors.
- **View Session History**: Users can view a list of past counseling sessions and their details.

## Screenshots

### User Dashboard
![User Dashboard](screenshots/user-dashboard.png)

### Counselor Dashboard
![Counselor Dashboard](screenshots/counselor-dashboard.png)

## Contributing

Contributions are welcome! Here's how you can get involved:

1. Fork the project.
2. Create a new branch for your feature: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add a new feature'`.
4. Push the branch: `git push origin feature/new-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions, feel free to reach out:

- **Email**: amansingh@example.com
- **GitHub**: [amansingh331](https://github.com/amansingh331)
