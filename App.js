import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
import React, { useState } from "react";

// Importação Estilos
import { estilos } from "./src/style/estilos";

// Importação de Componentes Partials Utilizando Props
import { Textos } from "./src/components/partials/Text";
import InputsTexto from "./src/components/partials/TextInputs";
import Pressavel from "./src/components/partials/Pressable";

export default function App() {
  // Variáveis usando o useState para definir valores Graus e result(sendo result para imprimir o resultado)
  const [graus, setGraus] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [result, setResult] = useState("");

  // Calculo da conversão dos Graus para celsius, além da verificação se há realmente um número, para não poder ser zerado.
  const calculoConversao = () => {
    console.log(typeof graus);
    if (graus != "") {
      const fahrenheit = (graus * 9) / 5 + 32;
      setResult("O Valor de "+graus+"° celsius, para fahrenheit equivale a: " + fahrenheit+"° fahrenheit");
      setGraus("");
      setMensagem("")
    } else {
      setMensagem("O valor não pode ser vazio");
      setResult("")
    }
  };

 // Código
  return (
    <View style={estilos.container}>
      <View style={estilos.secondarycontainer}>
        <Image
          style={estilos.Imagem}
          source={require("./src/assets/images/calculadora.png")}
        />
        <Textos
          title="Faça a sua conversão de Graus para Fahrenheit aqui!"
          styles={estilos.titulo}
        />
        <InputsTexto
          onChangeText={ (txt )=> {
             setGraus(txt); 
             setResult("");
            }}
          value={graus}
          title="Digite aqui"
          styles={estilos.inputs}
        />

        <Textos styles={estilos.TextResult} title={result} />
        <Textos styles={estilos.TextResult} title={mensagem} />
        <Pressavel onPress={calculoConversao} styles={estilos.botao}>
          <Textos title="Calcular" styles={estilos.Text} />
        </Pressavel>


        <StatusBar style="auto" />
      </View>
    </View>
  );
}
