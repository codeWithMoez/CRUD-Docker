const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(8081, () => {
    console.log('User Service is running on port 8081');
});

