import * as React from 'react';
import { View, Text } from 'react-native';
import { InputCadastroUsuario } from './components';

export interface CadastroUsuarioScreenProps {
}

export function CadastroUsuarioScreen (props: CadastroUsuarioScreenProps) {
    return (
      <View>
         <InputCadastroUsuario/>
      </View>
    );
}
