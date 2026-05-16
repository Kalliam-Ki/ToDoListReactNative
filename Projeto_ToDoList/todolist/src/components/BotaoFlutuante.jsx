// Botaç do FAB

import React from 'react';
import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTema } from '../context/TemaContexto';
import { criarEstilosBotaoFlutuante } from '../styles/botaoFlutuanteStyles';

const BotaoFlutuante = ({ aoPressionar }) => {
  const { cores } = useTema();
  const estilos = criarEstilosBotaoFlutuante(cores);

  return (
    <Pressable style={estilos.fab} onPress={aoPressionar}>
      <MaterialIcons name="add" size={38} color="#fff" />
    </Pressable>
  );
};

export default BotaoFlutuante;