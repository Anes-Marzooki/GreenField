const express = require('express');
const path = require('path');

const app = express();
let PORT = process.env._PORT || 5000;
app.use(express.static(path.resolve(__dirname, '../build')))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
})