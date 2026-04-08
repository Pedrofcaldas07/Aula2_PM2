import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// esse componente e o card de cada pet no carrossel
// ele recebe as informacoes do pet pela prop "pet"
function CardPet({ pet }) {
  return (
    <View style={estilos.card}>

      {/* foto do pet */}
      <Image
        source={{ uri: pet.foto }}
        style={estilos.foto}
      />

      {/* tag de status ex: disponivel ou adotado */}
      <View style={[estilos.tag, { backgroundColor: pet.tagCor }]}>
        <Text style={estilos.tagTexto}>{pet.tag}</Text>
      </View>

      {/* informacoes do pet */}
      <View style={estilos.info}>
        <Text style={estilos.nome}>{pet.nome}</Text>
        <Text style={estilos.raca}>{pet.raca}</Text>
        <Text style={estilos.idade}>{pet.idade} • {pet.sexo}</Text>

        {/* botao de adotar */}
        <View style={estilos.botao}>
          <Text style={estilos.botaoTexto}>Quero adotar 💛</Text>
        </View>
      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: 200,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFD580',
  },
  foto: {
    width: '100%',
    height: 150,
  },
  tag: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  tagTexto: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  info: {
    padding: 12,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B2000',
  },
  raca: {
    fontSize: 12,
    color: '#8B6914',
    fontStyle: 'italic',
    marginTop: 2,
  },
  idade: {
    fontSize: 12,
    color: '#8B6914',
    marginTop: 2,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#FFD580',
    borderRadius: 999,
    paddingVertical: 7,
    alignItems: 'center',
  },
  botaoTexto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3B2000',
  },
});

export default CardPet;
