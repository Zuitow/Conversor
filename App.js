import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
import React, { useState } from "react";

// Importação Estilos
import { estilos } from "./src/style/estilos";

// Importaçõ de Componentes Partials Utilizando Props
import { Textos } from "./src/components/partials/Text";
import InputsTexto from "./src/components/partials/TextInputs";
import Pressavel from "./src/components/partials/Pressable";
import Imagem from "./src/components/partials/Imagem";

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
      <View style={estilos.secondarycontainer}>
        <Image style={estilos.Imagem} source={require('./src/assets/images/calculadora.png')}/>
      <Textos title="Faça a sua conversão de Graus para Fahrenheit aqui!" styles={estilos.titulo} />
      <InputsTexto
        onChangeText={setGraus}
        value={graus}
        title="Digite aqui"
        styles={estilos.inputs}
      />
      <Pressavel onPress={calculoConversao} styles={estilos.botao}>
        <Textos title="Calcular" styles={estilos.Text}/>
      </Pressavel>
      <Textos styles={estilos.Text} title={result} />
      <Pressavel onPress={limpar} styles={estilos.botao}>
        <Textos title="Limpar" styles={estilos.Text} />
      </Pressavel>

      <StatusBar style="auto" />
      </View>
    </View>
  );
}
