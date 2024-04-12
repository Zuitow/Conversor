import { TextInput } from 'react-native';

// Componente do TextInput... Com Props incluido
export default function InputsTexto({title, styles, onChangeText, value}) {
    return <TextInput keyboardType='numeric' value={value} onChangeText={onChangeText} placeholder={title} style={styles}/>
}