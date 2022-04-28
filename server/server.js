const express = require('express')
const app = express()
const port = 3000
const person = {
    name: 'jshuang2',
    age: 27,
    phone: '13610219462'
}
app.get('/user/info', (req, res) => {
    res.json({
        code: 0,
        data: person,
        msg: ''
    })
})
app.post('/user/set-info', (req, res) => {
    console.log(req)
    res.json({
        code: 0,
        data: person,
        msg: ''
    })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})