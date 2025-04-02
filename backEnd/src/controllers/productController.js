import productModel from '../models/Product.js'


const productController = {
    findAll: async (req, res) => {
        try {
            const findProducts = await productModel.find();
            res.status(200).json(findProducts);

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }
    },

    findOne: async (req, res) => {
        try {
            const id = req.params.id;

            const findProduct = await productModel.findOne({ productID: id });

            if (!findProduct) {
                return res.status(404).json({ msg: "Produto não encontrado." });
            }

            res.status(200).json(findProduct);

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }
    },

    insertOne: async (req, res) => {
        const isFieldInvalid = (field) => {
            return !field || field.toString().trim() === '';
        };

        const requiredFields = ['name', 'image', 'price'];
        const missingFields = requiredFields.filter(field => isFieldInvalid(req.body[field]));


        if (missingFields.length > 0) {
            const message = missingFields.map(field => ` ${field} é obrigatório`);

            return res.status(400).json({
                msg: message.toString()
            });
        }


        const product = {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            description: `${req.body.name} is a great product`,
            discounted: 0
        }

        try {
            const response = await productModel.create(product);
            res.status(201).json({ response, msg: "Produto criado com sucesso" })
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }

    },

    update: async (req, res) => {
        try {
            const id = req.params.id;

            const product = {
                name: req.body.name,
                image: req.body.image,
                price: req.body.price,
                description: req.body.description,
                discounted: req.body.discounted
            };

            const updateProduct = await productModel.findOneAndUpdate({ productID: id }, product);

            if (!updateProduct) {
                return res.status(404).json({ msg: "Produto não encontrado" });
            }

            res.status(200).json({ product, msg: "Produto atualizado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const deleteProduct = await productModel.findOneAndDelete({ productID: id });

            if (!deleteProduct) {
                return res.status(404).json({ msg: "Produto não encontrado." });
            }

            res.status(200).json({ msg: "Produto deletado com sucesso" });

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor." })
        }


    }
}

export default productController;