# Frank's Code Test Server

This is the server portion of a coding project I was tasked with for a full-stack development job interview.

# Table of Contents
1. [Create Root Directory](#create-root-directory)
2. [Clone Repositories and Install Packages](#clone-repositories)
3. [Connect Database](#connect-database)
4. [Populate Database](#populate-database)
5. [Run Server](#run-server)
6. [Run Tests](#run-tests)

<a name="create-root-directory"></a>
## 1. Create Root Directory

Open your terminal and run these commands to create a root directory for the web application and server.

 `cd desktop`
 
 `mkdir CodeTest`
 
 `cd CodeTest`

<a name="clone-repositories"></a>
## 2. Clone Repositories and Install Packages

Open your terminal under the root directory: CodeTest.

Run these commands to download this repository and install all dependencies.

  `git clone https://github.com/Rynebenson/FranksCodeTestAPI.git`
  
  `cd FranksCodeTestAPI`
  
  `npm install`
  
<a name="connect-database"></a>
## 3. Connect Database

For security purposes I ommitted my database. For this project to fully work you will have to create a MongoDB Database. I would suggest using heroku MLab addon. Then add the uri string into a file named config.js. The contents of the config.js file should look like the following:

  `module.exports = {`
  `    database: "<MongoDB-URI>"`
  `}`

<a name="run-server"></a>
## 4. Run the Server

In the terminal tab containing the server (FranksCodeTestAPI) run this command to get the server up and running.

 `npm start`
 
If it starts properly you should see these messages in the terminal: 

 `Server running...`

 `Connected to database...`
 
By default the server will run on port 3001. If you have a process already running on that port you will have to kill that process or change the default port in the FranksCodeTestAPI/index.js file

<a name="populate-database"></a>
## 5. Populate Database

With the server running on port 3001 you are ready to populate the database. You may have noticed that there are two csv files in the folder. There is a route containing a script to convert the csv files into the database which can be running by going to your browser and entering this link in the URL bar:

  `http://localhost:3001/convert_csv`
  
Hit enter. Head back to your terminal and you will see a verification for each records that get's converted. When all records have been recorded you should see this message in the browser:

  `Data converted successfully...`

## 6. Run Tests

In the terminal tab containing the server (FranksCodeTestAPI) run this command to run unit tests.

 `npm run test`
