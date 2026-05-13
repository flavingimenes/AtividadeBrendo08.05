import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { styles } from '../styles/sobre';

// Habilita animações no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Detalhes aprofundados e usando crases (`) para destacar código/termos técnicos
const topicosTecnicos = [
  {
    id: '1',
    icon: 'rocket-launch-outline',
    titulo: 'Visão Geral e Arquitetura',
    conteudo: '• Construído com `React Native` e framework `Expo`.\n• Compartilhamento rápido via `QR Code` ou formatação de texto.\n• Personalização dinâmica de temas através de `Inline Styles` e `StyleSheet`.\n• Design responsivo adaptável para Android e iOS.'
  },
  {
    id: '2',
    icon: 'home-outline',
    titulo: 'Tela Inicial (Index)',
    conteudo: '• Ponto de entrada (`Boas-vindas`) da aplicação.\n• Navegação imperativa via `expo-router` utilizando o método `router.push()`.\n• Componentização nativa com `View`, `Text` e botões interativos com `TouchableOpacity`.\n• Integração de ícones vetoriais otimizados com `@expo/vector-icons`.'
  },
  {
    id: '3',
    icon: 'form-textbox',
    titulo: 'Tela de Cadastro',
    conteudo: '• Gerenciamento complexo de múltiplos estados de formulário via hook `useState`.\n• Validação em tempo real utilizando `Regex` para barrar caracteres inválidos no input numérico.\n• Implementação de `KeyboardAvoidingView` e `ScrollView` para garantir que o teclado nativo não cubra os campos de texto.\n• Feedback visual de erros renderizado condicionalmente.'
  },
  {
    id: '4',
    icon: 'card-account-details-outline',
    titulo: 'Tela de Preview',
    conteudo: '• Recepção e tipagem de dados passados por rota através do hook `useLocalSearchParams`.\n• Lógica de negócios embutida para cálculo de senioridade (Júnior, Pleno, Sênior) baseada em estrutura condicional.\n• Integração com API nativa `expo-clipboard` para funcionalidade assíncrona de cópia (`setStringAsync`).\n• Uso de `router.back()` para permitir edição sem perder dados do estado anterior.'
  },
  {
    id: '5',
    icon: 'check-decagram-outline',
    titulo: 'Tela de Sucesso',
    conteudo: '• Renderização de mídia externa dinâmica usando componente `Image` com propriedade `uri`.\n• Limpeza da pilha de navegação utilizando `router.replace()` para evitar que o usuário retorne para a tela de finalização pelo botão de voltar do celular.\n• Estrutura de UI focada em *Call-to-Action* (CTA) para reiniciar o fluxo.'
  }
];

export default function Sobre() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpandir = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
  };

  const renderTextoComDestaque = (texto: string) => {
    const partes = texto.split(/`([^`]+)`/g);
    return partes.map((parte, index) => {
      if (index % 2 === 1) {
        return <Text key={index} style={styles.textoCodigo}>{parte}</Text>;
      }
      return <Text key={index}>{parte}</Text>;
    });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View style={styles.header}>
        <Text style={styles.textoTopo}>Sobre</Text>
        <Text style={styles.subtextoTopo}>
           Abaixo estão os detalhes técnicos e as principais stacks utilizadas em cada tela do <Text style={{fontWeight: 'bold', color: '#3b82f6'}}>DevCard</Text> .
        </Text>
      </View>

      {topicosTecnicos.map((topico) => (
        <View key={topico.id} style={[styles.card, expandedId === topico.id && styles.cardExpandido]}>
          <TouchableOpacity 
            style={styles.headerColapsavel} 
            onPress={() => toggleExpandir(topico.id)}
            activeOpacity={0.7}
          >
            <View style={styles.tituloContainer}>
              <MaterialCommunityIcons name={topico.icon as any} size={24} color={expandedId === topico.id ? "#3b82f6" : "#1e293b"} />
              <Text style={[styles.tituloTopico, expandedId === topico.id && {color: '#3b82f6'}]}>
                {topico.titulo}
              </Text>
            </View>
            <Ionicons 
              name={expandedId === topico.id ? "chevron-up" : "chevron-down"} 
              size={20} 
              color={expandedId === topico.id ? "#3b82f6" : "#9ca3af"} 
            />
          </TouchableOpacity>

          {expandedId === topico.id && (
            <View style={styles.conteudo}>
              <Text style={styles.textoConteudo}>
                {renderTextoComDestaque(topico.conteudo)}
              </Text>
            </View>
          )}
        </View>
      ))}

      <View style={{ height: 50 }} /> 

    </ScrollView>
  );
}