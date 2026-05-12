import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 72,
    fontWeight: 'bold',
    marginBottom: 0,
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
    fontSize: 18,
    backgroundColor: '#3b82f6',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 10,
    width: '100%',
    textAlign: 'center',
  }

});