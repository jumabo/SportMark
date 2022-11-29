const express=require('express')

const app=express()

app.set('port',9000)

app.get('/',(req,res)=>{
    res.send('Welcome to my APP')
})

app.listen(app.get('port'),()=>{
    console.log(`server running to port ${app.get('port')}`)
})