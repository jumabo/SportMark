const express=require('express')
const mysql=require('mysql')
const myconn=require('express-myconnection')
const routes=require('./routes')

const app=express()

app.set('port',9000)

const dbOptions={
    host: 'localhost',
    port: '3306',
    user: 'newuser',
    password: 'C@rpeD13m',
    database: 'sportmark'
}

app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json()) 



app.get('/',(req,res)=>{
    res.send('Welcome to SportMark')
})

app.use('/api',routes)

///app.get('/api',(req,res)=>{
///    res.send('ya viene el select')
///})


app.listen(app.get('port'),()=>{
    console.log(`server running to port ${app.get('port')}`)
})