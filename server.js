import express from 'express';
import db from './db/db.js'
import taskRouter from './routes/taskRouter.js'

const app = express();
const PORT = 3000;

db();
app.use(express.json());
app.use('/api/task', taskRouter);

app.listen(PORT, (err) => {
    if(!err) {
        console.log(`Server listening on port ${PORT}`);  
    } else {
        console.log("Error occurred, server can't start", err);
    }
});