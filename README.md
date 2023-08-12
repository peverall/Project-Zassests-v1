# Latest Update 7/2/23
Currently working with a MongoB tutorial that builds a full stack app with MEAN. 
Link to tutorial is: https://www.mongodb.com/languages/mean-stack-tutorial

Currently working on building interfaces for computers and printers on the server side.

# Project-Zassests-v1
Project Zassets repository.

# Test push to remote repo

# HOW TO RUN THE APPLICATION
To run the application, follow these stesp: 
1.  Clone the repo and install Node dependencies using the command:
    "npm install cors dotenv express mongodb" for the server side. This would be done in the server root folder. 

2.  Install Node dependencies on the Angular client side along with Angular CLI using the commmand:
        "npm install -g @angular/cli"
3.  Be sure to have the username and password for the database in the connection string for the dotenv file which is not included in the repo for 
    security reasons.
4.  Currently, to run the app, first run the server side using the command: 
        "npx ts-node src/server.ts"
    which will open on http://localhost:5200 

    Next run the client side using the commmand:
        "ng serve -o"
    which will open on http://localhost:4200
