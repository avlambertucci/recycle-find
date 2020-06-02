import express, { response } from 'express';
const app = express();

app.get('/users', (req, resp)=>{
    // resp.send('hello world')
    resp.json(
        [
            "armando",
            "ana",
            "diego",
            "maria",
            "bernardo"
        ]
    )
    console.log('listagem de usuarios')
})
app.listen(5000)