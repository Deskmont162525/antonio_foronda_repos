const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt");
const userSchema = require('./models/userModel'); // asumiendo que tienes un modelo de usuario llamado "user"

module.exports = function(passport) {
  console.log("entra en el arcivo config");
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Busca el usuario por correo electrónico
      userSchema.findOne({ email: email })
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'El correo electrónico no está registrado' });
          }

          // Verifica si la contraseña es correcta
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Contraseña incorrecta' });
            }
          });
        })
        .catch(err => console.log(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
