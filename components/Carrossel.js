import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CardPet from './CardPet';

// lista de pets para adoção
const pets = [
  {
    id: '1',
    nome: 'Amendoim',
    raca: 'Vira-lata caramelo',
    idade: '2 anos',
    sexo: 'Macho',
    tag: '🐾 Disponível',
    tagCor: '#4CAF50',
    foto: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400',
  },
  {
    id: '2',
    nome: 'Farofa',
    raca: 'SRD',
    idade: '1 ano',
    sexo: 'Fêmea',
    tag: '⭐ Destaque',
    tagCor: '#F5A623',
    foto: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
  },
  {
    id: '3',
    nome: 'Pipoca',
    raca: 'Poodle mix',
    idade: '3 anos',
    sexo: 'Fêmea',
    tag: '🐾 Disponível',
    tagCor: '#4CAF50',
    foto: 'https://images.unsplash.com/photo-1591160690555-5d7e4a2a1584?w=400',
  },
  {
    id: '4',
    nome: 'Biscoito',
    raca: 'Labrador mix',
    idade: '6 meses',
    sexo: 'Macho',
    tag: '🏠 Adotado',
    tagCor: '#9B59B6',
    foto: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400',
  },
  {
    id: '5',
    nome: 'Coxinha',
    raca: 'Beagle mix',
    idade: '4 anos',
    sexo: 'Fêmea',
    tag: '🐾 Disponível',
    tagCor: '#4CAF50',
    foto: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400',
  },
];

// esse componente e o carrossel que mostra os pets disponíveis
function Carrossel() {

  // guarda qual bolinha esta ativa
  const [bolinhaAtiva, setBolinhaAtiva] = useState(0);

  // essa funcao atualiza a bolinha quando o usuario rola
  function quandoRolar(e) {
    const x = e.nativeEvent.contentOffset.x;
    const indice = Math.round(x / 212); // 200 de largura + 12 de gap
    setBolinhaAtiva(indice);
  }

  return (
    <View>
      <Text style={estilos.titulo}>Pets esperando por você 🐶</Text>

      {/*
        FlatList com horizontal={true} vira um carrossel
        cada item e um CardPet que a gente importou
      */}
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={quandoRolar}
        scrollEventThrottle={16}
        snapToInterval={212}
        decelerationRate="fast"
        contentContainerStyle={estilos.lista}
        renderItem={({ item }) => <CardPet pet={item} />}
      />

      {/* bolinhas indicadoras */}
      <View style={estilos.bolinhas}>
        {pets.map((item, indice) => (
          <View
            key={item.id}
            style={indice === bolinhaAtiva ? estilos.bolinhaAtiva : estilos.bolinha}
          />
        ))}
      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B2000',
    margin: 16,
    marginBottom: 12,
  },
  lista: {
    paddingHorizontal: 16,
    gap: 12,
  },
  bolinhas: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    gap: 6,
  },
  bolinha: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFD580',
  },
  bolinhaAtiva: {
    width: 20,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F5A623',
  },
});

export default Carrossel;
