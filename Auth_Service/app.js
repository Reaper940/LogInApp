const express = require('express')
const path = require('path');
const port = process.env.SOCIAL_PORT2 || 5000
const app = express();
const { DB } = require('./db/dbconnection');
const {auth_router}=require('./Routes/AuthRoute')
require('dotenv/config');



app.use(express.json())
app.use(express.urlencoded({extended:false}))
// Serve static files from the 'views' directory
app.use(express.static('views'));

// app.get('/' , (req,res) =>{
//     res.json("Listening on Port:"+ port)
// })

// console.log(path.join(__dirname, 'views'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/Login.html'));
  });
app.get('/Register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/Register.html'));
  });




// app.use('/Tenant_Profiles', tenant_router);
 app.use('/auth', auth_router);


app.listen(port,async()=>{
    console.log('Listening on port: ' + port)
    await DB();

})