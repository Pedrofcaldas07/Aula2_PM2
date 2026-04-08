import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// esse componente mostra as informacoes do lar de adocao
function SobreNos() {
  return (
    <View style={estilos.container}>

      <Text style={estilos.titulo}>Sobre nós 🏠</Text>

      <Text style={estilos.texto}>
        O Lar Patinhas Felizes existe desde 2015 e já ajudou mais de
        1.200 pets a encontrarem um lar cheio de amor. Todos os nossos
        animais são vacinados, castrados e prontos para uma nova família.
      </Text>

      {/* informacoes de contato */}
      <View style={estilos.infoRow}>
        <View style={estilos.infoCard}>
          <Text style={estilos.infoEmoji}>📍</Text>
          <Text style={estilos.infoTexto}>Rua dos Ipês, 33{'\n'}São Paulo - SP</Text>
        </View>

        <View style={estilos.infoCard}>
          <Text style={estilos.infoEmoji}>🕐</Text>
          <Text style={estilos.infoTexto}>Seg a Sex{'\n'}9h até 17h</Text>
        </View>

        <View style={estilos.infoCard}>
          <Text style={estilos.infoEmoji}>📞</Text>
          <Text style={estilos.infoTexto}>(11) 9{'\n'}9999-0000</Text>
        </View>
      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    margin: 16,
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FFD580',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B2000',
    marginBottom: 8,
  },
  texto: {
    fontSize: 13,
    color: '#6B4C00',
    lineHeight: 20,
    marginBottom: 14,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 8,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#FFF8E7',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  infoEmoji: {
    fontSize: 22,
    marginBottom: 4,
  },
  infoTexto: {
    fontSize: 11,
    color: '#6B4C00',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default SobreNos;
