var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// Branching

router.post('/sole-trader-partnership-details', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var typeOfBusiness = req.body.typeOfBusiness
  console.log(req.body)

  if (typeOfBusiness === 'Limited Company') {
    // redirect to the relevant page
    res.redirect('/limited-company-details')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('sole-trader-partnership-details')
  }
})
