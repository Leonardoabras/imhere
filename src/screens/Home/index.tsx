import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home(){

  function handleParticipantAdd(){
  }

  function handleParticipanteRemove(name: string){
    console.log(`Você removeu um participante ${name}`)
  }
  return(
     <View style={styles.container}>
      <Text style={styles.eventName}> Nome do Evento </Text>

      <Text style={styles.eventDate}> Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
      <TextInput style={styles.input}
      placeholder="Nome do Participante"
      placeholderTextColor="#6B6B6B"
      />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
      </View>

      <Participant name="Leonardo Abras" onRemove={() => handleParticipanteRemove("Leonardo")}/>
     </View>
  )
}