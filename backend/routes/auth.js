const router = require('express').Router()
const passport = require('passport')

const CLIENT_URL = 'http://localhost:3000/'

router.get('/login/failed', (req, res) => {
  if (req.user) {
    res.status(401).json({
      success: false,
      message: 'failure',
    })
  }
})

router.get('/login/success', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'successfull',
    user: req.user,
    cookies: req.cookies,
  })
})

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Error logging out',
      })
    }
    res.redirect(CLIENT_URL)
  })
})

// this will get you only the profile information from google
router.get('/google', passport.authenticate('google', {scope: ['profile']}))

router.get(
  '/outlook',
  passport.authenticate('windowslive', {
    scope: [
      'openid',
      'profile',
      'offline_access',
      'https://outlook.office.com/Mail.Read',
    ],
  })
)

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  })
)

router.get(
  '/outlook/callback',
  passport.authenticate('windowslive', {failureRedirect: '/login'}),
  async function (req, res) {
    res.redirect(CLIENT_URL)
  }
)

module.exports = router
