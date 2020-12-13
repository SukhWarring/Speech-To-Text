## Speech To Text
This is Web App work with open source API [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
Convert User voice into text.
Save the user output in MangoDB and also show on screen .


## Installation
open in vs-code goto terminal 

install npm 
.

and next is install all Dependencies

npm install express --save 

npm install nodemon --save (for server referesh automatically after saving any change )

npm install mangoose 

npm install body-parser


after all installation in terminal type nodemon server.js 

and go to google chrome and type this address  http://localhost:3005/index.html

clicking on mac icon your the browser  want permission to use mic of your computer to access your  voice as a input 

after say any thing to app you can use command go or simple press enter and it will show you output and automattcally save in database 

## Dependencies:
* [nodejs](https://nodejs.org/en/download/): 12.19.0
* [nodemon](https://www.npmjs.com/package/nodemon): 2.0.4
* [Body-parser](https://www.npmjs.com/package/body-parser): 1.19.0
* [Express](https://expressjs.com) 4.17.1
* [MongoDB](https://www.mongodb.com/download-center/community) 2.6.2
* [Mongoose](https://mongoosejs.com) 5.10.7

**Desktop browsers:**

|           |  Chrome  |  Firefox  |  Internet Explorer | Edge |
|---------  |-----------                      |-----------                        |-------------------                           |------                      |
| **Mac**       |    not tested                          |    not tested                            |        not tested                                   |  not tested                       |
| **Windows**   | Supported                       | no working                         |        not working                                   |  not working  

#### Project setup
```
npm install  
    ```
npm install --nodemon 

npm install --express  

npm install --body-parser

npm install --mongodb

npm install --mongoose

## how Project work 

After install all dependency you can run your server via nodemon server.js
and your server will run you can see it on your terminal 3005.
now you can open browser and goto localhost 3005 and see the interface of app.
here is some components like Textbox , 4 buttons everyone has own unique identy .
so for starting project you can press start button for very first time browser will ask your permission to access your microphone to take your voice as a input . when you allow the browser then it will start working write what you say in text box .
Stop button it will stop the recognition.
clear button  it will clear all the input inside the box .
save button  it will save all the data .
Mango.js file have some link in 4th line which is indicate to connect your app with database if you copy it and past it into the compasse which is desktop or we can say GUI interface of mango will work properly .
