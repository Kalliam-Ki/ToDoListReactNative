import { StyleSheet } from 'react-native';

export const criarEstilosItem = (cores) => StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.fundoCard,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  checkbox: {
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: '500',
    color: cores.textoPrimario,
    marginBottom: 4,
  },
  nomeConcluido: {
    color: cores.textoSecundario,
    textDecorationLine: 'none',
    fontWeight: 'normal',
  },
  emojiCategoriaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  emoji: {
    fontSize: 14,
    marginRight: 6,
    color: cores.textoSecundario,
  },
  categoria: {
    fontSize: 12,
    color: cores.textoSecundario,
  },
  botaoExcluir: {
    padding: 8,
    marginLeft: 8,
  },
});