const express = require('express');
const app = express();
app.use(express.json());

let orders = [];

app.post('/orders', (req, res) => {
    const { description, amount } = req.body;
    const newOrder = { id: orders.length + 1, description, amount };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

app.listen(8082, () => {
    console.log('Order Service is running on port 8082');
});

