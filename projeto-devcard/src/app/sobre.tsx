import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sobre() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobre o DevCard</Text>
      <Text style={styles.description}>
        O DevCard é um aplicativo React Native com Expo Router para criar cartões de visita digitais personalizados para desenvolvedores.
      </Text>

      <Text style={styles.sectionTitle}>🏗️ Arquitetura e Navegação</Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Expo Router (File-based Routing):</Text> Sistema de navegação baseado em arquivos onde cada tela é um arquivo .tsx na pasta app/. O _layout.tsx define a estrutura global com Stack Navigator.
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Navegação com Parâmetros Tipados:</Text> Uso de useLocalSearchParams com tipos TypeScript para passar dados entre telas de forma type-safe, evitando erros de runtime.
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Gerenciamento de Estado Local:</Text> useState hooks para controle de formulários, validações e feedback visual em tempo real.
      </Text>

      <Text style={styles.sectionTitle}>📝 Validação e UX</Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Validação Multi-nível:</Text> Validação em tempo real (anos de experiência) + validação de submissão (todos os campos obrigatórios) com mensagens específicas por campo.
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Regex e Sanitização:</Text> Uso de expressões regulares (/[^0-9]/g) para filtrar apenas números em campos numéricos, garantindo integridade de dados.
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Feedback Visual Condicional:</Text> Estilos dinâmicos baseados em estado (borders coloridos, opacidade) para indicar seleção e erros.
      </Text>

      <Text style={styles.sectionTitle}>🎨 UI/UX Avançado</Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Flexbox Layouts Complexos:</Text> Uso de flexDirection, justifyContent, alignItems para criar layouts responsivos como o cartão de preview com header flexível.
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Lógica Condicional de Estilo:</Text> Switch statements e if/else chains para determinar cores de fundo do cartão e badges de nível baseados em regras de negócio.
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Gradientes e Sombras:</Text> LinearGradient do expo-linear-gradient para backgrounds atrativos, combinado com shadow props para profundidade visual.
      </Text>

      <Text style={styles.sectionTitle}>🔧 TypeScript Avançado</Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Type Definitions:</Text> Interfaces TypeScript (PreviewParams) para tipar parâmetros de navegação, garantindo type safety em dados dinâmicos.
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Optional Chaining e Nullish Coalescing:</Text> Uso de ?. e ?? para lidar com valores undefined/null de forma elegante (nome?.trim() || 'Desconhecido').
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Type Guards:</Text> Verificações de tipo implícitas com Number() || 0 para conversão segura de string para number.
      </Text>

      <Text style={styles.sectionTitle}>⚡ Otimizações de Performance</Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Lazy Evaluation:</Text> Validação interrompida no primeiro erro encontrado (early return) para evitar processamento desnecessário.
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Memoização Implícita:</Text> Re-renders controlados por useState, evitando atualizações desnecessárias de componentes filhos.
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Bundle Splitting:</Text> Expo Router automaticamente divide o código por rota, reduzindo o tamanho inicial do bundle.
      </Text>

      <Text style={styles.sectionTitle}>🛡️ Boas Práticas de Código</Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Separação de Responsabilidades:</Text> Lógica de validação separada da lógica de UI, funções puras para cálculos (determinação de nível).
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>Nomes Semânticos:</Text> Variáveis descritivas (tecnologiaPrincipal, experiencia) que expressam intenção clara.
      </Text>
      <Text style={styles.sectionText}>
        • <Text style={styles.bold}>DRY Principle:</Text> Estilos reutilizáveis (styles.button) e lógica compartilhada através de hooks customizados potenciais.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
    color: '#1b77c7',
    paddingHorizontal: 20,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#1b77c7',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
