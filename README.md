
# NetflixGpt(Soon Live)

NetflixGpt is a movie suggestion web app that leverages React.js, Redux Toolkit, Tailwind CSS, Firebase, and OpenAI’s GPT-3 API to provide personalized movie recommendations. The app features secure authentication, dynamic content, and supports multiple languages.

## Features

- **Personalized Movie Recommendations**: Tailored movie suggestions based on user preferences and interests using OpenAI’s GPT-3 API.
- **Secure Authentication**: Firebase Authentication for secure and seamless user login/logout.
- **Dynamic Content**: Random video playback on the home screen for an engaging user experience.
- **Mobile Responsive**: Ensures a smooth experience across devices with responsive design using Tailwind CSS.
- **Multi-language Support**: Supports multiple languages including English and Hindi.

## Technologies Used

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Firebase Authentication
- **API Integration**: OpenAI GPT-3
- **Version Control**: GitHub

## Images
![nteflix-signin](https://github.com/user-attachments/assets/04b43e3e-ea06-4567-84d6-f227907fc3b0)

![netflixTrailer](https://github.com/user-attachments/assets/d81980b1-474c-4e30-9bac-084b4fe80e4f)

![moviesection](https://github.com/user-attachments/assets/0cf14b81-c683-4c04-b4b3-ab51bd0ce0ee)

![gptpage](https://github.com/user-attachments/assets/0488d34c-3940-4980-a43c-d2ec6d060a92)

![gptsearch](https://github.com/user-attachments/assets/10e0d23d-abd9-4970-9799-128fcc1529cb)


## Setup and Installation

To get started with the project, follow the instructions below:

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/himanshuKr7/netflixgpt.git
   cd netflixgpt
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup Firebase:**

   - Create a Firebase project.
   - Enable Authentication.
   - Obtain your Firebase configuration object and replace the Firebase configuration in the project.

4. **Setup OpenAI API:**

   - Obtain your OpenAI API key.
   - Store it in a `.env` file in the root of your project:

     ```env
     REACT_APP_OPENAI_API_KEY=your_openai_api_key
     ```

### Running the Project

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Build the project for production:**

   ```bash
   npm run build
   ```

Devloped with &hearts; By Himanshu :)
