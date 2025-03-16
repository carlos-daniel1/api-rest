const User = require("../models/userModel.js");

const createUser = async (name, cpf, email, password, image) => {
  try{
    const newUser = new User({
      name,
      cpf,
      email,
      password,
      image,
    });

    if(!name || !cpf || !email || !password || !image){
      throw new Error("É necessário preencher todos os campos")
    }
    await newUser.save();
  
    return newUser;
    
  }catch(error){
    if(error.code === 11000){
      throw new Error("Email ou CPF já existentes.");
    }
    if (error.errors && error.errors.email && error.errors.email.kind === "regexp") {
      throw new Error("Formato de e-mail inválido.");
    }
    throw new Error("Erro ao criar usuário", error.message)
  }
};

const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return user;

  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUser = async (id) => {

  try{
    const user = await User.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    await User.deleteOne({ _id: id });
    return true;
  }catch(error){
    throw new Error(error.message);
  }
  
};

const updateUser = async (id, name, cpf, email, password, image) => {
try{
  let user = await User.findByIdAndUpdate(id, { name, cpf, email, password, image }, { new: true });
  if (!user) {
    throw new Error("Usuário não encontrado");
  }
  if (!(email !== '' && email.match(/.+\@.+\..+/))) {
    throw new Error("email inválido");
  }

  return user; 

}catch(error){
  if(error.code === 11000){
    throw new Error("Email ou CPF já existentes.");
  }
  throw new Error(error.message)
}
};
module.exports = { createUser, getAllUsers, getUserById, deleteUser, updateUser }