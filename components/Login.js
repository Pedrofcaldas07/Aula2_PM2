import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

// credenciais validas para o login (simulacao)
const USUARIO_VALIDO = 'admin';
const SENHA_VALIDA = '1234';

// tela de login com a identidade visual do Lar Patinhas Felizes
function Login({ aoFazerLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  // funcao chamada ao apertar o botao de entrar
  function handleLogin() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Campos vazios', 'Preencha o usuário e a senha para entrar.');
      return;
    }

    setCarregando(true);

    // simula uma chamada de autenticacao (timeout de 1s)
    setTimeout(() => {
      setCarregando(false);

      if (email.trim() === USUARIO_VALIDO && senha === SENHA_VALIDA) {
        aoFazerLogin(); // chama o callback para mudar de tela
      } else {
        Alert.alert(
          'Acesso negado',
          'Usuário ou senha incorretos.\n\nDica: use "pedro" e "1234"'
        );
      }
    }, 1000);
  }

  return (
    <KeyboardAvoidingView
      style={estilos.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* foto de capa com overlay, igual ao Cabecalho */}
      <View style={estilos.capa}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800' }}
          style={estilos.capaFoto}
        />
        <View style={estilos.capaOverlay}>
          <Text style={estilos.capaTitulo}>🐾 Lar Patinhas Felizes</Text>
          <Text style={estilos.capaSubtitulo}>adote um amor pra vida toda 💛</Text>
        </View>
      </View>

      {/* card de login */}
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Entrar na sua conta</Text>
        <Text style={estilos.subtitulo}>
          Acesse para ver os pets disponíveis para adoção
        </Text>

        {/* campo usuario */}
        <Text style={estilos.label}>Usuário</Text>
        <View style={estilos.inputContainer}>
          <Text style={estilos.inputIcone}>👤</Text>
          <TextInput
            style={estilos.input}
            placeholder="Digite seu usuário"
            placeholderTextColor="#B8936A"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        {/* campo senha */}
        <Text style={estilos.label}>Senha</Text>
        <View style={estilos.inputContainer}>
          <Text style={estilos.inputIcone}>🔒</Text>
          <TextInput
            style={estilos.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#B8936A"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!senhaVisivel}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
            <Text style={estilos.olhoIcone}>{senhaVisivel ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>

        {/* botao entrar */}
        <TouchableOpacity
          style={[estilos.botao, carregando && estilos.botaoDesativado]}
          onPress={handleLogin}
          disabled={carregando}
          activeOpacity={0.85}
        >
          <Text style={estilos.botaoTexto}>
            {carregando ? 'Entrando...' : 'Entrar 🐾'}
          </Text>
        </TouchableOpacity>

        {/* dica de acesso */}
        <View style={estilos.dica}>
          <Text style={estilos.dicaTexto}>
            💡 Dica: use <Text style={estilos.dicaNegrito}>admin</Text> e senha{' '}
            <Text style={estilos.dicaNegrito}>1234</Text>
          </Text>
        </View>
      </View>

      {/* rodape */}
      <Text style={estilos.rodape}>🐾 Lar Patinhas Felizes • Feito com amor 💛</Text>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFFBF0',
  },

  // capa igual ao Cabecalho.js
  capa: {
    width: '100%',
  },
  capaFoto: {
    width: '100%',
    height: 200,
  },
  capaOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    padding: 16,
  },
  capaTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  capaSubtitulo: {
    fontSize: 13,
    color: '#FFE0A0',
    fontStyle: 'italic',
    marginTop: 4,
  },

  // card branco igual ao SobreNos.js
  card: {
    margin: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#FFD580',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B2000',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 13,
    color: '#6B4C00',
    marginBottom: 20,
    lineHeight: 18,
  },

  // labels e inputs
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6B4C00',
    marginBottom: 6,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E7',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFD580',
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  inputIcone: {
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#3B2000',
    paddingVertical: 12,
  },
  olhoIcone: {
    fontSize: 16,
    paddingLeft: 8,
  },

  // botao igual ao CardPet.js
  botao: {
    backgroundColor: '#FFD580',
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 6,
  },
  botaoDesativado: {
    backgroundColor: '#FFE9A8',
  },
  botaoTexto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3B2000',
  },

  // dica igual ao Banner.js
  dica: {
    backgroundColor: '#FFF3CD',
    borderRadius: 12,
    padding: 12,
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#F5C842',
  },
  dicaTexto: {
    fontSize: 12,
    color: '#8B6914',
    textAlign: 'center',
  },
  dicaNegrito: {
    fontWeight: 'bold',
    color: '#6B4C00',
  },

  // rodape igual ao Rodape.js
  rodape: {
    textAlign: 'center',
    fontSize: 12,
    color: '#8B6914',
    paddingBottom: 24,
    paddingTop: 4,
  },
});

export default Login;
