import React from 'react';
import { View, Text } from 'react-native';
import { useTema } from '../context/TemaContexto';
import { criarEstilosEstatisticas } from '../styles/estatisticasStyles';

const Estatisticas = ({ incompletas, realizadas }) => {
  const { cores } = useTema();
  const estilos = criarEstilosEstatisticas(cores);

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>
        <Text style={estilos.numero}>{incompletas}</Text> Incompletas |{' '}
        <Text style={estilos.numero}>{realizadas}</Text> Realizadas
      </Text>
    </View>
  );
};
export default Estatisticas;