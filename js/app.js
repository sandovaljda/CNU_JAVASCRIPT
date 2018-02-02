var calculadora = {
  init: function(){
    var cero = document.getElementById("0")
    var uno = document.getElementById("1")
    var dos = document.getElementById("2")
    var tres = document.getElementById("3")
    var cuatro = document.getElementById("4")
    var cinco = document.getElementById("5")
    var seis = document.getElementById("6")
    var siete = document.getElementById("7")
    var ocho = document.getElementById("8")
    var nueve = document.getElementById("9")
    var punto = document.getElementById("punto")
    var on = document.getElementById("on")
    var sign = document.getElementById("sign")
    var raiz = document.getElementById("raiz")
    var div = document.getElementById("dividido")
    var por = document.getElementById("por")
    var menos = document.getElementById("menos")
    var mas = document.getElementById("mas")
    var igual = document.getElementById("igual")

    this.asignarEvento()
  },
  eventoOnMouseDown: function(event) {
    var unclicked = event.currentTarget;
      unclicked.style="transform:scale(0.95,0.95)";
    console.log('Tecla ' + unclicked.id + ' presionada');
  },
  eventoOnMouseUp: function(event) {
    var unclicked = event.currentTarget;
      unclicked.style="transform:scale(1,1)";
    console.log('Tecla soltada');
  },
  asignarEvento: function(){
    var teclas = document.getElementsByClassName('tecla');
    for(var i = 0; i < teclas.length; i++){
      teclas[i].onmousedown = this.eventoOnMouseDown;
      teclas[i].onmouseup = this.eventoOnMouseUp;
    }
  }
}

calculadora.init();
