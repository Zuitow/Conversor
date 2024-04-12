import { Text } from 'react-native';

// Componente do Text... Com Props incluido
export function Textos({ title, styles}) {
    return <Text style={styles}>{title}</Text>
}