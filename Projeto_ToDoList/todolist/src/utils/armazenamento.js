// Responsavel por salvar e carregar as tarefas no celular

import AsyncStorage from '@react-native-async-storage/async-storage';

// Chave usada para salvar as tarefas no AsyncStorage
const CHAVE_TAREFAS = '@tarefas_app';

// Salva a lista de tarefas no armazenamento local
export const salvarTarefas = async (tarefas) => {
  try {
    const json = JSON.stringify(tarefas);
    await AsyncStorage.setItem(CHAVE_TAREFAS, json);
  } catch (erro) {
    console.log('Erro ao salvar tarefas:', erro);
  }
};

// Carrega a lista de tarefas do armazenamento local
export const carregarTarefas = async () => {
  try {
    const json = await AsyncStorage.getItem(CHAVE_TAREFAS);
    return json != null ? JSON.parse(json) : [];
  } catch (erro) {
    console.log('Erro ao carregar tarefas:', erro);
    return [];
  }
};