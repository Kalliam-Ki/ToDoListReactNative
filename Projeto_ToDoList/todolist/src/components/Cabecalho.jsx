// Exibição apra o titulo, a data de hoje e o botao apra alterar tema

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTema } from '../context/TemaContexto';
import { criarEstilosCabecalho } from '../styles/cabecalhoStyles';
import Estatisticas from './Estatisticas';

const Cabecalho = ({ incompletas, realizadas }) => {
  // Pega o tema atual e a função para alternar
  const { temaClaro, cores, alternarTema } = useTema();
  const estilos = criarEstilosCabecalho(cores);

  // Formata a data atual no padrão br
  const formatarData = () => {
    const meses = {
      janeiro: 'Janeiro', fevereiro: 'Fevereiro', março: 'Março',
      abril: 'Abril', maio: 'Maio', junho: 'Junho',
      julho: 'Julho', agosto: 'Agosto', setembro: 'Setembro',
      outubro: 'Outubro', novembro: 'Novembro', dezembro: 'Dezembro'
    };
    const agora = new Date();
    const dia = agora.getDate();
    const mesNomeCompleto = agora.toLocaleDateString('pt-BR', { month: 'long' }).toLowerCase();
    const mesCapitalizado = meses[mesNomeCompleto];
    const ano = agora.getFullYear();
    return `${dia} de ${mesCapitalizado}, ${ano}`;
  };

  const dataFormatada = formatarData();

  return (
    <>
      {/* Configura a barra de status */}
      <StatusBar style={temaClaro ? 'dark' : 'light'} />
      
      <View style={estilos.container}>
        <Text style={estilos.titulo}>{dataFormatada}</Text>

        <Estatisticas incompletas={incompletas} realizadas={realizadas} />
    
        <View style={estilos.linhaTema}>
          <Text style={estilos.textoAlternar}>
            {temaClaro ? 'Modo Claro' : 'Modo Escuro'}
          </Text>
          
          {/* Botão toggle (liga/desliga) */}
          <Pressable 
            onPress={alternarTema}
            style={[estilos.botaoAlternar, !temaClaro && estilos.botaoAlternarAtivo]}
          >
            <View style={[estilos.indicador, !temaClaro && estilos.indicadorAtivo]} />
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Cabecalho;