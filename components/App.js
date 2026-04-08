import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// importando os componentes que eu criei na pasta components
import Cabecalho from './components/Cabecalho';
import Banner    from './components/Banner';
import Carrossel from './components/Carrossel';
import SobreNos  from './components/SobreNos';
import Perfil    from './components/Perfil';
import Rodape    from './components/Rodape';

export default function App() {
  return (
    // ScrollView deixa a tela toda rolavel
    <ScrollView style={estilos.tela}>

      <Perfil />
      <Cabecalho />
      <Banner />
      <Carrossel />
      <SobreNos />
      <Rodape />

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFFBF0',
  },
});
