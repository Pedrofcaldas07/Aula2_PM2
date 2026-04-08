import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// esse componente e um aviso amarelo de adocao
function Banner() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.emoji}>🏠</Text>
      <View>
        <Text style={estilos.titulo}>Adote, não compre!</Text>
        <Text style={estilos.subtitulo}>mais de 80 pets esperando por você</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3CD',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#F5C842',
  },
  emoji: {
    fontSize: 32,
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6B4C00',
  },
  subtitulo: {
    fontSize: 12,
    color: '#8B6914',
    marginTop: 2,
  },
});

export default Banner;
