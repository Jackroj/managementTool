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
//associate query example with ascending order
// users.findAll({
//     attributes: ['name'],
//     distinct: 'true',
//     order: [
//         ['name', 'ASC']
//     ],
//     where:{
//         pincode: {[Op.startWith]: '500'}
// }
//     [Op.not]: [
//         {
//             erp_location_id: current_location_id
//         }
//     ],
//     include: [
//         {
//             model: targetModel,
//             where: {value: true}
//         }
//     ]
// })

const deleteUser = async(id) =>{
    return await users.destroy({
        where:{
            id
        }
    })
}
module.exports = {storeNewUser, getAllUser, updateUser, deleteUser};