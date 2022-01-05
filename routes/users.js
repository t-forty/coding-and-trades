const express = require('express');
const app = express();
const db = require('../services/db');
const router = express.Router();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// :url/users/
router.get('/', (req, res) => res.send('User USERS route'));

// :url/users/create
router.post('/create', async (req, res, next) =>{
    let user = req.body;
    try{
        const result = await db.pool.query('insert into users (email, username, password) values (?,?,?)', [user.email, user.username, user.password]);
        res.send(result);
    }catch (err) {
        throw err;
    }
     
});
// router.put('/update', async (req, res) => {
//     let task = req.body;
//     try {
//         const result = await db.pool.query("update tasks set description = ?, completed = ? where id = ?", [task.description, task.completed, task.id]);
//         res.send(result);
//     } catch (err) {
//         throw err;
//     } 
// });
 
// router.delete('/delete', async (req, res) => {
//     let id = req.query.id;
//     try {
//         const result = await db.pool.query("delete from tasks where id = ?", [id]);
//         res.send(result);
//     } catch (err) {
//         throw err;
//     } 
// });

module.exports = router;