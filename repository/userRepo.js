const {users} = require("../models");

const storeNewUser = async(params) =>{
   return await users.create(params);
}

const getAllUser = async() =>{
    return await users.findAll();
}
const updateUser = async(params) =>{
    const {id, ...rest} = params;
    console.log({id, ...rest});
    return await users.update({
        ...rest
    },
    {
      where: {
        id
      }
    })
}
const deleteUser = async(id) =>{
    return await users.destroy({
        where:{
            id
        }
    })
}
module.exports = {storeNewUser, getAllUser, updateUser, deleteUser};