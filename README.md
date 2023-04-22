# Question List Application

This application has the objective to list questions from an API, answer the questions and share the questions.

## Configurations
- npm (version used is 8.19.3)
- node (version used is 18.13.0)
- Install the libraries with the command "npm install".

## Start
To start the frontend you can run the command "npm run start"

## Tests
To start the tests you can run the command "npm run test"

## Observation
When you answer a question, the Update Question endpoint is called with the new vote added. However, the Retrieve Question endpoint always returns the same value, independent of the update. That's why the vote is not updated on frontend.
