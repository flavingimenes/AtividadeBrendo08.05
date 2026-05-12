import React from "react";
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function Cadastro() {
  const router = useRouter();
  const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [anos, setAnos] = useState('');
    const [tecnologia, setTecnologia] = useState('');
    const [cor, setCor] = useState('#000000');
    const [erro, setErro] = useState('');
    const [erroGeral, setErroGeral] = useState('');

  const handlePreview = () => {
    if (nome.length < 3) {
      setErroGeral('Nome deve ter pelo menos 3 caracteres');
      return;
    }
    if (!cargo.trim()) {
      setErroGeral('Cargo é obrigatório');
      return;
    }
    if (!anos.trim()) {
      setErroGeral('Anos de experiência é obrigatório');
      return;
    }
    if (!tecnologia.trim()) {
      setErroGeral('Tecnologias favoritas são obrigatórias');
      return;
    }
    if (cor === '#000000') {
      setErroGeral('Selecione uma cor para o cartão');
      return;
    }
    setErroGeral('');
    router.push({pathname: '/preview',
     params: { nome, cargo, empresa, anos, tecnologia, cor }});
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView 
          bounces={false}
          showsVerticalScrollIndicator={false}
        >

    <View >

        <Text style={styles.textoTopo}>
            Cadastro
        </Text>
        <Text style={styles.subtextoTopo}>
            Preencha seus dados de dev.
        </Text>

     <View>
        <Text style={styles.textoInput}>
            Nome Completo
        </Text>
         <TextInput
            onChangeText={setNome}
            style={
              styles.input}
      />
          
     </View>

      <View>
        <Text style={styles.textoInput}>
            Cargo
        </Text>
         <TextInput
            onChangeText={setCargo}
            style={styles.input}
          />
     </View>


      <View>
        <Text style={styles.textoInput}>
            Empresa (opcional)
        </Text>
         <TextInput
            onChangeText={setEmpresa}
            style={styles.input}
          />
     </View>


      <View>
        <Text style={styles.textoInput}>Anos de Experiência</Text>
      
        <TextInput
        style={[styles.input, erro ? styles.inputError : null]}
        value={anos}
        onChangeText={validarExperiencia}
        keyboardType="numeric"
        maxLength={2}
      />

      {erro ? <Text style={styles.erroTexto}>{erro}</Text> : null}
    </View>


      <View>
        <Text style={styles.textoInput}>
            Tecnologias favoritas
        </Text>
         <TextInput
            onChangeText={setTecnologia}
            style={styles.input}
            placeholder="Ex: React, TypeScript, Node.js"
            placeholderTextColor="#8f8f8f"
          />
     </View>


    <View>
        <Text style={styles.textoInput}>Cor do cartão</Text>

      <View style={styles.coresBotao}>
        <TouchableOpacity style={[styles.colorButton, { backgroundColor: '#ffffff' }, cor === '#3b82f6' &&{borderColor: '#3b82f6', borderWidth: 2}]} onPress={() => setCor('#3b82f6')}>

          <Text style={[styles.bolaCores, { backgroundColor: '#3b82f6' }]}></Text>

          <Text style={[styles.buttonText, cor === '#3b82f6' && { fontWeight: 'bold' }]}>Azul</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.colorButton, { backgroundColor: '#ffffff' }, cor === '#4ec34e' && {borderColor: '#4ec34e', borderWidth: 2}]} onPress={() => setCor('#4ec34e')}>

          <Text style={[styles.bolaCores, { backgroundColor: '#4ec34e' }]}></Text>

          <Text style={[styles.buttonText, cor === '#4ec34e' && { fontWeight: 'bold' }]}>Verde</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.colorButton, { backgroundColor: '#ffffff' }, cor === '#9129ad' && {borderColor: '#c951eb', borderWidth: 2}]} onPress={() => setCor('#9129ad')}>

          <Text style={[styles.bolaCores, { backgroundColor: '#9129ad' }]}></Text>

          <Text style={[styles.buttonText, cor === '#c951eb' && { fontWeight: 'bold' }]}>Roxo</Text>
          
        </TouchableOpacity>

      </View>
    </View>

       {erroGeral && (
          <Text style={styles.erroGeral}>{erroGeral}</Text>
        )}

    <View style={styles.buttonWrapper}>
      <TouchableOpacity onPress={handlePreview} style={styles.button}
      >
        <Text style={[styles.buttonText, { color: '#ffffff', fontWeight: 'bold', fontSize: 16 }]}>Gerar cartão</Text>
      </TouchableOpacity>
    </View>

    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
        marginBottom: 5,
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
        marginBottom: 20,
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
        marginTop: 20,
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