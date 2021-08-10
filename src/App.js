import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
//import Botoes from './componentes/Botoes';
import Estilos from './componentes/Estilos';

export default function App() {

  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '+/-', '=']  

  const [valorHist, setValorHist] = useState(" ")
  const [valorAtual, setValorAtual] = useState(" ")

  return(
    <ImageBackground source={require('./componentes/img/fundo.jpg')} style={Estilos.fundo}>
    <View style={Estilos.container}>
      <View style={Estilos.titulo}>
        <Text style={Estilos.textoTitulo}>Calculadora</Text>
      </View>
      <View style={Estilos.tela}>
        <Text style={Estilos.textoHist}>{valorHist}</Text>
        <Text style={Estilos.textoTela}>{valorAtual}</Text>
      </View>
      <View style={Estilos.botoes}>
        {buttons.map((button)=>
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={Estilos.botao}>
          <Text style={Estilos.textoBotao}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
    </ImageBackground>
  );

  function handleInput(botaoPress){
    if(botaoPress === "*" | botaoPress === "/" | botaoPress === "+" | botaoPress === "-"){
      setValorAtual(valorAtual + " " + botaoPress + " ")
      return
    } 
    if(botaoPress === "DEL"){
      console.log(valorAtual)
      setValorAtual(valorAtual.substring(0,(valorAtual.length-1)))
      return
    }
    if(botaoPress ==="."){
      setValorAtual(valorAtual + botaoPress)
      return
    }
    if(botaoPress === "+/-"){
      return
    }
    if(botaoPress === "AC"){
      setValorAtual("")
      setValorHist("")
      return
    }
    if(botaoPress === "="){
      setValorAtual(valorAtual + "=")
      calculator()
      return
    }
    setValorAtual(valorAtual + botaoPress)
  }

  function calculator(){
    const divNum = valorAtual.split(" ")
    const op = divNum[1]
    console.log(divNum)

    if(op === "*"){
      setValorAtual((parseFloat(divNum[0]) * parseFloat(divNum[2])).toString())
    }
    if(op === "/"){
      setValorAtual((parseFloat(divNum[0]) / parseFloat(divNum[2])).toString())
    }
    if(op === "+"){
      setValorAtual((parseFloat(divNum[0]) + parseFloat(divNum[2])).toString())
    }
    if(op === "-"){
      setValorAtual((parseFloat(divNum[0]) - parseFloat(divNum[2])).toString())
    }
    if(op === "%"){
      divNum[2] = parseFloat(valorAtual /100)
      setValorAtual(parseFloat(divNum[0]) * (parseFloat(divNum[2])).toString())/100
    }
  }


}