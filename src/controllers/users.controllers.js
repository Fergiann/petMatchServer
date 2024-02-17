const User = require('../models/users.models');
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
 
// get all
const getUsers = async (request, response) => {
    try {
        
        const users = await User.find().populate("misAnimales", "nombre ciudad sexo imagen estadoAdopcion");
        console.log('Usuarios recuperados con éxito:', users)
        response.status(200).json(users);
        
 
    } catch (error) {
        console.log(error.message);
        response.status(404).json({ message: HTTPSTATUSCODE[400],});
    }
}
 
// get 1
const getUser = async (request, response) => {
    try {
        const { id }  = request.params;
        const user = await User.findById(id);
      
        console.log(user);
        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: user
        });
 
    } catch (error) {
        response.status(404).json({message: error.message});
    }
}
 
// post
const createUser = async (request, response) => {
    const user = new User(request.body);
    try {
        await user.save();
        response.status(201).json({
            status: 201,
            message: HTTPSTATUSCODE[201], 
            user: user});
 
    } catch (error) {
        response.status(400).json({message: error.message});
    }
 
}
 
// patch
const updateUser = async (request, response) => {
    try {
        const {id}= request.params;
        const body = new User(request.body);
        body._id = id    
        const user = await User.findByIdAndUpdate(id, body, {new: true});
        if (!user) {
            return response.status(404).json({ 
                status: 404,
                message: HTTPSTATUSCODE[404], 
            });
        }
        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: user
        });

    } catch (error) {
        console.error(error.message);
        response.status(400).json({ message: error.message });
    }
};
 

// delete
const deleteUser = async (request, response) => {
    try {
        const id = request.params.id;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return response.status(404).json({ message: 'Usuario no encontrado' });
        }

        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: user
        });

    } catch (error) {
        console.error(error.message);
        response.status(500).json({
            status: 500,
            message: HTTPSTATUSCODE[500],
            data: user
        });
    }
};

 
 
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}