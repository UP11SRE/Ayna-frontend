### A Real-Time Chat App

This Project is a dynamic web application built with React that fosters real-time communication through a websocket-powered chat room.

# Important Note: Due to server optimization strategies, the backend might exhibit a slight delay (up to 1 minute) during the initial application load. This occurs because the backend server temporarily suspends operations during periods of inactivity. Subsequent interactions will experience faster response times.

# Key Features:

- Seamless Communication: Experience instant message exchange using Socket.IO, ensuring your conversations flow effortlessly. Every message you send is echoed back to you, creating a smooth and interactive experience.
- Secure Login: Ayna prioritizes user privacy. To join the chat room, registration and login are mandatory. This ensures only authorized users can participate, fostering a safe and secure environment.
- Personalized Identity: Each registered user retains their unique username within the chat room, allowing for clear identification and personalized interactions.

# Frontend Technology Stack:

- React.js

# Frontend Pages:

- Register: This page allows users to create new accounts with Ayna. Upon successful registration, users are added to the "Registered Users" collection in the Strapi backend.
- Login: Registered users can enter their credentials on this page to gain access to the chat room functionality.
- Chat Join: Once logged in, users can join the chat room through this page. Ayna verifies if the username attempting to join is registered before granting access.
- Chat Room: The heart of the application, this page provides the real-time chat experience. Leveraging Socket.IO's private chat function, users can send and receive messages within their private chat window.

# Getting Started:

- Clone the Repository: Grab your copy of the Ayna codebase using Git.
- Install Dependencies: Ensure you have the necessary tools by running yarn install.
- Build for Production: Prepare the application for deployment with yarn build.
- Start the Development Server: Launch Ayna locally at http://localhost:3000 using yarn start. This allows you to test and refine the application before deployment.

# Deployment:

- The Ayna frontend is currently hosted at: https://ayna-frontend.onrender.com.
- The backend component resides at: https://ayna-backend-04qn.onrender.com.

- Backend code repo: https://github.com/UP11SRE/Ayna-Backend.git

# Project Overview Video:

- For a visual demonstration of Ayna's functionalities, you can access a video walkthrough at:https://www.loom.com/share/360468407dc14490886bdeac1c377d04?sid=31ed7ea8-a248-4e20-be4c-bff720e8a5a3

# Embrace the Power of Real-Time Communication

This chat application empowers you to connect and engage in dynamic conversations. Join the app's experience and discover a world of seamless communication!

## Contributing

Pull requests and contributions are welcome! Please follow standard coding practices and create issues for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
