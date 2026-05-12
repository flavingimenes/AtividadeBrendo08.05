import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { styles } from '../styles/sobre';

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

