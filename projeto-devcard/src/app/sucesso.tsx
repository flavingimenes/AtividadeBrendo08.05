import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Sucesso() {
  const router = useRouter();

  return (


    <View style={styles.container}>

        <Image source={{ uri: 'https://content.imageresizer.com/images/memes/Thumbs-up-emoji-meme-4.jpg' }} style={{ width: 180, height: 150 }} />
        
      <View style={styles.sucessoContainer}>
          <Text style={styles.textoSucesso}>Cartão criado com sucesso! ✅ </Text>
          <Text style={styles.subtextoSucesso}>Seu cartão de visita digital está pronto. Compartilhe com a galera!</Text>
      </View>
      <Button title="Criar outro cartão" onPress={() => router.push('/cadastro')} />

      <TouchableOpacity onPress={() => router.push('/')} style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>Voltar para o início</Text>
      </TouchableOpacity>  
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 70,
    },
    sucessoContainer: {
        width: '70%',
        padding: 20,
        marginBottom: '70%',
        alignItems: 'center',
    },
    textoSucesso: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtextoSucesso: {
        fontSize: 12,
        textAlign: 'center',
        color: 'gray',
    },
    buttonWrapper: {
        width: '100%',
        marginTop: 10,
        color: '#fff',
    },
    buttonText: {
        color: 'black',
        fontSize: 12,
        borderRadius: 5,
        textAlign: 'center',
    },
});