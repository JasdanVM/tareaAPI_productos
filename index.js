import express from 'express';
import apiRoutes from './routes/rutas_productos.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

//rutas de la API
app.use('/productos', apiRoutes);

app.use((req, res) => {
    res.status(404).json(
        {
            message: `url ${req.url} no encontrada`
        }
    )
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})