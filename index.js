const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Dipak Mourya ,How are you  my self dipak?')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
