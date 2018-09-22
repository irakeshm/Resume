var config = {
  apiKey: "AIzaSyB4LBqZX3PoRTejhsU97PIx206PgcFA_S0",
  authDomain: "resume-contact-7f6f4.firebaseapp.com",
  databaseURL: "https://resume-contact-7f6f4.firebaseio.com",
  projectId: "resume-contact-7f6f4",
  storageBucket: "resume-contact-7f6f4.appspot.com",
  messagingSenderId: "772813503157"
};
firebase.initializeApp(config);

function savedata() {
  let emailsref = firebase
    .database()
    .ref()
    .child("emails");
  const emails = {
    emailid: document.querySelector("#conatct-email-id").value,
    message: document.querySelector("#conatct-message-id").value,
    name: document.querySelector("#conatct-name-id").value,
    subject: document.querySelector("#conatct-subject-id").value
  };
  emailsref.push(emails);
}
