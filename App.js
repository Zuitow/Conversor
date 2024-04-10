import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React, { useState } from "react";

// Importação Estilos
import { estilos } from "./src/style/estilos";

// Importaçõ de Componentes Partials Utilizando Props
import { Textos } from "./src/components/partials/Text";
import InputsTexto from "./src/components/partials/TextInputs";
import Pressavel from "./src/components/partials/Pressable";

export default function App() {

  // Variáveis usando o useState para definir valores Graus e result(sendo result para imprimir o resultado)
  const [graus, setGraus] = useState("");

  const [result, setResult] = useState("");


  // Calculo da conversão dos Graus para celsius, além da verificação se há realmente um número, para não poder ser zerado.
  const calculoConversao = () => {
    console.log(typeof graus);
    if (graus != "") {
      const fahrenheit = (graus * 9) / 5 + 32;
      setResult(fahrenheit);
    } else {
      alert("O valor não poder ser zerado")
    }
  };


 // Função para limpar os campos...
  const limpar = () => {
    setGraus("");
    setResult("");
  };
  return (
    <View style={estilos.container}>
      <Textos title="Faça a sua conversão aqui!" />
      <InputsTexto
        onChangeText={setGraus}
        value={graus}
        title="Digite aqui"
        styles={estilos.inputs}
      />
      <Pressavel onPress={calculoConversao}>
        <Textos title="Teste" styles={estilos.Text}/>
      </Pressavel>
      <Textos styles={estilos.Text} title={result} />
      <Pressavel onPress={limpar}>
        <Textos title="Limpar" styles={estilos.Text} />
      </Pressavel>

      <StatusBar style="auto" />
    </View>
  );
}
