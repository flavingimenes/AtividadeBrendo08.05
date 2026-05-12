import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  textoTopo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtextoTopo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '100%',
    overflow: 'hidden', 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerColapsavel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  tituloTopico: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1b77c7',
  },
  conteudo: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fafafa',
  },
  textoConteudo: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
});