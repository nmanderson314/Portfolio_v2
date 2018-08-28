$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZKjhJxK3_et0P450o9svwGBpAMKVF6e0",
    authDomain: "portfolio-nmanderson.firebaseapp.com",
    databaseURL: "https://portfolio-nmanderson.firebaseio.com",
    projectId: "portfolio-nmanderson",
    storageBucket: "",
    messagingSenderId: "983267398107"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  function hideModal(){
      $("#successModal").attr("aria-hidden","true");
      $("#successModal").attr("style","display: none;");
      $("#successModal").attr("class","modal fade");
      $("body").attr("class","");
      $(".modal-backdrop").attr("class","");


  }

  $("#submit-contact").on("click",function(event) {
    event.preventDefault();

    var name = $("#contact-name").val().trim();
    var email = $("#contact-email").val().trim();
    var message = $("#contact-message").val().trim();
    var date = new Date();
    console.log(date);

    database.ref().push({
        name: name,
        email: email,
        message: message,
        dateTime: date
    });

    $("#contact-name").val("");
    $("#contact-email").val("");
    $("#contact-message").val("");

    //timer to show message sent
    setTimeout(function() {
        hideModal();
        }, 5000);
  });



});//end document.ready