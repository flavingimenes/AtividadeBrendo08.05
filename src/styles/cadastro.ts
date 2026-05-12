import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        padding: 25,
        paddingTop: 30,
    },
    textoTopo: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    subtextoTopo: {
      fontSize: 16,
      color: 'gray',
      marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#8f8f8f61',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
    },
    textoInput: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputError: {
        borderColor: 'red',
    },
    erroTexto: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    },
    erroTextoHidden: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
        opacity: 0,
    },
    erroGeral: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
    },
    coresBotao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    bolaCores: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 10,
        padding: 0,
    },
    colorButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        padding: 10,
        marginHorizontal: 4,
        borderRadius: 10,
        alignItems: 'center',
    },
    colorButtonSelected: {
        borderWidth: 2,
        backgroundColor: '#f0f8ff',
    },
    buttonText: {
        color: '#000000',
    },
    buttonWrapper: {
        width: '100%',
        marginTop: 10,
    },
    button: {
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#3b82f6',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '90%',
        height: 50,
    }
});