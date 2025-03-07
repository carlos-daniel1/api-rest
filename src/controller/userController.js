import userModel from '../models/User.js'
import passwordService from 'bcrypt'
import tokenService from 'jsonwebtoken'


const userController = {
    findAll: async (req, res) => {
        try {
            const result = await userModel.find({});
            res.json(result);

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }
        
    },


    findOne: async (req, res) => {

        try {
            const id = req.params.id;
            const result = await userModel.findOne({ userID: id });
            const{__v, __id, ...json}= result.toObject()

            if (!result) {
                return res.status(404).json({ msg: "Usuario não encontrado." });
            }

            res.json(result);

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }
    },

    insertOne: async (req, res) => {
        const isFieldInvalid = (field) => {
            return !field || field.toString().trim() === '';
        };

        const requiredFields = ['name', 'cpf', 'email', 'password', 'image'];
        const missingFields = requiredFields.filter(field => isFieldInvalid(req.body[field]));

        if (missingFields.length > 0) {
            const message = missingFields.map(field => ` ${field} é obrigatório`);

            return res.status(400).json({
                msg: message.toString()
            });
        }

        const verifyEmail = await userModel.countDocuments({
            email: { $regex: `^${req.body.email}$`, $options: 'i' }
        });

        if (verifyEmail) {
            return res.status(400).json({ msg: `O email já está em uso` });
        }

        try{
            const {password, ...json} = req.body
            const hashPassword = await passwordService.hash(password, Number(process.env.SALT_ROUNDS))
            json.password = hashPassword;

            const result= await userModel.create(json)
            if(!result){
                throw new Exception ("Erro ao criar usuário")
            }
            delete json.password
            res.status(201).json({ message: "Usuário criado com sucesso", data: json });
        }
        catch (error){
            if (error.code === 11000) {
                return res.status(400).json({ msg: 'O CPF já está em uso' });
            }
            res.status(500).json({ message: "Erro ao criar usuário", error: error.message });
        }

    },


    update: async (req, res) => {
        const isFieldInvalid = (field) => {
            return !field || field.toString().trim() === '';
        };

        const requiredFields = ['name', 'cpf', 'email', 'password', 'image'];
        const missingFields = requiredFields.filter(field => isFieldInvalid(req.body[field]));

        if (missingFields.length > 0) {
            const message = missingFields.map(field => ` ${field} é obrigatório`);

            return res.status(400).json({
                msg: message.toString()
            });
        }
        try {
            const id = req.params.id;

            const {password, ...json} = req.body
            const hashPassword = await passwordService.hash(password, Number(process.env.SALT_ROUNDS))
            json.password = hashPassword;

            const updateUser = await userModel.findOneAndUpdate({ userID: id }, json);
    
            if (!updateUser) {
                return res.status(404).json({ msg: "Usuário não encontrado" });
            }
            
            delete json.password
            return res.status(201).json({ message: "Usuário atualizado com sucesso", data: json });
    
    
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." });
        }
        },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const deleteUser = await userModel.findOneAndDelete({ userID: id });

            if (!deleteUser) {
                return res.status(404).json({ msg: "Usuario não encontrado." });
            }

            res.status(200).json({ msg: "Usuario deletado com sucesso" });

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }
    },
    login: async(req, res) =>{
        try {
            const hash = await passwordService.hash(req.body.password, Number(process.env.SALT_ROUNDS))
            const user = await userModel.findOne({email: req.body.email});
            const isMatch = await passwordService.compare(user.password, hash)
            if (!isMatch) {
            const{__v, _id, ...json}= user.toObject()
            const token = await tokenService.sign(json, process.env.SECRET)
            
            return res.status(200).json({message:"Usuario encontrado com sucesso", token: token})
            
            }
            res.status(404).json({message:"Usuario não encontrado"})
            
    }catch (err) {
            res.status(401).json({ message: err.message })
        }
    }
}

export default userController;