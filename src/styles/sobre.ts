import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc', // Fundo levemente azulado/cinza moderno
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 24,
  },
  textoTopo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtextoTopo: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: 'transparent', // Transparente por padrão
    shadowColor: '#64748b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardExpandido: {
    borderLeftColor: '#3b82f6', // Borda azul lateral ganha destaque ao abrir
    backgroundColor: '#ffffff',
  },
  headerColapsavel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12, // Dá um espaço entre o ícone e o texto
  },
  tituloTopico: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1e293b',
    marginLeft: 10, // Fallback caso o gap não aplique em versões antigas
  },
  conteudo: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9', 
  },
  textoConteudo: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 28, // Aumentado para respirar melhor com os blocos de código
  },
  // Estilo especial para os blocos de código renderizados dinamicamente
  textoCodigo: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontWeight: '600',
    fontSize: 14,
  },
});