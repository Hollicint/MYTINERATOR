# Table of Contents

-  Project's Title: MYTINERATOR
-  How to Install and Run the Project
-  How to Use the Project
-  Include Credits

# MYTINERATOR
MYTINERATOR is a User-Friendly platform that allows a User to track, budget, and store their travel itinerary.  This includes APIs that help the User choose their next location from Flights, destination information, and weather.


## How to Install project

Packages need to install

node js - node -v
nodemon - npm install -g nodemon
package.json file - npm init
package.json file locked -npm install lodash
Npm install - npm install
Express Apps - npm install expres
npm install mongoose
npm install method-override
npm install cypress
npx cypress open
npm install swagger-jsdoc swagger-ui-express --save

npm install nodemailer body-parser multer express
npm install nodemailer multer

## Run the Project
Open project in Visual Studio code

  - In Github, click the green button code
 - HTTPS section, copy the link or open via GitHub Desktop
![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/e4ec52b4-3d14-4c88-9062-b8ab9ac24822)
- Open terminal page
![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/34b2a70a-9843-4d0d-bc10-49bc8b2d20c0)
- 1st Terminal input: nodemon app
![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/76a45166-5882-4ce6-abe0-c9ace9bc6bdf)
- This will start the project
-  Go into your browser of choice and in the http area added 
      - http://localhost:3000/

## How to Use the Project
Once the site is running the User will be shown these nav options.
![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/c632e3ec-2951-4f58-87e8-87a46f55885f)

### Home [index page]
User will be able to Register Account or Login to their account.
<!--![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/d002dd0d-8ec5-4aaf-8754-57bad8ce6607)-->
![image](https://github.com/user-attachments/assets/5833531a-6716-4b14-98e5-a15d9830bced)
This page also informs the user of their Subscription packages
### Itinerary
User will be able to complete a form which will store their past, present and future ItineraryDetails
![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/afaa935f-198a-4e7d-ba10-7bf934c8712f)
Once complete the information will appear below the form.
If the User clicks on the destination Name: eg Spain  
![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/070b32de-af5b-4a8f-9aeb-8781578f93e6)
This will direct the User to a single page that will display the Itinerary details, from here the User will be able to Edit and Delete the input. They will also be able to go back to the Itinerary pages
![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/a6d75e45-2d32-4244-8c8a-070f34c6917a)

### Budget 
This page contains a Budget Calculator that will allow the user to input a expenditure Limit and they will be able to add and subtract inputs and will see below the total. The User needs to input the costing
eg: limit is €500 
 spent -200
Total will be € 300
![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/5c11e906-c8bc-49b3-a5ea-6cf01bd859bc)
![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/ca6d7a0a-8636-4fa2-bd63-5904744c7cce)

### Accommodation
The accommodation page is yet to be complete but will display Accommodation options for the User in their destination location or any deals that the site has with companies that are located in the area
![image](https://github.com/user-attachments/assets/4ec234c7-bf70-4c61-871e-c72e1225db30)

### Account
The account page will display the information that they have added at registration.
This will also display the Users personal image or avatar.
![image](https://github.com/user-attachments/assets/2d13a73d-3eb6-4815-966a-e0e66423ec99)

### Contact
The contact page will allow the User to send a message to the Customer support team that will respond to the customer via the information inputted in the form
<!--![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/f25a2677-f09a-4415-b75b-4e1a6831baf2)-->
![image](https://github.com/user-attachments/assets/0abacdd7-4aab-401c-bd09-69f64cda3fb9)


### Destination
This page is an API that will display the weather in a certain location along with flights in that country at that certain time
![image](https://github.com/Hollicint/MYTINERATOR/assets/138527285/215a8c02-88c5-40e6-9078-10ed2610085c)

### Rentals
The rentals page is yet to be complete but will display rental options for the User in their destination location or any deals that the site has with companies that are located in the area
![image](https://github.com/user-attachments/assets/eacaeeb9-1add-45bc-a63f-e0efe4de5de4)

      
# Database Connection

### Create the database
CREATE DATABASE MytinApp;

### Use the database
USE MytinApp;

### Create the table for Itineraries
CREATE TABLE Itins (
    ItinID INT AUTO_INCREMENT PRIMARY KEY,
    Destination VARCHAR(255) NOT NULL,
    Date DATE NOT NULL,
    LengthOfStay INT NOT NULL,
    TotalCost DECIMAL(10, 2) NOT NULL,
    AccommodationType VARCHAR(255) NOT NULL,
    AccommodationName VARCHAR(255) NOT NULL,
    AccommodationCost DECIMAL(10, 2) NOT NULL,
    Rental ENUM('Yes', 'No') NOT NULL,
    RentalType VARCHAR(255),
    RentalCost DECIMAL(10, 2)
);

### Insert sample data into the Itins table
INSERT INTO Itins (Destination, Date, LengthOfStay, TotalCost, AccommodationType, AccommodationName, AccommodationCost, Rental, RentalType, RentalCost) 
VALUES 
('Paris', '2023-06-15', 7, 1200.00, 'Hotel', 'Hotel Paris', 700.00, 'Yes', 'Car', 200.00),
('New York', '2023-12-20', 10, 2500.00, 'Apartment', 'NYC Apartment', 1500.00, 'No', NULL, NULL);

![image](https://github.com/user-attachments/assets/73e46209-faea-4d0e-8742-9a5d28344aec)


## Include Credits

HOLLY DOWLING : X21150117 - x21150117@student.ncirl.ie
SHANE BURK : X21110018  - x21110018@student.ncirl.ie
ALEX REGINELLI : X20232357 - x20232357@student.ncirl.ie
NALADUN CONNAUGHTON : X20239262 - X20239262@student.ncirl.ie	