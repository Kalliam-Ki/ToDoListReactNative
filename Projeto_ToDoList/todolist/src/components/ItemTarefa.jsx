// Exibição da tarefa com o nome, emoki escolhifo, categoria e o checkbox

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import { MaterialIcons } from '@expo/vector-icons';
import { useTema } from '../context/TemaContexto';
import { criarEstilosItem } from '../styles/itemTarefaStyles';

const ItemTarefa = ({ tarefa, aoAlternarStatus, aoExcluir }) => {
  const { cores } = useTema();
  const estilos = criarEstilosItem(cores);
  const concluida = tarefa.concluida;


  return (
    <View style={estilos.card}>
      <Checkbox
        style={estilos.checkbox}
        value={concluida}
        onValueChange={() => aoAlternarStatus(tarefa.id)}
        color={concluida ? cores.sucesso : cores.primaria}
      />
      
      <View style={estilos.info}>
        <Text style={[estilos.nome, concluida && estilos.nomeConcluido]}>
          {tarefa.texto}
        </Text>
        
        {!concluida && (
          <View style={estilos.emojiCategoriaContainer}>
            <Text style={estilos.emoji}>{tarefa.emoji}</Text>
            <Text style={estilos.categoria}>{tarefa.categoria}</Text>
          </View>
        )}
      </View>

      {/* Botão excluir */}
      <Pressable onPress={() => aoExcluir(tarefa.id)} style={estilos.botaoExcluir}>
        <MaterialIcons name="delete" size={24} color={cores.perigo} />
      </Pressable>
    </View>
  );
};

export default ItemTarefa;