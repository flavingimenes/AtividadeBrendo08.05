import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Preview() {
  const router = useRouter();
  const { nome, cargo, empresa, anos, tecnologia, cor } = useLocalSearchParams();

  const handleConfirm = () => {
    router.push('/sucesso');
  };

  const handleEdit = () => {
    router.back();
  };

  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Preview do DevCard</Text>
        <View style={[styles.card, { borderColor: cor as string }]}>
          <View style={styles.nameContainer}>
            <Ionicons name="person" size={30} color={cor as string} />
            <Text style={[styles.name, { color: cor as string }]}>{nome}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <MaterialIcons name="work" size={20} color="#666" />
            <Text style={styles.position}>{cargo}</Text>
          </View>
          {empresa && (
            <View style={styles.fieldContainer}>
              <FontAwesome name="building" size={20} color="#666" />
              <Text style={styles.company}>{empresa}</Text>
            </View>
          )}
          <View style={styles.fieldContainer}>
            <Ionicons name="time" size={20} color="#666" />
            <Text style={styles.experience}>Experiência: {anos} anos</Text>
          </View>
          <View style={styles.fieldContainer}>
            <FontAwesome name="code" size={20} color="#666" />
            <Text style={styles.tech}>Tecnologia favorita: {tecnologia}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.editButton]} onPress={handleEdit}>
            <Ionicons name="pencil" size={20} color="#fff" />
            <Text style={styles.buttonText}>Editar Dados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={handleConfirm}>
            <Ionicons name="checkmark" size={20} color="#fff" />
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderRadius: 20,
    padding: 25,
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
  },
  position: {
    fontSize: 20,
    color: '#333',
    marginLeft: 10,
  },
  company: {
    fontSize: 18,
    color: '#666',
    marginLeft: 10,
  },
  experience: {
    fontSize: 18,
    color: '#666',
    marginLeft: 10,
  },
  tech: {
    fontSize: 18,
    color: '#666',
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 25,
    flex: 1,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  editButton: {
    backgroundColor: '#ff6b6b',
  },
  confirmButton: {
    backgroundColor: '#4ecdc4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
