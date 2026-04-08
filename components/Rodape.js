import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// componente do rodape no final da tela
function Rodape() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>🐾 Lar Patinhas Felizes 🐾</Text>
      <Text style={estilos.texto}>Feito com amor em React Native 💛</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    marginTop: 8,
    gap: 4,
  },
  texto: {
    fontSize: 12,
    color: '#8B6914',
  },
});

export default Rodape;
