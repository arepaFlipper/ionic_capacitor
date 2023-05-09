# Mobile Project: Ionic, Capacitor, and React

## Overview

Welcome to the repository for my mobile project built using Ionic, Capacitor, and React. The primary purpose of this project is to showcase my software development skills to **Odisea Cultura** and **Assignar**. This project demonstrates my ability to create a modern, performant, and scalable mobile application using the latest technologies and best practices.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Running the Project](#running-the-project)
- [Building the Project](#building-the-project)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive UI**: Ensures a consistent experience across different devices and screen sizes.
- **Offline Capabilities**: Utilizes Capacitor's built-in offline capabilities.
- **Native Functionality**: Integrates native device features such as camera, geolocation, and storage using Capacitor plugins.
- **Scalable Architecture**: Follows best practices for project structure and code organization.
- **State Management**: Efficient state management using React hooks and context.

## Technologies Used

- **Ionic Framework**: For building cross-platform mobile applications with a single codebase.
- **Capacitor**: For accessing native device functionality.
- **React**: For building user interfaces.
- **TypeScript**: For static typing and improved developer experience.
- **Jest**: For testing the application.

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/arepaFlipper/ionic-capacitor-react-demo.git
    cd ionic-capacitor-react-demo
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Install Ionic CLI:**

    ```bash
    npm install -g @ionic/cli
    ```

4. **Install Capacitor CLI:**

    ```bash
    npm install -g @capacitor/cli
    ```

## Running the Project

To run the project in a development environment:

1. **Start the development server:**

    ```bash
    ionic serve
    ```

    This command will start the development server and open the application in your default web browser.

2. **Run on an emulator or device:**

    ```bash
    ionic capacitor run ios
    # or
    ionic capacitor run android
    ```

    Make sure you have Xcode (for iOS) or Android Studio (for Android) installed and properly configured.

## Building the Project

To build the project for production:

1. **Build the Ionic project:**

    ```bash
    ionic build
    ```

2. **Sync with Capacitor:**

    ```bash
    npx cap sync
    ```

3. **Open the project in the native IDE:**

    ```bash
    npx cap open ios
    # or
    npx cap open android
    ```

4. **Build the project in the native IDE**: Follow the platform-specific steps to build and deploy the application.

## Testing

To run the tests for the project:

1. **Run the unit tests:**

    ```bash
    npm test
    ```

2. **Run the end-to-end tests:**

    ```bash
    npm run e2e
    ```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository.**
2. **Create a new branch.**
    ```bash
    git checkout -b feature-name
    ```
3. **Make your changes.**
4. **Commit your changes.**
    ```bash
    git commit -m "Description of changes"
    ```
5. **Push to the branch.**
    ```bash
    git push origin feature-name
    ```
6. **Create a pull request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries, please contact me at:

- **Email**: [cristian00tovar@gmail.com](mailto:cristian00tovar@hotmail.com)
- **LinkedIn**: [cristian00tovar](https://www.linkedin.com/in/cristian00tovar)

Thank you for your interest in my project!

