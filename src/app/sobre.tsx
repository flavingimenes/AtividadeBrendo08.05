import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Sobre() {
  const [expandido, setExpandido] = useState(false);

  const toggleExpandir = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandido(!expandido);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoTopo}>Sobre</Text>
      
      <Text style={styles.subtextoTopo}>
        Este projeto é uma aplicação de cartão de visita digital para desenvolvedores.
      </Text>

      <View style={styles.card}>
        <TouchableOpacity 
          style={styles.headerColapsavel} 
          onPress={toggleExpandir}
          activeOpacity={0.7}
        >
          <Text style={styles.tituloTopico}>Mais informações</Text>
          <Ionicons 
            name={expandido ? "chevron-up" : "chevron-down"} 
            size={20} 
            color="#1b77c7" 
          />
        </TouchableOpacity>

        {expandido && (
          <View style={styles.conteudo}>
            <Text style={styles.textoConteudo}>
              • Compartilhamento rápido via QR Code.{"\n"}
              • Personalização de cores e tecnologias.{"\n"}
              • Design responsivo para todos os dispositivos.
            </Text>
          </View>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
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