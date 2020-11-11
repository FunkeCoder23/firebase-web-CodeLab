// Import stylesheets
import "./style.css";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

// Document elements
const startRsvpButton = document.getElementById("startRsvp");
const guestbookContainer = document.getElementById("guestbook-container");

const form = document.getElementById("leave-message");
const input = document.getElementById("message");
const guestbook = document.getElementById("guestbook");
const numberAttending = document.getElementById("number-attending");
const rsvpYes = document.getElementById("rsvp-yes");
const rsvpNo = document.getElementById("rsvp-no");

var rsvpListener = null;
var guestbookListener = null;

async function main() {
  <script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js" />;

  // Add Firebase project configuration object here
  const firebaseConfig = {
    apiKey: "AIzaSyCNtOf36nW9Q-u0f-UWXzJV0zgrGja_Xvo",
    authDomain: "sample-faafb.firebaseapp.com",
    databaseURL: "https://sample-faafb.firebaseio.com",
    projectId: "sample-faafb",
    storageBucket: "sample-faafb.appspot.com",
    messagingSenderId: "433378267664",
    appId: "1:433378267664:web:a9ab7ead17145eab543095"
  };
  firebase.initializeApp(firebaseConfig);

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      }
    }
  };

  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  // Listen to RSVP button clicks
  startRsvpButton.addEventListener("click", () => {
    ui.start("#firebaseui-auth-container", uiConfig);
  });
}
main();
