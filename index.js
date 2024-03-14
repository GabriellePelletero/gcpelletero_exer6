import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the Homepage!')
})

app.listen(3000)


import router from './router.js';   // import the router function
router(app);

app.listen(3000);