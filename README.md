# Web-Automation-with-Cypress

## What is Automation?

Automation is the process of using software tools and scripts to perform tasks that would typically be done manually by a human. In the context of software testing, automation involves using tools to execute test cases and compare the actual results with the expected results automatically.

## Why we use Cypress?

There are several reasons why you should use Cypress for web automation:

Fast and efficient: Cypress is built on a unique architecture that allows it to execute tests in the same run loop as the application being tested. This means that tests run faster and more efficiently than with other testing frameworks.

Real-time testing: Cypress provides a real-time view of your application as it runs, making it easy to debug issues as they arise.

Automatic waiting: Cypress automatically waits for the DOM elements to become available before interacting with them. This eliminates the need for explicit waits and reduces the likelihood of flaky tests.

Easy setup: Cypress has a simple and intuitive setup process. You can get up and running with Cypress quickly and easily.

Powerful API: Cypress provides a powerful API for interacting with your application. You can easily simulate user interactions, make HTTP requests, and interact with the DOM.

Continuous Integration: Cypress can be easily integrated with Continuous Integration (CI) tools like Jenkins, CircleCI, and TravisCI. This allows you to automate your testing process and catch issues before they make it to production.

Overall, Cypress is a powerful and efficient tool for web automation that can help you to test your application more effectively and catch issues early in the development process.

## Technology used:
- Cypress
- Visual Studio Code
- Javascript
- cypress-mochawesome-reporter

## How to run this project

- Clone this project
- First install dependencies:
 ```npm install```
 
- Then run the test:
 ```npx cypress run```

## Scenerio:

1. Visit https://katalon-demo-cura.herokuapp.com/
2. Login
3. Make an appointment
4. Facility - Seoul CURA Healthcare Center
5. Check on "Apply for hospital readmission"
6. Healthcare Program - Medicaid
7. Select a visiting date
8. Add a comment
7. Book an Appointment
8. Verify the appointment

## Test case check list based on the Scenerio:

- User Login with valid credential.
- User makes an appointment.

## Mocha Awesome Report:


## Automation Output Video:

https://github.com/zafir100100/Web-Automation-with-Cypress/blob/master/cypress/videos/AppointmentBookingTest.cy.js.mp4
