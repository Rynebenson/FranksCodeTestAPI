# Frank's Code Test Server

This is the server portion of a coding project I was tasked with for a full-stack development job interview.

# Table of Contents
1. [Create Root Directory](#create-root-directory)
2. [Clone Repositories and Install Packages](#clone-repositories)
3. [Connect Database](#connect-database)
4. [Run Server](#run-server)
5. [Run Web Application](#run-web-application)
6. [Run Tests](#run-tests)

<a name="create-root-directory"></a>
## 1. Create Root Directory

Open your terminal and run these commands to create a root directory for the web application and server.

 `cd desktop`
 
 `mkdir CodeTest`
 
 `cd CodeTest`

<a name="clone-repositories"></a>
## 2. Clone Repositories and Install Packages

Open two tabs in your terminal under the root directory.

In the first tab run these commands to clone this repository and install it's dependencies.

  `git clone https://github.com/Rynebenson/FranksCodeTest.git`
  
  `cd FranksCodeTest`
  
  `npm install`

Now open the second tab and run these commands to clone the server repository and install it's dependencies.

  `git clone https://github.com/Rynebenson/FranksCodeTestAPI.git`
  
  `cd FranksCodeTestAPI`
  
  `npm install`
  
<a name="connect-database"></a>
## 3. Connect Database

For security purposes I ommitted my database. For this project to full work you will have to create a MongoDB Database. Then add the uri string into a file named config.js. The contents of the config.js file should look like the following:

 `
 module.exports = {
  database: "<MongoDB-URI>"
 }
 `

<a name="run-server"></a>
## 3. Run the Server

In the terminal tab containing the server (FranksCodeTestAPI) run this command to get the server up and running.

 `npm start`
 
If it starts properly you should see these messages in the terminal: 

 `Server running...`

 `Connected to database...`
 
By default the server will run on port 3001. If you have a process already running on that port you will have to kill that process or change the default port in the FranksCodeTestAPI/index.js file

<a name="run-web-application"></a>
## 4. Run the Web Application

In your terminal tab containing the web application (FranksCodeTest) run this command to get the web app up and running.

 `npm start`
 
A new window should open shortly in your default browser running the project @ localhost:3000. 

<a name="run-tests"></a>
## 5. Run Tests

In the terminal tab containing the server (FranksCodeTestAPI) run this command to run unit tests.

 `npm run test`
