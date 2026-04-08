import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// esse componente e o cabecalho do app
// aparece a foto, o nome do lar e o subtitulo
function Cabecalho() {
  return (
    <View style={estilos.container}>

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800' }}
        style={estilos.foto}
      />

      {/* esse view fica em cima da foto com o texto */}
      <View style={estilos.textoSobreFoto}>
        <Text style={estilos.titulo}>🐾 Lar Patinhas Felizes</Text>
        <Text style={estilos.subtitulo}>adote um amor pra vida toda 💛</Text>
      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    width: '100%',
  },
  foto: {
    width: '100%',
    height: 220,
  },
  textoSobreFoto: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitulo: {
    fontSize: 13,
    color: '#FFE0A0',
    fontStyle: 'italic',
    marginTop: 4,
  },
});

export default Cabecalho;
