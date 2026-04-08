import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// esse componente mostra o perfil do usuario no topo do app
function Perfil() {
  return (
    <View style={estilos.container}>

      {/* foto de perfil */}
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' }}
        style={estilos.foto}
      />

      {/* nome do usuario */}
      <Text style={estilos.nome}>Pedro Caldas</Text>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#FFFBF0',
    paddingTop: 52,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  foto: {
    width: 48,
    height: 48,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#F5A623',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B2000',
  },
});

export default Perfil;
