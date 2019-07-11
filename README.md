
# Micron MVC

You can find the deployed project at [https://micron.upthread.io](https://rmtlabs.netlify.com/).

<br> <br>

##  Contributors


|                                       [Lloyd @tactnician](https://github.com/tactnician)                                        |                                       [Student 2](https://github.com/)                                        |                                       [Student 3](https://github.com/)                                        |                                       [Student 4](https://github.com/)                                        |                                       [Student 5](https://github.com/)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://media.licdn.com/dms/image/C4D03AQFJqQwe7bZwiw/profile-displayphoto-shrink_200_200/0?e=1564617600&v=beta&t=Hn0nm0hCF4zbFjc_6yBp6A1Bz1TjkcAjHctuT8rZudg" width = "200" />](https://github.com/tactnician)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/tactnician)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mister-Corn)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NandoTheessen)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/wvandolah)             |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/tactnician) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) |

<br>



## Project Overview

Deployment Ready Offline First React Functional Component Library Web 3.0 Style. A complete MVC housed in a single context seemlessly integrating into the greater app strategy. It's like Material-UI Pro but for functional mvc components. 

[Product Canvas](https://docs.google.com/document/d/1JtzI5QNqebTJw8WQAY_72dzgwo4LUk9Jnluex2vW5bw/edit?usp=sharing)

[Trello Board](https://trello.com/rmtlabs) 


### Key Features

-    Deployment Ready - Full MVC availible from any html document.
-    Works Offline  - Entire MVC in one folder. 
-    Functional - Built to the latest JS standards. 
-    Database clustering - Highly scaleable available and persistent

<br>

## Tech Stack

    React Hooks
    PouchDB
    LESS

<br>

### [Front end](https://github.com/RMT-Labs/react-micro-tactics) built using:

#### React Hooks

-    Pure functional programming 
-    ES7 Syntax 
-    Simplified state management

#### LESS

-    Lightweight - compared to something like material or bootstrap
-    Full control over styling and themeing
-    Ubiquiti of css


#### Front end deployed to `Netlify`
<br>

### [Back end](https://github.com/RMT-Labs/react-micro-tactics-be) built using:

#### Express Js

-    Brings http server to our db
-    Well supported
-    Custom middleware

#### Pouch DB

-    JS implentation of Adobe CouchDB
-    Database clustering and eventual consistency
-    Usable offline in frontend

#### Back end deployed to `Heroku`

<br>

# APIs

## Firebase OAuth

Allows for multiple Auth Providers as well as email. Built by Google.

##  Stripe Payment Gateway

We intend to use react-stripe-elements to embed PCI compliant payment form components. These elements are generated by stripe but may be styled locally 

## Twitter API

The twitter and the twit npm packages both allow crud operations against an  account. Our usage here is more for proof of concept


#  Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products

# Content Licenses


| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders/)                             |

# Testing

React Testing Library is used to test against DOM elements in the same way that a user would. 

# Installation Instructions

#### Frontend 
1. `git clone` into your local repo
1. `cd` into the directory
1. `yarn` to install dependencies
1. `yarn start` to spin up development server
1. `yarn build` when ready for production

#### Backend
1. `git clone` into your local repo
1. `cd` into the directory
1. `yarn` to install dependencies
1. `yarn server` to spin up development server
1. `yarn start` to spin up production server


## Other Scripts

    
    * yarn test - runs tests in the local directory 

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/RMT-Labs/react-micro-tactics-be/blob/master/README.md) for details on the backend of our project.

