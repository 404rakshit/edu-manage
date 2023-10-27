# Multi Platform Academic Application

Introducing our multiplatform academic application, a revolutionary tool designed to redefine the way students engage with educational resources. With a strong focus on accessibility, interactivity, and security, our application aims to provide a comprehensive and seamless learning experience for students and educators alike.

   ![2](https://github.com/404rakshit/edu-manage/assets/128210165/4994ad12-17d6-4f0f-b910-4ad471a9558a)

   
## Deployment

- **Frontend Deployed** on [Vercel](https://edu-manage-theta.vercel.app/)
- **Backend Deployed** on Deta Space
- **Application Deployed** on Expo

## Features

- **User Authentication:** Securely authenticate users using JWT tokens, protecting user's data and enabling personalized experiences.

- **Timelime Management:** Regular updates are pushed regaring new info and events organised with a mantained attendance stats.

- **Report Actions:** Easily report new event or query through intuitive user interfaces incase of any emergency.

- **Organised Communities** Verified Students can join different communitiesas per their interest and their participation in various events.

- **Prioritizing Privacy** Seperate dashboard provided to both Students and Faculity, with a control over public visibility focus on protecting and safeguarding the confidentiality and personal information of individuals. 

## Technologies Used

- **Frontend:** Next.js, TailwindCSS.

- **Backend:** Node.js, Express.js, MongoDB, Nodemailer, JWT for authentication.

- **Application:** React Native, Expo, Nativewind, Sanity CMS

## Getting Started

Follow these steps to set up and run the application locally:

1. **Clone the Repository:** 
   ```
   git clone https://github.com/404rakshit/edu-manage.git
   ```

2. **Navigate to the Frontend Directory and Install Dependencies:**
   ```
   cd client
   npm install
   ```

3. **Navigate to the Backend Directory and Install Dependencies:**
   ```
   cd server
   npm install
   ```

4. **Navigate to the Application Directory and Install Dependencies:**
   ```
   cd application
   npm install
   ```

5. **Set Up Environment Variables:** 
   You need to create two `.env` file in the project, one inside client directory another in server directory and configure it with your MongoDB connection string, JWT secret key, and other necessary environment variables.

   ***For Server***
   ```
   CLIENT_ID= google cloud generated credetials
   CLIENT_SECRET= google cloud generated credetials
   refreshToken= google cloud refersh token
   USER= google email
   MONGO= mongodb://localhost:27017
   CLOUDNAME= cloudinary_credentials
   C_KEY = cloudinary_credentials
   C_SECRET= cloudinary_credentials
   ```

6. **Start the Application:**

   ***For Client***
   ```
   cd client
   npm run dev
   ```

   ***For Server***
   ```
   cd server
   npm run dev


  ***For Application***
   ```
   cd application
   npm start or npx expo start
   ```

7. **Open in Your Browser:** 
   Open your browser and navigate to `http://localhost:3000` to access the client.
   Open a preview with Android Studio or Install Expo Go on your mobile and get a preview for the application.

### Client Preview
   ![image](https://github.com/404rakshit/edu-manage/assets/128210165/7b1adae7-fda5-4e34-b4fc-e64238e7d830)


### App Preview
   ![1](https://github.com/404rakshit/edu-manage/assets/128210165/f874e769-63b2-406d-8e27-3b979089dd49)




## Acknowledgments

We would like to express our gratitude to the open-source community and the developers who have contributed to the tools and libraries used in this project.

---
