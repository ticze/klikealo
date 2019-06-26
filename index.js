const emailValidator = (string) => {
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  emailRegex.test(string) ? answer = true : answer = false;
  return answer;
}
window.emailValidator = emailValidator;

document.getElementById('users-email').addEventListener('input', () =>{
  let myInput = document.getElementById('users-email').value;
  valido = document.getElementById('emailOK');
  emailValidator(myInput) ? valido.innerHTML = "Email correcto" : valido.innerHTML ="Email incorrecto";
});


// inicio de carrusel

$('#contentCarousel').owlCarousel({
  loop: true,
  margin:10,
  nav: false,
  dots: false,
  responsive:{
    0:{
      items:2
    },
    600:{
      items:3,
      loop: false      
    }
  }
})