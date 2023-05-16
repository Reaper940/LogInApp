const User = require('../Models/User')
const bcrypt = require('bcrypt');


const list_all_users = async(req , res) =>{
    try{
        const get_all_user = await User.find();
        res.json(get_all_user);


    }catch(error){
        console.log(error)
    }

}


const list_users_ByID = async(req , res) =>{
    try{
        const _id = req.params.id
        const  user_byId = await User.findById({_id});
        res.json(user_byId);


    }catch(error){
        console.log(error)
    }

}

const update_users_ByID = async(req , res) =>{
    try{
        const _id = req.params.id
        const email = req.body
        const  updated_user = await User.findByIdAndUpdate({_id}, email );
        res.json(updated_user);


    }catch(error){
        console.log(error)
    }

}

const delete_user_ByID = async(req , res) =>{
    try{
        const _id = req.params.id
        const  delete_user = await User.findByIdAndDelete({_id});
        res.json("User Removed Successfully");


    }catch(error){
        console.log(error)
    }

}




// const createNewUser = async(req,res)=>{
//         try{
//             const user = new User(req.body);
//             console.log("This is User data",user);
//             // const saved_data = await User.save().catch( (err) => console.log(err) );
//             const saved_data = await user.save().catch((err) => console.log(err))
//             res.json("User Added Successfully");

//         } catch(error){
//             console.log(error.message);
//         }
//  }
const register = async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password)
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        email,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await newUser.save();
  
      return res.status(201).json({ newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const login = async (req, res) => {
    const { email, password } = req.body;
    // console.log(email,password)
    try {
      // Find the user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare the provided password with the stored password
      const passwordMatch = await bcrypt.compare(password, user.password);
      console.log(passwordMatch)
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };


 
 
 
 
 module.exports = {
    register,
    login,
    list_all_users,
    list_users_ByID,
    update_users_ByID,
    delete_user_ByID
 }