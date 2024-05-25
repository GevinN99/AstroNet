# AstroNet

AstroNet is a React-based frontend application that consumes data from NASA's public APIs. This application allows users to explore daily and historical astronomy-related data. The project highlights skills in frontend development, API integration, and application deployment.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Usage](#usage)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Challenges and Solutions](#challenges-and-solutions)
8. [Contributing](#contributing)
9. [License](#license)

## Features

- View daily astronomy pictures with descriptions from the Astronomy Picture of the Day (APOD) API.
- Explore Mars Rover photos by selecting different dates and rovers.
- Responsive and visually appealing design using Bootstrap.
- Dynamic data display based on user input.
- User session management to preserve state during the session.

## Technologies Used

- **Frontend**: React with functional components, Vite for development server and build tool
- **Language**: JavaScript
- **CSS Framework**: Bootstrap
- **HTTP Client**: Axios
- **Icons**: FontAwesome
- **Routing**: React Router DOM
- **Particles Animation**: React Tsparticles
- **Version Control**: Git
- **Hosting**: Vercel (or any suitable free hosting platform)
- **Testing**: Jest and React Testing Library

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GevinN99/AstroNet.git
   cd AstroNet
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your NASA API key:

   ```env
   VITE_API_KEY=your_nasa_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Explore the Astronomy Picture of the Day and Mars Rover photos.
3. Use the date picker to view historical data.
4. (Optional) Sign up and log in to access personalized features.

## Testing

To run the tests, use the following command:

```bash
npm test
```

This project includes both unit and integration tests using Jest and React Testing Library. Tests cover critical functionalities and components of the application to ensure robustness and reliability.

## Deployment

1. Build the application:

   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your chosen hosting platform. For example, using Vercel:

   ```bash
   npm install -g vercel
   vercel
   ```

3. Follow the prompts to complete the deployment.

## Challenges and Solutions

### API Integration
- **Challenge**: Handling the asynchronous nature of API calls and managing the data state.
- **Solution**: Used Axios for API requests and React's useState and useEffect hooks to manage data fetching and state updates efficiently.

### Responsive Design
- **Challenge**: Ensuring the application is responsive across various devices.
- **Solution**: Utilized Bootstrap's grid system and responsive classes to create a fluid and adaptable layout.

### User Session Management
- **Challenge**: Preserving user state and managing sessions.
- **Solution**: Implemented session management using localStorage and React context API for state management.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.