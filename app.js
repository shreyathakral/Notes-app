let sign_up = () => {
  let email = document.getElementById("email")
  let password = document.getElementById("password")

  //here first we check our function is working properly
  // console.log(email.value)
  //console.log(password.value)

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
      window.location.href = "main.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
      // console.log(errorMessage)
      // ..
    });
}

let sign_in = () => {
  let email = document.getElementById("email")
  let password = document.getElementById("password")

  //here first we check our function is working properly
  //console.log(email.value) uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
  // console.log(password.value)

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      window.location.href = "main.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}


