# 🎉 Valentine Week - Surprise ❤️  

An interactive  Valentine Week  celebration page built with  React.js , featuring surprises for each day of Valentine’s week, animations, music, and fun interactions. 🎶✨  

---

---

## 💖  Valentine Week Features   
Each day of Valentine’s Week comes with its own special surprise:  
-  🌹 Rose Day  – Contain Rose Day Poem and images of Rose
-  💓 Propose Day  – Animated popup music section and love letter
-  🍫 Chocolate Day  – Chocolate image fliping cards and text container
-  🧸 Teddy Day  – Cute teddy texts and images 
-  💌 Promise Day  – Meaningful promise messages  
-  💓 Hug Day  – Animated hugging hearts  
-  💋 Kiss Day  – Music section with  ared memories in the form of Video and Images  
-  💍 Valentine's Day  – Special music and proposal section with Game section

---

## 🚀  Installation & Setup   
Follow these steps to run the project on your local machine.  

###  1️⃣ Clone the Repository   
``` 
git clone https://github.com/yourusername/valentine-week-surprise.git
cd valentine-week-surprise
```

###  2️⃣ Install Dependencies   
``` 
npm install
```

###  3️⃣ Install Required Libraries   
The project uses several additional libraries:  

-  Emoji Support  (For enhanced emoji display)  
  ``` 
  npm install emoji-mart
  ```

-  React Router  (For managing page navigation)  
  ``` 
  npm install react-router-dom
  ```

-  React Icons  (For FontAwesome icons)  
  ``` 
  npm install react-icons
  ```

-  Carousel Library  (For smooth image sliding effects)  
  ``` 
  npm install react-responsive-carousel
  ```

-  Import Carousel Styles   
  Add this line in your main CSS or component file:  
  ```
  import "react-responsive-carousel/lib/styles/carousel.min.css";
  ```

###  4️⃣ Start the Development Server   
``` 
npm start
```
This will start the project on `http://localhost:3000/`.

---

## 🎨  Technologies Used   
-  React.js  – Frontend framework  
-  useState, useEffect, useRef  – React Hooks for state management  
-  React Router  – Page navigation  
-  React Icons (FontAwesome)  – Beautiful icons  
-  CSS Animations  – Smooth and beautiful effects  
-  React Responsive Carousel  – Image sliders  

---

## 📁  Special Mentions   
-  Accessing Images from the Public Folder   
  The project uses `process.env.PUBLIC_URL` to access images inside the `/public/assets` folder. Example:  
  ```js
  <img src={process.env.PUBLIC_URL + "/assets/xyz.jpg"} alt="Valentine Image" />
  ```
  This ensures the correct path is used in different environments.

---

## 🌍  How to Deploy on GitHub Pages   
You can easily deploy this React app using  GitHub Pages .  

###  1️⃣ Install GitHub Pages Package   
``` 
npm install gh-pages --save-dev
```

###  2️⃣ Add Deployment Scripts to `package.json`   
Add these lines inside `"scripts"`:  
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

###  3️⃣ Deploy the App   
``` 
npm run deploy
```
Your app will be live at:  
🔗 `https://yourusername.github.io/valentine-week-surprise/` *(Replace `yourusername` with your GitHub username)*  

---

## 🤝  Contributing   
Want to contribute to make this project even better? Follow these steps:  
1.  Fork  the repository.  
2.  Create a branch  (`git checkout -b feature-branch`).  
3.  Commit your changes  (`git commit -m "Added new feature"`).  
4.  Pu  the changes  (`git pu  origin feature-branch`).  
5.  Open a Pull Request .  

---

## 📜  License   
This project is licensed under the  MIT License . Feel free to use and modify it.  

---

💖  Enjoy the Valentine Week Surprise!  🎊  
🌹🍫🧸💌💓💋💍