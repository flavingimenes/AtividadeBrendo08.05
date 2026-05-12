import React from "react";
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { styles } from '../styles/cadastro';

export default function Cadastro() {
  const router = useRouter();
  const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [anos, setAnos] = useState('');
    const [tecnologia, setTecnologia] = useState('');
    const [cor, setCor] = useState('#000000');
    const [erroNome, setErroNome] = useState('');
    const [erroCargo, setErroCargo] = useState('');
    const [erroAnos, setErroAnos] = useState('');
    const [erroTecnologia, setErroTecnologia] = useState('');
    const [erroCor, setErroCor] = useState('');

  const handlePreview = () => {
    let hasError = false;
    setErroNome('');
    setErroCargo('');
    setErroAnos('');
    setErroTecnologia('');
    setErroCor('');

    if (nome.trim().length < 3) {
      setErroNome('Nome deve ter pelo menos 3 caracteres');
      hasError = true;
    }
    if (!cargo.trim()) {
      setErroCargo('Cargo é obrigatório');
      hasError = true;
    }
    if (!anos.trim()) {
      setErroAnos('Anos de experiência é obrigatório');
      hasError = true;
    }
    if (!tecnologia.trim()) {
      setErroTecnologia('Tecnologias favoritas são obrigatórias');
      hasError = true;
    }
    if (cor === '#000000') {
      setErroCor('Selecione uma cor para o cartão');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    router.push({ pathname: '/preview', params: { nome, cargo, empresa, anos, tecnologia, cor } });
  };

  const validarExperiencia = (valor: string) => {
    const apenasNumeros = valor.replace(/[^0-9]/g, '');
    setAnos(apenasNumeros);

    if (apenasNumeros === '') {
        setErroAnos('Campo obrigatório');
    } else if (parseInt(apenasNumeros) <= 0) {
        setErroAnos('O valor deve ser maior que 0');
    } else {
        setErroAnos('');
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
            style={[styles.input, erroNome ? styles.inputError : null]}
      />
      <Text style={erroNome ? styles.erroTexto : styles.erroTextoHidden}>{erroNome || ' '}</Text>
     </View>

      <View>
        <Text style={styles.textoInput}>
            Cargo
        </Text>
         <TextInput
            onChangeText={setCargo}
            style={[styles.input, erroCargo ? styles.inputError : null]}
          />
      <Text style={erroCargo ? styles.erroTexto : styles.erroTextoHidden}>{erroCargo || ' '}</Text>
     </View>


      <View>
        <Text style={styles.textoInput}>
            Empresa (opcional)
        </Text>
         <TextInput
            onChangeText={setEmpresa}
            style={{ ...styles.input, marginBottom: 20 }}
          />
     </View>


      <View>
        <Text style={styles.textoInput}>Anos de Experiência</Text>
      
        <TextInput
        style={[styles.input, erroAnos ? styles.inputError : null]}
        value={anos}
        onChangeText={validarExperiencia}
        keyboardType="numeric"
        maxLength={2}
      />
    <Text style={erroAnos ? styles.erroTexto : styles.erroTextoHidden}>{erroAnos || ' '}</Text>

    </View>


      <View>
        <Text style={styles.textoInput}>
            Tecnologias favoritas
        </Text>
         <TextInput
            onChangeText={setTecnologia}
            style={[styles.input, erroTecnologia ? styles.inputError : null]}
            placeholder="Ex: React, TypeScript, Node.js"
            placeholderTextColor="#8f8f8f"
          />
      <Text style={erroTecnologia ? styles.erroTexto : styles.erroTextoHidden}>{erroTecnologia || ' '}</Text>
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
      <Text style={erroCor ? styles.erroTexto : styles.erroTextoHidden}>{erroCor || ' '}</Text>
    </View>

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

