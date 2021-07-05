# TrueMetrics

# Getting started with React Native Project

In the project directory, you can run:
### `yarn start`

For running Application on iOS device you can use:
### `yarn ios`

For running Application on iOS device you can use:
### `yarn android`

Runs the app in the development mode.\
Open [http://localhost:19002](http://localhost:19002) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Part # 1

## What are the biggest challenges you see?
One of the biggest challenge will be to do large computations on frontend. When complex computations will be done on small phones or phones with low RAM, application might get crash. Also there is possibility that accuracy can be effected if computation is not done precisely without rounding of values to achieve maximum results. Also it will be a challenge to make the server response time effecent so that whenever a request is made having large data or dataset it won't take much time. There can be a scneario where there will be slow internet or server could be down, then we need to keep the response locally and whenever internet is available again or api has started working then we can automatically send data to the server and get its response.

## What choices of technology, stack, libraries would you propose for these challenges?
According to the current scenario, React leaflet for webapp and for mobile app react-native-maps directions can be used for controlling motions. Also we can use google maps libraries to display data if we want to avoid any third party library that can increase the size of our application. For backend, we can use NodeJs and express specifically. For less amount of data we prefer mongoDB with mongoose because its more responsive which will work in favour of us because efficiency is very important in our case. But for history backup we might use SQL sequelize to make app more hybrid, because there can be a scenario where we have to save the previous data so there SQL databases will work more effectively.

## What is riskiest?
There can be a scneario where there will be slow internet or server could be down, then we need to keep the response locally and whenever internet is available again or api has started working then we can automatically send data to the server and get its response. 

## What steps should be taken in developing the prototype?
First we need to design 3D model to show which data to display and in which environment. This can be done with the above mentioned techniques and technology. Then we might need to configure our hardware and test it to send some minimum amount of data in the beginning and sending it to the server. In short we need to display overall flow of our product from getting data from hardware to displaying on frontend.
