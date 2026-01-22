# Doctor Appointment System

A modern React-based application for browsing doctors and booking appointments. This project demonstrates a clean user interface built with Tailwind CSS and DaisyUI, featuring client-side routing and state management for handling appointments.

## Live Demo

Check out the live version of the application: [https://book-doctorappointment.netlify.app/](https://book-doctorappointment.netlify.app/)

## 🚀 Features

-   **Browse Doctors**: View a comprehensive list of available doctors.
-   **Doctor Details**: Click on any doctor to view detailed information including their specialty and availability.
-   **Book Appointments**: "Book" appointments with doctors, adding them to your personal appointment list.
-   **Manage Appointments**: View a list of all your booked appointments.
-   **Dynamic Routing**: Seamless navigation between Home, Doctors, Details, and Appointment pages using React Router v7.
-   **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices.
-   **Data Management**: Mock data integration simulating a real backend.

## 🛠️ Technologies Used

-   **Frontend Framework**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Routing**: [React Router v7](https://reactrouter.com/)
-   **Styling**: 
    -   [Tailwind CSS v4](https://tailwindcss.com/)
    -   [DaisyUI v5](https://daisyui.com/)
-   **State Management**: React Context API
-   **Linting**: ESLint

## 📂 Project Structure

```bash
search-fn-f-06-main/
├── public/
│   └── doctors.json         # Mock data for doctors
├── src/
│   ├── assets/              # Static assets (images, etc.)
│   ├── Components/          # Application components and pages
│   │   ├── Home.jsx         # Homepage component
│   │   ├── Doctors.jsx      # Doctor listing page
│   │   ├── DoctorDetails.jsx# Detailed view for a specific doctor
│   │   ├── Appointments.jsx # User's booked appointments
│   │   ├── Navbar.jsx       # Global navigation bar
│   │   ├── Footer.jsx       # Global footer
│   │   └── Router.jsx       # Route definitions
│   ├── Provider/            # Implementation of Context API
│   │   └── AppProvider.jsx  # Manages global state (appointments)
│   ├── App.jsx              # Main application entry component
│   ├── main.jsx             # Entry point, renders Router and Providers
│   └── index.css            # Global styles and Tailwind directives
├── package.json             # Project dependencies and scripts
└── vite.config.js           # Vite configuration
```

## ⚙️ Installation and Setup

1.  **Clone the repository** (or extract the project folder):
    ```bash
    git clone <repository-url>
    cd search-fn-f-06-main
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in browser**:
    Click the link provided in the terminal (usually `http://localhost:5173`) to view the application.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available for educational purposes.
