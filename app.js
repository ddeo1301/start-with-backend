const express = require('express');
// body parser is a middleware component that is used to extract data from the body of an HTTP request.
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// app.use('/add-product', (req, res, next) => { 
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><br><input type="number" name="size"><br></r><button type="submit">Add Product</button></form>');
//   });

  app.use('/add-product', (req, res, next) => { 
    res.send('<form action="/product" method="POST">' +
     '<input type="text" name="title"><br>' +
     '<input type="number" name="size"><br>' +
     '<button type="submit">Add Product</button></form>');
  });

app.post('/product', (req, res, next) => { 
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log("i am another middleware");
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);


// const express = require('express');

// const app = express();

// //use :- allows us to use new middleware function
// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// });

// app.use('/add-product', (req, res, next) => {
//   console.log('In another middleware!');
// // send :- allows us to send a response and to attach a body which is of any type
//   res.send('<h1>The "Add Product" Page</h1>');
// });

// app.use('/', (req, res, next) => {
//   console.log('In another middleware!');
//   res.send('<h1>Hello from Express!</h1>');
// });

// app.listen(3000); // creates new server and starts listening on a specified path for incoming HTTP request