import { StyleSheet } from 'react-native';

export const criarEstilosModal = (cores) => StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: cores.fundoCard,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '90%',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: cores.textoPrimario,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: cores.textoPrimario,
    marginBottom: 16,
  },
  linhaEmojiCategoria: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  areaEmoji: {
    width: 72,
    marginRight: 12,
  },
  botaoEmoji: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: cores.borda,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoEmoji: {
    fontSize: 32,
  },
  areaCategoria: {
    flex: 1,
  },
  pickerContainer: {
    height: 180,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 16,
  },
  botaoCriar: {
    backgroundColor: cores.primaria,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBotaoCriar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});