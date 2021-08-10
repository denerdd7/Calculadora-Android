import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Estilos from './Estilos';

export default function Botoes(){
    return(
        <>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>DEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.textoBotao}>=</Text>
            </TouchableOpacity>
        </>
    )
}