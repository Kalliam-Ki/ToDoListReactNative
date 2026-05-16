// Rendenização das listas pendentes e concluidas

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTema } from '../context/TemaContexto';
import { criarEstilosLista } from '../styles/listaTarefasStyles';
import ItemTarefa from './ItemTarefa';

const ListaTarefas = ({ tarefas, aoAlternarStatus, aoExcluir }) => {
  const { cores } = useTema();
  const estilos = criarEstilosLista(cores);

  // Separa as tarefas em pendentes (concluida = false) e concluídas (concluida = true)
  const tarefasPendentes = tarefas.filter(t => !t.concluida);
  const tarefasConcluidas = tarefas.filter(t => t.concluida);

  return (
    <ScrollView 
      style={estilos.container}
      contentContainerStyle={estilos.listaConteudo}
      showsVerticalScrollIndicator={false}
    >
      {/* Seção de tarefas pendentes */}
      <View style={estilos.secao}>
        <Text style={estilos.tituloSecao}>Incompletas</Text>
        {tarefasPendentes.length === 0 && (
          <Text style={estilos.vazio}>Nenhuma tarefa incompleta</Text>
        )}
        {tarefasPendentes.map(tarefa => (
          <ItemTarefa 
            key={tarefa.id}
            tarefa={tarefa}
            aoAlternarStatus={aoAlternarStatus}
            aoExcluir={aoExcluir}
          />
        ))}
      </View>

      {/* Seção de tarefas concluídas */}
      <View style={estilos.secao}>
        <Text style={estilos.tituloSecao}>Realizadas</Text>
        {tarefasConcluidas.length === 0 && (
          <Text style={estilos.vazio}>Nenhuma tarefa realizada</Text>
        )}
        {tarefasConcluidas.map(tarefa => (
          <ItemTarefa 
            key={tarefa.id}
            tarefa={tarefa}
            aoAlternarStatus={aoAlternarStatus}
            aoExcluir={aoExcluir}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ListaTarefas;