import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// importando os componentes que eu criei na pasta components
import Login     from './components/Login';
import Cabecalho from './components/Cabecalho';
import Banner    from './components/Banner';
import Carrossel from './components/Carrossel';
import SobreNos  from './components/SobreNos';
import Perfil    from './components/Perfil';
import Rodape    from './components/Rodape';

export default function App() {
  // estado que controla se o usuario esta logado ou nao
  const [logado, setLogado] = useState(false);

  // se ainda nao fez login, mostra a tela de login
  if (!logado) {
    return <Login aoFazerLogin={() => setLogado(true)} />;
  }

  // apos o login, mostra o app normal com ScrollView rolavel
  return (
    <ScrollView style={estilos.tela}>

      <Cabecalho />
      <Banner />
      <Carrossel />
      <SobreNos />
      <Perfil />
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
