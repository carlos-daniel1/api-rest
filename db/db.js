import mongoose from 'mongoose';

const URI = 'mongodb://localhost:27017/to-do-list';

async function connectMongoDB() {
    try {
        await mongoose.connect(URI, {});
          console.log('Conexão com MongoDB foi feita com sucesso');
        
    } catch (error) {
        console.log(`Erro ao connectar MongoDB: ${error}`);
        
    }
}

export default connectMongoDB;