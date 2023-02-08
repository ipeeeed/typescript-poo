import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({mensagem: 'ola mundo!'})
})

app.listen(3000);