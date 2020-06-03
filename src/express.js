const NeDB = require("nedb");
const path = require('path');
const db = new NeDB({
    filename: path.join(__dirname, 'todoList.db'),
    autoload: true
})

const express = require("express");
const app = express();
const portNo = 3000;
app.listen(portNo, () => {
    console.log("起動しました", `http://localhost:${portNo}`)
})


app.use('/public', express.static('./public'));
app.get('/', (req, res) => {
    res.redirect(302, '/public')
})

app.get('/create', (req, res) => {
    const q = req.query;
    db.insert({
        deadline: q.deadline,
        favorite: q.favorite,
        isCompleted: q.isCompleted,
        memo: q.memo,
        priority: q.priority,
        value: q.value,
    }, (err, doc) => {
        if (err) {
            console.error(err)
            sendJSON(res, false, {msg: err})
            return
        }
        sendJSON(res, true, {id: doc._id})
    })
})

app.get('/read', (req, res) => {
    db.find({}).exec((err, data) => {
        if(err) {
            sendJSON(res, false, {logs: [], msg: err})
            return
        }
        console.log(data)
        sendJSON(res, true, {logs: data})
    })
})

app.get('/update', (req, res) => {
    const q = req.query;
    db.update({_id: q.id}, {
        deadline: q.deadline,
        favorite: q.favorite,
        isCompleted: q.isCompleted,
        memo: q.memo,
        priority: q.priority,
        value: q.value,
    }, {}, function(err, numRemoved) {
        console.log(err)
        console.log(numRemoved)
    })
})

app.get('/delete', (req, res) => {
    const q = req.query;
    db.remove({_id: q.id}, {}, function(err, numRemoved) {
        console.log(err)
        console.log(numRemoved)
    })
})

function sendJSON(res, result, obj) {
    obj["result"] = result;
    res.json(obj);
}