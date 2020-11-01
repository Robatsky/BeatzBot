const router = require('express').Router();
const passport = require('passport');

router.get('/discord', passport.authenticate('discord'));

router.get('/discord/redirect', passport.authenticate('discord'), ( req, res) => {
    console.log(req.query);
    if(req.user) {
        res.redirect("http://localhost:3000/");
    } else {
        res.send(401);
    }
});


router.get('/discord/logout', (req, res) => {
    req.session.destroy( () => {
        res.clearCookie('connect.sid');
        res.redirect("http://localhost:3000/");
    });
});

router.get('/', (req, res) => {
    if ( req.user ) {
        res.send( req.user );
    } else {
        res.status(401).send( { msg: "Unauthorized"});
    }
})

module.exports = router;