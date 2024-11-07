# <u><i>Turbo Test </u> </i>
An Internet Speed Test web application built with the MERN stack (MongoDB, Express, React, and Node.js).<br>
This app allows users to run an internet speed test, displaying their download speed, upload speed, latency, buffer bloat, location, and IP address. The application also features a loading animation to provide a visual indicator while the speed is being measured.

## Features
### <li> Run Speed Test: 
Users can run a speed test to see their internet speed metrics.
### <li>Animated Loading Meter: 
A circular loading animation is displayed while the speed test is in progress.
### <li>Detailed Results:
After the test completes, users see information about their download speed, upload speed, latency, buffer bloat, user location, and IP address.

### Technologies Used
<b>Frontend:</b>  React <br>
<b>Backend:</b>  Node.js, Express <br>
<b>API Client:  </b>Axios <br>
<b>Styling: </b>CSS for UI design and animations <br>
<b>Deployment:</b> Localhost (can be deployed to Heroku, Render, etc.)

### Getting Started
#### Prerequisites
Node.js<br>
npm or yarn <br>
MongoDB (if using MongoDB for any other data storage) <br>

### Installation
##### 1. Clone the repository


<b>git clone:</b>  https://github.com/manankumar94/TurboTest.git<br> 
cd TurboTest

#### 2. Set up the backend

cd server <br> 
npm install<br> 

#### 3. Configure environment variables

Create a .env file in the server directory and add port for your server or use 5000


#### 4. Run the backend

npm start

#### 5. Set up the frontend


cd ../client <br> 
npm install <br> 

#### 6. Run the frontend

npm start

#### 7. Access the application

Open your browser and go to http://localhost:3000 to see the app.

### Usage
Click the Run Speed Test button to start the internet speed test. <br> 
The loading meter will spin while the speed is being measured.
Once complete, your download speed, upload speed, latency, buffer bloat, location, and IP address will be displayed.<br> 

### Project Notes
The project currently runs on localhost. For production, update the API_URL in client/src/services/api.js to point to your deployed backend.
The loading meter animation gives a better user experience during speed testing.
Customize the UI styling in SpeedTest.css for a different look and feel.
## Contributing 
Feel free to contribute to the project by opening issues or submitting pull requests.

