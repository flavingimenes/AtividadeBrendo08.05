import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/sucesso';

export default function Sucesso() {
  const router = useRouter();

  return (


    <View style={styles.container}>

        <Image source={{ uri: 'https://content.imageresizer.com/images/memes/Thumbs-up-emoji-meme-4.jpg' }} style={{ width: 180, height: 150 }} />
        
      <View style={styles.sucessoContainer}>
          <Text style={styles.textoSucesso}>Cartão criado com sucesso! ✅ </Text>
          <Text style={styles.subtextoSucesso}>Seu cartão de visita digital está pronto. Compartilhe com a galera!</Text>
      </View>

      <TouchableOpacity onPress={() => router.replace('/')} style={styles.buttonNovoCard}>
        <Text style={styles.buttonNovoText}>Criar outro cartão</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/')} style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>Voltar para o início</Text>
      </TouchableOpacity>  
    </View>
  );
}

