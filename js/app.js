var display = document.getElementById("display");
var operandos = {
  operador: "",
  operadorAnt: "",
  numAnt: 0
}
var calculadora = {
  init: function(){
    var self = this
    var cero = document.getElementById("0");
    var uno = document.getElementById("1");
    var dos = document.getElementById("2");
    var tres = document.getElementById("3");
    var cuatro = document.getElementById("4");
    var cinco = document.getElementById("5");
    var seis = document.getElementById("6");
    var siete = document.getElementById("7");
    var ocho = document.getElementById("8");
    var nueve = document.getElementById("9");
    var punto = document.getElementById("punto");
    var on = document.getElementById("on");
    var sign = document.getElementById("sign");
    var raiz = document.getElementById("raiz");
    var div = document.getElementById("dividido");
    var por = document.getElementById("por");
    var menos = document.getElementById("menos");
    var mas = document.getElementById("mas");
    var igual = document.getElementById("igual");

    self.asignarEvento();

    cero.addEventListener("click", function(){self.presionTecla("0");})
    uno.addEventListener("click", function(){self.presionTecla("1");})
    dos.addEventListener("click", function(){self.presionTecla("2");})
    tres.addEventListener("click", function(){self.presionTecla("3");})
    cuatro.addEventListener("click", function(){self.presionTecla("4");})
    cinco.addEventListener("click", function(){self.presionTecla("5");})
    seis.addEventListener("click", function(){self.presionTecla("6");})
    siete.addEventListener("click", function(){self.presionTecla("7");})
    ocho.addEventListener("click", function(){self.presionTecla("8");})
    nueve.addEventListener("click", function(){self.presionTecla("9");})
    punto.addEventListener("click", function(){self.presionTecla("punto");})
    on.addEventListener("click", function(){self.presionTecla("on");})
    sign.addEventListener("click", function(){self.presionTecla("sign");})
    raiz.addEventListener("click", function(){self.presionTecla("raiz");})
    div.addEventListener("click", function(){self.presionTecla("div");})
    por.addEventListener("click", function(){self.presionTecla("por");})
    menos.addEventListener("click", function(){self.presionTecla("menos");})
    mas.addEventListener("click", function(){self.presionTecla("mas");})
    igual.addEventListener("click", function(){self.presionTecla("igual");})
  },
  eventoOnMouseDown: function(event){
    var clicked = event.currentTarget;
    clicked.style="transform:scale(0.95,0.95)";
    //console.log('Tecla ' + clicked.id + ' presionada');
  },
  eventoOnMouseUp: function(event){
    var unclicked = event.currentTarget;
    unclicked.style="transform:scale(1,1)";
    //console.log('Tecla soltada');
  },
  asignarEvento: function(){
    var teclas = document.getElementsByClassName('tecla');
    for(var i = 0; i < teclas.length; i++){
      teclas[i].onmousedown = this.eventoOnMouseDown;
      teclas[i].onmouseup = this.eventoOnMouseUp;
    }
  },
  presionTecla: function(teclas){
    var self = this;
    //console.log("Se clickeó: " + teclas);
    if(teclas == "0" || teclas == "1" || teclas == "2" || teclas == "3" ||
     teclas == "4" || teclas == "5" || teclas == "6" || teclas == "7" ||
     teclas == "8" || teclas == "9"){
      //console.log("Número a mostrar en pantalla: " + teclas);
      self.mostrarpantalla(teclas);
    }else{
      //console.log("Tecla presionada: " + teclas);
      self.operador(teclas);
    }
  },
  mostrarpantalla: function(teclas){
    var valorPantalla = display.innerHTML;
    var cantidadNumeros = valorPantalla.replace(".","").length;
    if(cantidadNumeros < 8){
      if (teclas == "0"){
        if(display.innerHTML == "0"){
          display.innerHTML = "0";
        } else {
          display.innerHTML = valorPantalla + teclas;
        }
      } else {
        if (display.innerHTML == "0"){
          display.innerHTML = teclas;
        } else {
          display.innerHTML = valorPantalla + teclas;
        }
      }
    }
  },
  operador: function(teclas){
    switch(teclas){
      case "on":
        display.innerHTML = "0";
        operandos.operador = "";
        operandos.operadorAnt = "";
        operandos.numAnt = 0;
        break;
      case "punto":
        var valor = display.innerHTML;
        if(valor == valor.replace(".","")){
          display.innerHTML = display.innerHTML + ".";
        }
        break;
        case "sign":
          var num = Number(display.innerHTML);
          display.innerHTML = -num;
          break;
        case "raiz":

          break;
        case "div":
          operandos.operador = "div";
          operandos.numAnt = display.innerHTML;
          display.innerHTML = "0";
          break;
        case "por":
          operandos.operador = "por";
          operandos.numAnt = display.innerHTML;
          display.innerHTML = "0";
          break;
        case "menos":
          operandos.operador = "menos";
          operandos.numAnt = display.innerHTML;
          display.innerHTML = "0";
          break;
        case "mas":
          operandos.operador = "mas";
          operandos.numAnt = display.innerHTML;
          display.innerHTML = "0";
          break;
        case "igual":
          var num = display.innerHTML;
          if(operandos.operador != "igual"){
            operandos.operadorAnt = operandos.operador;
            operandos.operador = "igual";

            var mem = operandos.numAnt;
            operandos.numAnt = num;
            num = mem;
          }
          this.operar(num, operandos.numAnt, operandos.operadorAnt);
          break;
        default:
      }
      console.log("operandos: " + operandos.operador);
      console.log("operadorAnt: " + operandos.operadorAnt);
      console.log("numAnt: " + operandos.numAnt);
    },
    operar: function(num1, num2, oper){
      switch (oper) {
        case "mas":
          display.innerHTML = Number(num1) + Number(num2);
          break;
        case "menos":
          display.innerHTML = Number(num1) - Number(num2);
          break;
        case "por":
          display.innerHTML = Number(num1) * Number(num2);
          break;
        case "div":
          display.innerHTML = Number(num1) / Number(num2);
          break;
        default:
      }
    }
  }

  calculadora.init();
