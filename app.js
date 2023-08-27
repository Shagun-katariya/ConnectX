const express = require('express')
const app = express();
const hbs = require('hbs')
const routes = require('./routes/main')


hbs.registerHelper('jsonStringify', function (context) {
  return JSON.stringify(context);
});


app.use(express.static('.'));


app.use('', routes) 


app.set('view engine', 'hbs')
app.set("views", "views")  
  


const port = process.env.PORT || 3000; 
   
const start = async () => { 
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
        } catch (error) {
        console.log(error); 
        } 
    };
  
start();