var express = require("express");
var router = express.Router();
const firebase = require("firebase");
var app = require("firebase/app");
const { from } = require("rxjs");
const { switchMap } = require("rxjs/operators");
const firebasAuth = require("firebase/auth");
/* GET home page. */

// Initialize Firebase with your project's config
const firebaseConfig = {
  projectId: "weather-app-database9900",
  appId: "1:115874794626:web:481fab36c8d73a6144789b",
  databaseURL: "https://weather-app-database9900-default-rtdb.firebaseio.com",
  storageBucket: "weather-app-database9900.appspot.com",
  apiKey: "AIzaSyCeB2UrgElokWHbWa92ElTBTXkjP-gXC4o",
  authDomain: "weather-app-database9900.firebaseapp.com",
  messagingSenderId: "115874794626",
};
const newApp = app.initializeApp(firebaseConfig);

const auth = firebasAuth.getAuth(newApp);
router.post("/", function (req, res, next) {
  const userData = req.body;
  console.log(this.userData);
  return from(
    auth.createUserWithEmailAndPassword(
      this.auth,
      userData.rEmail,
      userData.rPassword
    )
  ).pipe(
    switchMap(({ user }) =>
      updateProfile(user, { displayName: userData.rUsername })
    )
  );
});

// router.post("/", async function (req, res, next) {
//   try {
//     const userData = req.body;
//     console.log(userData + "HI");
//     const { user } = await auth.createUserWithEmailAndPassword(
//       auth,
//       userData.rEmail,
//       userData.rPassword
//     );

//     await updateProfile(user, { displayName: userData.rUsername });

//     // Send a success response
//     res.status(200).json({ message: "User created successfully" });
//   } catch (error) {
//     // Handle errors and send an appropriate error response
//     console.error(error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

module.exports = router;
