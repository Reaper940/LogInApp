const express = require('express');
const auth_router = express.Router();
const User_Controller = require('../Controller/User_Controller')



auth_router.get('/', User_Controller.list_all_users);
auth_router.get('/:id',User_Controller.list_users_ByID);
auth_router.patch('/:id', User_Controller.update_users_ByID);
auth_router.delete('/:id', User_Controller.delete_user_ByID);
auth_router.post('/Register', User_Controller.register);
auth_router.post('/Login', User_Controller.login);

// auth_router.get('/Register', (req, res) => {
//     // console.log(path.join(__dirname + '../views/Register.html'));
//     console.log("Hello")
//   });

module.exports = {
    auth_router
}