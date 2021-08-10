import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        //backgroundColor: '#D1D0CF',
    },
    
    titulo:{
        backgroundColor: 'blue',
        margin: 10,
    },

    textoTitulo:{
        fontSize: 25,
        color: 'white',
    },

    tela:{
        marginTop: 10,
        width: 400,
        height: 250,
        borderWidth: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10, 
        borderRadius: 10,
        backgroundColor: 'white'
    },

    textoTela:{
        fontSize: 40,
    },

    textoHist:{
        fontSize: 20,
    },

    botoes:{   
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30
    },

    botao:{
        width: 85,
        height: 70,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
    },

    textoBotao:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15
    },

    fundo: {
        flex: 1,
        width: '100%',
        height: '100%',  
      },
});