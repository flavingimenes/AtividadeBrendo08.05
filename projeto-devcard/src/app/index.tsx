import { Link, router } from 'expo-router';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function index() {
  return (
    <View style={styles.container}>

    <AntDesign name="idcard" size={80} color="#007AFF" />
      <Text style={styles.titulo}>DevCard</Text>

       <Text style={styles.subtitulo}>Seu cartão de visita digital de dev mobile</Text>

        <View style={styles.botao}>
          <TouchableOpacity onPress={() => router.push('/cadastro')}>
            <Text style={styles.buttonText}>Criar meu cartão</Text>

          </TouchableOpacity>
        </View>
    
        <View>
            <Text style={styles.info}>
                Aula plicações móveis 08/05
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 46,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
  },
    subtitulo: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 200,
    width: '40%',
  },
  botao: {
    marginTop: 2,
    marginBottom: 40,
  },
  info:{
    fontSize: 12,
    color: 'gray',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
  }

});