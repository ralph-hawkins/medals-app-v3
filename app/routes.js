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

  if (applicationPerson == 'No, I’m applying for the medals of a deceased relative')
    { res.redirect('/medal-application/closest-relative') }

  else if (applicationPerson ==  'No, I’m applying on behalf of someone else')
    { res.redirect('/medal-application/active-service-third-party') }

  else 
    { res.redirect('/medal-application/active-service') }
})

//Are you retired from the armed forces?
router.post('/medal-application/which-services', function (req, res) {

  var activeService = req.body.activeService


  if (activeService == 'No, I’m currently serving') {
    res.redirect('/medal-application/ineligible-still-serving')  }

  else {
    res.redirect('/medal-application/which-services')  }
})


//Which organisations did you serve with?
router.post('/medal-application/name-service', function (req, res) {

  var organisations = req.body.organisations


  if (organisations == 'Other organisations') {
    res.redirect('/medal-application/other-orgs')  }

  else {
    res.redirect('/medal-application/name-service')  }
})


//Is the service person retired from the armed forces?
router.post('/medal-application/lpa', function (req, res) {

  var active3rdParty = req.body.active3rdParty


  if (active3rdParty == 'No, they’re currently serving') {
    res.redirect('/medal-application/ineligible-still-serving')  }

  else {
    res.redirect('/medal-application/lpa')  }
})

//Do you have lasting power of attorney for the service&nbsp;person?
router.post('/medal-application/lpa-upload', function (req, res) {

  var lpa = req.body.lpa

  if (lpa == 'No') {
    res.redirect('/medal-application/ineligible-no-lpa')  }

  else {
    res.redirect('/medal-application/lpa-upload')  }
})

//How were you related to the service person?
router.post('/medal-application/closest-living-relative', function (req, res) {

  var nextOfKin = req.body.nextOfKin
  var eldestChild = req.body.eldestChild
  var eldestBrotherOrSister = req.body.eldestBrotherOrSister
  var eldestHalfBrotherOrSister = req.body.eldestHalfBrotherOrSister
  var eldestGrandchild = req.body.eldestGrandchild
  var eldestNephewOrNiece = req.body.eldestNephewOrNiece
  var eldestHalfNephewOrNiece = req.bdesteldestHalfNephewOrNiece

  if (nextOfKin == 'Husband, wife or civil partner') {
    res.redirect('/medal-application/death-in-service')
  }

  else if (
    (nextOfKin == 'Child' && eldestChild == 'No') || 
    (nextOfKin == 'Brother or sister' && eldestBrotherOrSister == 'No') || 
    (nextOfKin == 'Half brother or sister' && eldestHalfBrotherOrSister == 'No') || 
    (nextOfKin == 'Grandchild' && eldestGrandchild == 'No') || 
    (nextOfKin == 'Nephew or niece' && eldestNephewOrNiece == 'No') || 
    (nextOfKin == 'Half nephew or niece' && eldestHalfNephewOrNiece == 'No' )
    ) {
    res.redirect('/medal-application/ineligible-not-eldest')
  }

  else {
    res.redirect('/medal-application/closest-living-relative')
  }

})

//Is the serviceperson’s husband, wife or civil parnter alive?
router.post('/medal-application/death-in-service', function (req, res) {
  var closestLivingRelative = req.body.closestLivingRelative

  if (closestLivingRelative == 'Yes' ) {
    res.redirect('/medal-application/ineligible-not-next-of-kin')
  }

  else {
    res.redirect('/medal-application/death-in-service')
  }
})


//Did the service person die in service?
router.post('/medal-application/evidence-of-death', function (req, res) {

  var diedInService = req.body.diedInService

  if (diedInService == 'Yes') {
    res.redirect('/medal-application/which-services')  }

  else {
    res.redirect('/medal-application/evidence-of-death')  }
})

//Were you known by other names while in the military?
router.post('/medal-application/contact-preference', function (req, res) {

  var otherName = req.body.otherName


  if (otherName == 'Yes') {
    res.redirect('/medal-application/alternative-name')  }

  else {
    res.redirect('/medal-application/contact-preference')  }
})

router.post('/medal-application/applicant-name', function (req, res) {

  var otherName = req.body.otherName


  if (otherName == 'Yes') {
    res.redirect('/medal-application/alternative-name')  }

  else {
    res.redirect('/medal-application/applicant-name')  }
})


//Is there a living husband, wife or civil partner?
router.post('/medal-application/eldest-child', function (req, res) {

  var partnerOrSpouse = req.body.partnerOrSpouse


  if (partnerOrSpouse == 'partnerOrSpouseYes') {
    res.redirect('/medal-application/ineligible-living-spouse-or-parent')  }

  else {
    res.redirect('/medal-application/eldest-child')  }
})

//Do you have a copy of the death certificate you can provide?
router.post('/medal-application/death-certificate-upload', function (req, res) {

  var deathCert = req.body.deathCert


  if (deathCert == 'No') {
    res.redirect('/medal-application/other-evidence')  }

  else {
    res.redirect('/medal-application/death-certificate-upload')  }
})

//Do you have any other proof the service person has died?
router.post('/medal-application/other-evidence-upload', function (req, res) {

  var otherEvidence = req.body.otherEvidence

  if (otherEvidence == 'No, I  don’t have any proof') {
    res.redirect('/medal-application/ineligible-no-evidence')  }

  else {
    res.redirect('/medal-application/other-evidence-upload')  }
})