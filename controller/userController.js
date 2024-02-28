const { storeNewUser, getAllUser, updateUser, deleteUser } = require("../repository/userRepo");

const createUser = async(_request, _reply) =>{
    try {
        console.log("req body ", _request.body);
        const result = await storeNewUser(_request.body)
        return _reply.send({
            code: true,
            message: "user created successfully ",
            stred: result
        });
    } catch (error) {
        throw new Error("error occured in creating user", error);
    }
}

const handleGetUser = async(_request, _reply) =>{
    try {
        const result = await getAllUser();
        return _reply.send({
            code: true,
            message: "all user fetched successfully ",
            data: result
        });
    } catch (error) {
        throw new Error("error occured in handle get user", error);
    }
}

const handleUpdateUser = async(_request, _reply) =>{
    try {
        const result = await updateUser(_request.body)
        return _reply.send({
            code: true,
            message: "user updated successfully ",
            data: result
        });
    } catch (error) {
        throw new Error(error);
    }
}

const handleDeleteUser = async(_request, _reply) =>{
    try {
        const {id} = _request.params;
        const result = await deleteUser(id);
        return _reply.send({
            code: true,
            message: "user deleted successfully ",
            data: result
        });
    } catch (error) {
        throw new Error("error occured in delete user", error);
    }
}

module.exports = {
    createUser,
    handleGetUser,
    handleUpdateUser,
    handleDeleteUser
}