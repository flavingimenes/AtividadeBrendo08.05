import React from "react";
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cadastro() {
  const router = useRouter();
  const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [anos, setAnos] = useState('');
    const [tecnologia, setTecnologia] = useState('');
    const [cor, setCor] = useState('#000000');
    const [erro, setErro] = useState('');

  const handlePreview = () => {
    if (nome.length > 3) {
      router.push({pathname: '/preview',
     params: { nome, cargo, empresa, anos, tecnologia, cor }});
    }
  };

  const validarExperiencia = (valor: string) => {
    const apenasNumeros = valor.replace(/[^0-9]/g, '');
    setAnos(apenasNumeros);

    if (apenasNumeros === '') {
        setErro('Campo obrigatório');
    } else if (parseInt(apenasNumeros) < 0) {
        setErro('O valor deve ser maior que 0');
    } else {
        setErro('');
    }
  };


  return (
    <View style={styles.container}>

        
     <View>
        <Text style={styles.textoInput}>
            Nome Completo
        </Text>
         <TextInput
            onChangeText={setNome}
            style={[
              styles.input,
              { borderColor: cor },
              nome.length > 0 && nome.length < 3 ? styles.inputError : null,
            ]}
      />

      {nome.length > 0 && nome.length < 3 && (
        <Text style={styles.erroTexto}>O nome deve ter no minimo 3 caracteres.</Text>
      )}
          
     </View>


      <View>
        <Text style={styles.textoInput}>
            Cargo
        </Text>
         <TextInput
            onChangeText={setCargo}
            style={[styles.input, { borderColor: cor }]}
          />
     </View>


      <View>
        <Text style={styles.textoInput}>
            Empresa (opcional)
        </Text>
         <TextInput
            onChangeText={setEmpresa}
            style={[styles.input, { borderColor: cor }]}
          />
     </View>


      <View>
        <Text style={styles.textoInput}>Anos de Experiência</Text>
      
        <TextInput
        style={[styles.input, { borderColor: cor }, erro ? styles.inputError : null]}
        value={anos}
        onChangeText={validarExperiencia}
        keyboardType="numeric"
        maxLength={2}
      />

      {erro ? <Text style={styles.erroTexto}>{erro}</Text> : null}
    </View>


      <View>
        <Text style={styles.textoInput}>
            Tecnologia favorita
        </Text>
         <TextInput
            onChangeText={setTecnologia}
            style={[styles.input, { borderColor: cor }]}
          />
     </View>


    <View>
        <Text style={styles.textoInput}>Cor do cartão</Text>
      <View style={styles.coresBotao}>
        <TouchableOpacity style={[styles.colorButton, { backgroundColor: '#0000FF' }]} onPress={() => setCor('#0000FF')}>
          <Text style={styles.buttonText}>Azul</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.colorButton, { backgroundColor: '#00AA00' }]} onPress={() => setCor('#00AA00')}>
          <Text style={styles.buttonText}>Verde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.colorButton, { backgroundColor: '#800080' }]} onPress={() => setCor('#800080')}>
          <Text style={styles.buttonText}>Roxo</Text>
        </TouchableOpacity>
      </View>
    </View>


    <View style={styles.buttonWrapper}>
      <TouchableOpacity onPress={handlePreview}        style={[styles.button, { backgroundColor: cor }, (nome.length < 3 || erro) ? styles.inputError : null]}
      disabled={nome.length < 3 || !!erro}
      >
        <Text style={styles.buttonText}>Gerar cartão</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 70,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    textoInput: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputError: {
        borderColor: 'red',
    },
    erroTexto: {
        color: 'red',
    },
    coresBotao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    colorButton: {
        flex: 1,
        padding: 10,
        marginHorizontal: 4,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    buttonWrapper: {
        width: '100%',
        marginTop: 10,
    },
    button: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    }
});