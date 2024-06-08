const router = require('express').Router()

router.use('/', require('./auth'))

router.get('/home', (req, res) => {
    return res.send("Home Screen")
})

module.exports = router
