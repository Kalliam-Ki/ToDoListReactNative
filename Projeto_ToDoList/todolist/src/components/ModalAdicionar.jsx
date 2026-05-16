// Modal do maiszin

import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native';
import { useTema } from '../context/TemaContexto';
import { criarEstilosModal } from '../styles/modalAdicionarStyles';
import EmojiPicker from 'react-native-emoji-chooser';

const ModalAdicionar = ({ visivel, aoFechar, aoAdicionar }) => {
  const { cores } = useTema();
  const estilos = criarEstilosModal(cores);

  // Estados internos do modal
  const [textoTarefa, setTextoTarefa] = useState('');
  const [categoria, setCategoria] = useState('');
  const [emojiSelecionado, setEmojiSelecionado] = useState('📝');
  const [pickerAberto, setPickerAberto] = useState(false);

  // Função para fechar o modal e limpar tudo
  const fecharModal = () => {
    Keyboard.dismiss();        // Fecha o teclado se estiver aberto
    setPickerAberto(false);    // Fecha o seletor de emoji
    setTextoTarefa('');
    setCategoria('');
    setEmojiSelecionado('📝'); // Reseta emoji
    aoFechar();                // Avisa o componente pai que fechou
  };

  // Função para criar uma nova tarefa
  const handleAdicionar = () => {
    if (textoTarefa.trim() === '') return; // Não permite tarefa vazia

    const novaTarefa = {
      id: Date.now(),            // ID único baseado no timestamp
      texto: textoTarefa.trim(),
      categoria: categoria.trim() || 'Sem categoria',
      emoji: emojiSelecionado,
      concluida: false,          // Tarefa nova sempre começa como pendente
    };

    aoAdicionar(novaTarefa);     // Envia para o componente pai
    fecharModal();               // Fecha o modal e limpa os campos
  };

  return (
    <Modal
      visible={visivel}
      animationType="slide"      // Animação de deslizar de baixo para cima
      transparent={true}        // Fundo semi-transparente
      onRequestClose={fecharModal}  // Botão voltar do Android
    >
      {/* Overlay que cobre toda a tela */}
      <Pressable 
        style={estilos.overlay} 
        onPress={fecharModal}    // Tocar fora do modal fecha
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1, justifyContent: 'flex-end' }}
        >
          {/* Conteúdo do modal - impede propagação do clique */}
          <Pressable 
            style={estilos.content}
            onPress={e => e.stopPropagation()}
          >
            <Text style={estilos.titulo}>Nova Tarefa</Text>

            <TextInput
              style={estilos.input}
              placeholder="Nome da tarefa"
              placeholderTextColor={cores.textoSecundario}
              value={textoTarefa}
              onChangeText={setTextoTarefa}
            />

            <View style={estilos.linhaEmojiCategoria}>
              {/* Botão para abrir/fechar seletor de emoji */}
              <View style={estilos.areaEmoji}>
                <Pressable 
                  style={estilos.botaoEmoji}
                  onPress={() => setPickerAberto(!pickerAberto)}
                >
                  <Text style={estilos.textoEmoji}>{emojiSelecionado}</Text>
                </Pressable>
              </View>

              {/* Campo categoria */}
              <View style={estilos.areaCategoria}>
                <TextInput
                  style={estilos.input}
                  placeholder="Categoria (ex: Trabalho, Estudo)"
                  placeholderTextColor={cores.textoSecundario}
                  value={categoria}
                  onChangeText={setCategoria}
                />
              </View>
            </View>

            {/* Seletor de emoji - só aparece quando o usuário clica no botão */}
            {pickerAberto && (
              <View style={estilos.pickerContainer}>
                <EmojiPicker
                  onSelect={(emoji) => {
                    setEmojiSelecionado(emoji);
                    setPickerAberto(false);  // Fecha automaticamente ao selecionar
                  }}
                  mode={cores.textoPrimario === '#1A1A1A' ? 'light' : 'dark'}
                  
                  columnCount={8}
                />
              </View>
            )}

            {/* Botão Criar - sempre visível mesmo com picker aberto */}
            <Pressable style={estilos.botaoCriar} onPress={handleAdicionar}>
              <Text style={estilos.textoBotaoCriar}>Criar Tarefa</Text>
            </Pressable>
          </Pressable>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
};

export default ModalAdicionar;