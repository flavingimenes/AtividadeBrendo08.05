import { Link, router } from 'expo-router';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../styles/index';

export default function index() {
  return (
    <View style={styles.container}>

    <AntDesign name="idcard" size={90} color="#3b82f6" />
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

