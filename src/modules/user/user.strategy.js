const passport = require("passport");
const { Strategy } = require("passport-jwt");
const { findUser } = require("./user.controller");

module.exports = function () {
    function cookieExtractor(req) {
        let token = null;
        if (req && req.signedCookies)
            token = req.headers.authorization.split(" ")[1];
        return token;
    }

    passport.use(
        "user-jwt",
        new Strategy(
            {
                secretOrKey: process.env.TOKEN_SECRET,
                jwtFromRequest: cookieExtractor,
            },
            function (payload, done) {
                const user = findUser(payload.email);
                if (user) return done(null, user);
                done(null, false);
            }
        )
    );
};
