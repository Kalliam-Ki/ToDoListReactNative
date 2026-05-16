import { StyleSheet } from 'react-native';

export const criarEstilosEstatisticas = (cores) => StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  texto: {
    fontSize: 16,
    color: cores.textoSecundario,
  },
  numero: {
    fontSize: 16,
    color: cores.textoSecundario,
  },
});