import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

type PreviewParams = {
  nome?: string;
  cargo?: string;
  empresa?: string;
  anos?: string;
  tecnologia?: string;
  cor?: string;
};

export default function Preview() {
  const router = useRouter();
  const { nome = '', cargo = '', empresa = '', anos = '0', tecnologia = '', cor = '#ffffff' } = useLocalSearchParams<PreviewParams>();

  const experiencia = Number(anos) || 0;
  let level = 'Júnior';
  let levelColor = '#8c8c8c';

  if (experiencia >= 6) {
    level = 'Sênior';
    levelColor = '#d4af37';
  } else if (experiencia >= 3) {
    level = 'Pleno';
    levelColor = '#0077cc';
  } else {
    level = 'Júnior';
    levelColor = '#8c8c8c';
  }

  let cardBackground = '#ffffff';
  if (cor === '#56afd8') {
    cardBackground = '#d7ecf8';
  } else if (cor === '#4ec34e') {
    cardBackground = '#e6f6e9';
  } else if (cor === '#c951eb') {
    cardBackground = '#f5e6ff';
  } else if (cor) {
    cardBackground = cor;
  }

  const firstLetter = nome.trim().charAt(0).toUpperCase();

  const tecnologiaPrincipal = tecnologia.split(',')[0].trim();

  return (
    <View style={styles.container}>

      <Text style={styles.textoTopo}>Seu cartão!</Text>

      <View style={[styles.cardContainer, { backgroundColor: cor }]}>

        <Text style={[styles.firstLetter, { color: cor }]}>{firstLetter}</Text>

        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.cargo}>{cargo}</Text>

        <Text style={styles.empresa}>{empresa}</Text>

        <View
          style={{
            height: 1,
            width: '80%',
            backgroundColor: '#ced0ce81',
            marginVertical: 14,
          }}>

          </View>

          <Text style={styles.tecnologiaText}>Tecnologia favorita:</Text>
        <Text style={styles.tecnologiaPrincipal}>{tecnologiaPrincipal}</Text>

        <Text style={[styles.level, { backgroundColor: levelColor }]}>{level}</Text>

        <Text style={styles.experiencia}>Experiência: {experiencia} anos</Text>



      </View>

      <TouchableOpacity style={styles.botaoEditar} onPress={() => router.back()}>
        <Text style={[styles.textoBotao, { color: '#3b82f6' }]}>Editar dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoFinalizar} onPress={() => router.replace('/sucesso')}>
        <Text style={styles.textoBotao}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  cardContainer: {
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
    height: 400,
  },
  firstLetter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    textAlign: 'center',
    lineHeight: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#90bafe',
  },
  textoTopo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    paddingLeft: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  cargo: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  empresa: {
    fontSize: 14,
    color: '#ffffffa9',
    marginBottom: 5,
  },
  experiencia: {
    fontSize: 14,
    color: '#ffffff8f',
  },
  level: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tecnologiaText: {
    fontSize: 14,
    color: '#ffffffe7',
  },
  tecnologiaPrincipal: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  botaoEditar: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    height: 50,
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
  botaoFinalizar: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    height: 50,
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
