# Aplicativo Gerenciador de Senhas

![Captura de Tela do Aplicativo](./screenshot/page.jpg)

Este é um simples aplicativo React Native que permite aos usuários gerar e gerenciar senhas. Ele consiste em duas telas principais:

1. **Tela Inicial (Home)**: Esta tela fornece aos usuários a capacidade de gerar senhas aleatórias de comprimentos variados. Os usuários podem especificar um título para cada senha, e a senha gerada é exibida em um modal. O comprimento da senha pode ser ajustado usando um controle deslizante.

2. **Tela de Senhas (Passwords)**: Nesta tela, os usuários podem visualizar uma lista de senhas que geraram. Eles também podem excluir senhas que não precisam mais.

## Recursos

- Geração de senhas com comprimento ajustável e títulos personalizados.
- Gerenciamento de senhas, incluindo exclusão de senhas.
- Interface simples e amigável para o usuário.
- Armazenamento seguro usando o gancho personalizado `useStorage`.

## Uso

Para usar este aplicativo, você pode seguir estas etapas:

1. Clone este repositório em sua máquina local.
2. Instale as dependências necessárias executando `npm install`.
3. Execute o aplicativo em um emulador ou dispositivo usando `npm run android` ou `npm run ios`.

Sinta-se à vontade para contribuir, relatar problemas ou sugerir melhorias para este projeto. Recebemos feedback e colaborações com prazer.

## Dependências

- React Native
- @react-native-community/slider
- @react-navigation/native
- react-native-safe-area-context
