import express from "express"
const app = express();
app.get('/',(req, res) =>
{
    res.send("hello, World!");
})

const port = process.env.PORT || 8080 
app.listen(port, () => console.log('listen port: ${port}'))