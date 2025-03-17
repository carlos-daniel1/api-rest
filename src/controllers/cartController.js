import Cart from "../models/Cart";

const cartController = {
    findAll: async (req, res) => {
        try {
            const findCarts = await Cart.find();
            res.status(200).json(findCarts);

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }
    },
    findOne: async (req, res) => {
        try {
            const id = req.params.id;

            const findCart = await Cart.findOne({ _id: id });

            if (!findCart) {
                return res.status(404).json({ msg: "Carrinho não encontrado." });
            }

            res.status(200).json(findCart);

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }
    },

    insert: async (req, res) => {
        const { userID, products } = req.body

        if (!Array.isArray(products)) {
            res.status(404).json({ message: "Você precisa passar um array de products" })
        }

        if (!userID || !products) {
            res.status(404).json({ message: "Os campos userID e products são obrigatórios" })
        }

        try {
            const newCart = {
                userID,
                products
            }

            await Cart.create(newCart);
            res.status(201).json({ response, msg: "Carrinho criado com sucesso" })

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "Erro no servidor!" })
        }


    },

    delete: async (req, res) => {

    },

    update: async (req, res) => {

    },


}

export default cartController;