import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

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

    update: async (req, res) => {
        const id = req.params.id;
        const { products } = req.body;

        if (!products) {
            return res.status(400).json({ message: "O campo products é obrigatório" });
        }

        if (!Array.isArray(products)) {
            return res.status(400).json({ message: "Você precisa passar um array de products" });
        }

        try {
            const updateCart = await Cart.findOneAndUpdate({ _id: id }, { products: products }, { new: true });

            const addProductAtCart = products.map(productId =>
                Product.findByIdAndUpdate(
                    productId,
                    { $addToSet: { carts: id } }
                )
            );
            await Promise.all(addProductAtCart);

            res.status(200).json({ message: "Carrinho atualizado com sucesso!", updateCart });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro no servidor!" });
        }
    }


}

export default cartController;