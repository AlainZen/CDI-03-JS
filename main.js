document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 5000,
    },
  });
});

// Tabssss
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// auth
function validateForm() {
  var name = document.forms["myForm"]["name"];
  var email = document.forms["myForm"]["email"];
  var message = document.forms["myForm"]["mot de passe"];
  var options = document.forms["myForm"]["options"];
  var isChecked = false;

  if (name.value == "") {
      document.getElementById('errorname').innerHTML = "Veuillez entrer un nom valide";
      name.focus();
      return false;
  } else {
      document.getElementById('errorname').innerHTML = "";
  }

  if (email.value == "") {
      document.getElementById('erroremail').innerHTML = "Veuillez entrer une adresse e-mail valide";
      email.focus();
      return false;
  } else {
      document.getElementById('erroremail').innerHTML = "";
  }

  if (email.value.indexOf("@", 0) < 0) {
      document.getElementById('erroremail').innerHTML = "Veuillez entrer une adresse e-mail valide";
      email.focus();
      return false;
  }

  if (email.value.indexOf(".", 0) < 0) {
      document.getElementById('erroremail').innerHTML = "Veuillez entrer une adresse e-mail valide";
      email.focus();
      return false;
  }

  if (message.value == "") {
      document.getElementById('errormsg').innerHTML = "Veuillez entrer un mot de passe valide";
      message.focus();
      return false;
  } else {
      document.getElementById('errormsg').innerHTML = "";
  }
    }
 
    //btn darkmod mais marche que sur index je comprend tjr pas pourquoi; LETSS GOOOOOOOOO ça marche ptn 
    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }
    document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);