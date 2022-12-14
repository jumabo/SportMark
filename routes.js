const express = require('express')
const routes = express.Router()
/// Select deportes
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('select * from deportes', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })

    })
})

/// Insert deportes
routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO deportes set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('Añadido OK!')
        })

    })
})

/// Delete deportes
routes.delete('/:id', (req, res) => {

    req.getConnection((err, conn) => {

        if (err) return res.send(err)

        conn.query('DELETE FROM deportes WHERE dep_id = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send('Deporte eliminado!')
        })

    })
})

 /// Update deportes
 routes.put('/:id',(req,res)=>{
    
    req.getConnection((err,conn)=>{
     
     if(err) return res.send(err)
     
     conn.query('UPDATE deportes set ? WHERE dep_id = ?',[req.body,req.params.id],(err,rows)=>{
         if(err) return res.send(err)
 
         res.send('Deporte Actualizado!')
     })
 
    })
 })



module.exports = routes