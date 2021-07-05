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
First of all we have to send data on regular basis to the server and while sending data regularly and doing computations on it their will be too much load on the server. There is one more possibility that server might get stuck in an infinite loop while receiving data and putting computations on it. When you are sending data from server there occur some points where coordinates are not sent accurately due to difference in GPS permissions in different areas. Also in some real life scenarios displaying 3D models data on frontend faces delays due to large number of data or inaccuracy. For Example: In our daily life scenario while booking a Careem/Uber ride, we might see that driver is not moving, but in actual he is. And after a minute or while that marker showing driver on map starts moving without showing actual path, which means that it has loaded some previous data that might not be loading due to load on server, slow internet or any other issue.

## What choices of technology, stack, libraries would you propose for these challenges?
According to the current scenario, React leaflet for webapp and for mobile app react-native-maps directions can be used for controlling motions. Also we can use google maps libraries to display data if we want to avoid any third party library that can increase the size of our application. For backend, we can use NodeJs and express specifically. For less amount of data we prefer mongoDB with mongoose because its more responsive which will work in favour of us because efficiency is very important in our case. But for history backup we might use SQL sequelize to make app more hybrid, because there can be a scenario where we have to save the previous data so there SQL databases will work more effectively.

## What is riskiest?
The most riskiest part is that it might get stuck at certain limit while controlling emotions and maintaining overall flow. There can be inaccuracy in data that can lead to some serious issues.

## What steps should be taken in developing the prototype?
First we need to design 3D model to show which data to display and in which environment. This can be done with the above mentioned techniques and technology. Then we might need to configure our hardware and test it to send some minimum amount of data in the beginning and sending it to the server. In short we need to display overall flow of our product from getting data from hardware to displaying on frontend.
