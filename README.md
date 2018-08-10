# Doctor Lookup

##### A web application to search for doctors.

#### By Lan Dam, 08/10/2018.

## Description

Doctor Lookup is a web application that let user search for doctor in a given area base on doctor name or by medical symptoms.

## Setup

* Install DoctorLookup by cloning this repository
* Install all the modules by typing npm install
* Get an api key from developer.betterdoctor.com
* Create a .env file at the top level of the directory and place the api key there with the name exports.apiKey (example: exports.apiKey=YOUR_KEY_HERE)
* Build the app by typing npm run build
* The completed app will be in the dist folder

## Technologies Used

Application: JavaScript, Node.js, Webpack, Jasmine, Karma

## Support and Contact

For any questions or support details, please email:
ldam77@yahoo.com

## Spec


* Allows user to enter a medical symptom and returns a list of doctors that can treat that symptom
* Allows user to enter a name and return returns a list of doctors that fit the search query
* If query response contains list of doctors, display the first name, last name, address, phone number, website, and wether or not doctor accept new patient for each doctor
* If API call results in an error (not 200 OK), returns a notification of error message
* If query response doesn't include any doctor, returns a message no doctor meet the criteria


### Legal

Copyright (c) 2018 **Lan Dam**

This software is licensed under the MIT license.
