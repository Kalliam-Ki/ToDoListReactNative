// Gerenciador dos temas claro/escuro e os fornece para os compenents

import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { temas } from '../styles/temas';

// Cria o contexto que será compartilhado
const TemaContexto = createContext({});

// Hook personalizado para facilitar o uso do tema em qualquer compenent
export const useTema = () => useContext(TemaContexto);

// Provedor que envolve toda a aplicação
export const TemaProvider = ({ children }) => {
  // Estado que indica se o tema é claro (true) ou escuro (false)
  const [temaClaro, setTemaClaro] = useState(true);
  
  // Obtém as cores com base no estado atual
  const temaAtual = temaClaro ? temas.claro : temas.escuro;

  // Quando o app iniciar ele carrega o tema salvo no celular
  useEffect(() => {
    carregarTemaSalvo();
  }, []);

  // Busca no AsyncStorage se o usuário já escolheu um tema antes
  const carregarTemaSalvo = async () => {
    try {
      const salvo = await AsyncStorage.getItem('@tema_app');
      if (salvo !== null) {
        setTemaClaro(salvo === 'claro');
      }
    } catch (erro) {
      console.log('Erro ao carregar tema:', erro);
    }
  };

  // Função que alterna entre claro e escuro e salva a escolha
  const alternarTema = async () => {
    const novoTema = !temaClaro;
    setTemaClaro(novoTema);
    try {
      await AsyncStorage.setItem('@tema_app', novoTema ? 'claro' : 'escuro');
    } catch (erro) {
      console.log('Erro ao salvar tema:', erro);
    }
  };

  // Valores que ficarão disponíveis para todos os componentes filhos
  const valor = {
    temaClaro,
    temaAtual,
    alternarTema,
    cores: temaAtual
  };

  return (
    <TemaContexto.Provider value={valor}>
      {children}
    </TemaContexto.Provider>
  );
};