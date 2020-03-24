# INFSCI2560 Activity 9

Connect this application to a MongoDB instance and then use [Postman](https://www.postman.com) to insert some books.




Use Express.js and Mongoose to connect to a [Mongo Atlas](https://www.mongodb.com/cloud/atlas) database.





## Steps

1. Create a MongoDB instance in the cloud. Visit Mongo Atlas](https://www.mongodb.com/cloud/atlas) and create an account.
  * Visit the [MongoDB Atlas Instructions](https://canvas.pitt.edu/courses/16763/pages/mongodb-atlas-instructions) page on Canvas for a step by step guide.
  * If you like videos, check out this [YouTube tutorial](https://www.youtube.com/watch?v=_mO2wF_1rV0)
  * For the official documentation check out: [Getting Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) guide to create a cloud hosted MongoDB database.
2. Make sure to allow access from everywhere by whitelisting the IP address `0.0.0.0/0` to use MongoDB Atlas from Glitch. DON'T FORGET THE `/0`!!
3. When you create a MongdoDB account, make sure to write down the username and password, you will need to 


 

* In the [Whitelist Your Connection IP Address](https://docs.atlas.mongodb.com/tutorial/whitelist-connection-ip-address/) section of the tutorial, you should enter `0.0.0.0/0`. 
* Make sure to write down the username and password you create, you will need them for your Glitch application.











API tests with Postman

`GET /api/book`


`POST /api/book`
```json
{
  "title":"War and Peace",
  "author":"Warren Peice?"
}
```

`POST /api/book`

```json
{
  "title":"One Day in the Life of Ivan Denisovich",
  "author":"Aleksandr Solzhenitsyn"
}
```

`GET /api/book`


Made by [Glitch](https://glitch.com/)
-------------------

\ ゜o゜)ノ
