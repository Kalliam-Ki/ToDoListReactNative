import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const criarEstilosCabecalho = (cores) => StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 16,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: cores.fundoCard,
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
  },
  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: cores.textoPrimario,
    marginBottom: 8,
  },
  data: {
    fontSize: 16,
    color: cores.textoSecundario,
  },
  linhaTema: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  textoAlternar: {
    fontSize: 14,
    color: cores.textoSecundario,
  },
  botaoAlternar: {
    width: 50,
    height: 26,
    borderRadius: 13,
    backgroundColor: cores.borda,
    padding: 2,
  },
  botaoAlternarAtivo: {
    backgroundColor: cores.primaria,
  },
  indicador: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: cores.fundoCard,
    transform: [{ translateX: 0 }],
  },
  indicadorAtivo: {
    transform: [{ translateX: 24 }],
  }
});