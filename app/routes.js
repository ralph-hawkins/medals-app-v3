var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// Branching

//Are you applying for yourself?
router.post('/medal-application/active-service', function (req, res) {

  var applicationPerson = req.body.applicationPerson

  if (applicationPerson == 'relativeOfDeceased') {

    res.redirect('/medal-application/closest-relative')
  } else {

    res.redirect('/medal-application/active-service')
  }
})

//Are you retired from the armed forces?
router.post('/medal-application/which-services', function (req, res) {

  var activeService = req.body.activeService


  if (activeService == 'serving') {
    res.redirect('/medal-application/ineligible-still-serving')  }

  else {
    res.redirect('/medal-application/which-services')  }
})

//How were you related to the service person?
router.post('/medal-application/death-in-service', function (req, res) {

  var relationship = req.body.relationship

  if (relationship == 'relationshipChild') {

    res.redirect('/medal-application/service-person-was-child')
  } 

  else if (relationship == 'relationshipParent') {

    res.redirect('/medal-application/service-person-was-parent')
  }

  else if (relationship == 'relationshipSibling') {

    res.redirect('/medal-application/service-person-was-sibling')
  }

  else if (relationship == 'relationshipGrandParent') {

    res.redirect('/medal-application/service-person-was-grand-parent')
  }

  else if (relationship == 'relationshipAuntUncle') {

    res.redirect('/medal-application/service-person-was-aunt-uncle')
  }

  else if (relationship == 'relationshipNieceNephew') {

    res.redirect('/medal-application/service-person-was-niece-nephew')
  }

  else {

    res.redirect('/medal-application/death-in-service')
  }
})

//Did the service person die in service?
router.post('/medal-application/which-services', function (req, res) {

  var diedInService = req.body.diedInService


  if (diedInService == 'diedInServiceFalse') {
    res.redirect('/medal-application/death-in-service-evidence')  }

  else {
    res.redirect('/medal-application/which-services')  }
})