import express from 'express';
import cors from 'cors';
import { unitsRouter } from './routers/units-router';

const PORT = 1338;
const App = express();
const API_URL = '/api/v1';

App.use(express.json());
App.use(cors());

App.use(`${API_URL}/units`,unitsRouter)

App.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});