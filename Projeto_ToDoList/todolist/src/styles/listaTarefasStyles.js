import { StyleSheet } from 'react-native';

export const criarEstilosLista = (cores) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  secao: {
    marginBottom: 24,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.textoPrimario,
    marginBottom: 12,
    paddingLeft: 4,
  },
  listaConteudo: {
    paddingBottom: 100,
  },
  vazio: {
    textAlign: 'center',
    color: cores.textoSecundario,
    paddingVertical: 32,
    fontSize: 14,
  }
});