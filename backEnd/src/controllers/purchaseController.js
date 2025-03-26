import Purchase from "../models/Purchase.js";
import User from "../models/User.js";

const purchaseController = {
    getAll: async (req, res) => {
        try {
            const findPurchases = await Purchase.find().populate("cart");
            res.status(200).json(findPurchases);

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params

        try {
            const findPurchase = await Purchase.findById({ _id: id });
            res.status(200).json(findPurchase);

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }

    },

    insert: async (req, res) => {
        const { userID } = req.body

        if(!userID) {
            return res.status(400).json({ msg: "O campo userID è obrigatório." })
        }
        
        try {
        const user = await User.findById(userID);

        if(!user) {
            return res.status(404).json({ msg: "Usuário não encontrado." });
        }

        const purchase = {
            userID,
            cart: user.cart,
        }
            const newPurchase = await Purchase.create(purchase);
            const updateUser = await User.updateOne({ _id: userID }, { $addToSet: { purchase: newPurchase._id } });
            console.log(updateUser)
            res.status(201).json({message: "Compra feita com sucesso!", newPurchase});

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }
    }
}

export default purchaseController;