import mongoose from 'mongoose';

const URI = 'mongodb://localhost:27017/coffee-shop';

async function connectDB() {
    try {
        await mongoose.connect(URI, {});
          console.log('Conexão com MongoDB foi feita com sucesso');
        
    } catch (error) {
        console.log(`Erro ao connectar MongoDB: ${error}`);
        
    }
}

export default connectDB;