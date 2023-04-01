import express from 'express';
import * as dotevn from 'dotenv';
import cros from 'cors';

import dalieRoutes from './routes/dalle.routes.js';

dotevn.config();

const app = express();
app.use(cros());
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/dalle', dalieRoutes);

app.get('/', (req, res) => {
    res.status(200).json({message: "hello from DaLL-E"})
});

app.listen(8000, ()=>{
    console.log('Server has stated on http://localhost:8000')
});