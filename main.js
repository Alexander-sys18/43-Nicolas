
window.onload = function() {
    const elemento = document.querySelector("#excuse");
      let who = ['El perro','Mi abuela','Su tortuga','Mi pájaro'];
      let action = ['comió','meó','aplastó','rompió'];
      let what = ['mi tarea', 'las llaves', 'el carro'];
      let when = ['antes de la clase','justo a tiempo','cuando terminé','durante mi almuerzo','mientras oraba'];

  elemento.innerText = who[Math.floor(Math.random()*who.length)] +" "+ action[Math.floor(Math.random()*action.length)] + " "+ what[Math.floor(Math.random()*what.length)] +" "+ when[Math.floor(Math.random()*when.length)]};
