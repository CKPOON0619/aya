# Project Aya

## Summary

Aya is a Prediction Model on the frontend interface which will be built overtime using tensorflow.js. The first experiment would probably with churning analysis. The prediction model built will be able to be hosted, trained and maintained on the frontend.

(Still in ideation phase)

## How to run

1. ```npm install```
2. ```npm start```

## Tech Used

* Tensorflow.js
* React
* Webpack
* JavaScript
* Python(maybe)

## Work Flow

1. Create a local feature branch to implement a new feature.
2. Once finished working on a feature, merge it to the development branch
3. Code review and then merge it development branch into master.

Example.

Implementing a feature called greeting.

1. ```git checkout -b feature/greeting-feature``` to create a branch
2. ```git fetch origin development``` to get all the latest changes on the development branch (you can do a git pull to fetch and merge in one )
3. ```git merge origin development``` resolve any merge conflicts.
4. ```git checkout development``` to take the new changes picked up from development branch
5. ```git merge feature/greeting-feature``` to add your branch into development.

* It's considered best practice not to code on master.