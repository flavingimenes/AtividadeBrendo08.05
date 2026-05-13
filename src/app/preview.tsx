import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Clipboard from 'expo-clipboard'; 
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../styles/preview';

type PreviewParams = {
  nome?: string;
  cargo?: string;
  empresa?: string;
  anos?: string;
  tecnologia?: string;
  cor?: string;
};

export default function Preview() {
  const router = useRouter();
  const { nome = '', cargo = '', empresa = '', anos = '0', tecnologia = '', cor = '#ffffff' } = useLocalSearchParams<PreviewParams>();

  const experiencia = Number(anos) || 0;
  let level = 'Júnior';
  let levelColor = '#8c8c8c';

  if (experiencia >= 6) {
    level = 'Sênior';
    levelColor = '#d4af37';
  } else if (experiencia >= 3) {
    level = 'Pleno';
    levelColor = '#0077cc';
  }

  const tecnologiaPrincipal = tecnologia.split(',')[0].trim();
  const firstLetter = nome.trim().charAt(0).toUpperCase();

  const copiarCartao = async () => {
    const textoFormatado = `
  🪪 *CARTÃO PROFISSIONAL*
  --------------------------
  👤 Nome: ${nome}
  💼 Cargo: ${cargo}
  🏢 Empresa: ${empresa}
  🚀 Nível: ${level} (${experiencia} anos)
  💻 Tech Principal: ${tecnologiaPrincipal}
  --------------------------
Gerado por DevCard!
    `.trim();

    await Clipboard.setStringAsync(textoFormatado);
    Alert.alert("Copiado!", "Os dados do cartão foram copiados para sua área de transferência.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoTopo}>Seu cartão!</Text>

      <View style={[styles.cardContainer, { backgroundColor: cor }]}>
        <Text style={[styles.firstLetter, { color: cor }]}>{firstLetter}</Text>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.cargo}>{cargo}</Text>
        <Text style={styles.empresa}>{empresa}</Text>

        <View style={{ height: 1, width: '80%', backgroundColor: '#ced0ce81', marginVertical: 14 }} />

        <Text style={styles.tecnologiaText}>Tecnologia favorita:</Text>
        <Text style={styles.tecnologiaPrincipal}>{tecnologiaPrincipal}</Text>
        <Text style={[styles.level, { backgroundColor: levelColor }]}>{level}</Text>
        <Text style={styles.experiencia}>Experiência: {experiencia} anos</Text>
      </View>

      {/* --- NOVO BOTÃO DE COMPARTILHAR --- */}
      <TouchableOpacity
        style={[styles.botaoEditar, {marginBottom: 10}]}
        onPress={copiarCartao}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.textoBotao, { color: '#3b82f6', justifyContent: 'center' }]}>Copiar Dados </Text>
          <FontAwesome name="copy" size={16} color="#3b82f6" />
        </View>
        
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoEditar} onPress={() => router.back()}>
        <Text style={[styles.textoBotao, { color: '#3b82f6' }]}>Editar dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoFinalizar} onPress={() => router.replace('/sucesso')}>
        <Text style={styles.textoBotao}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}