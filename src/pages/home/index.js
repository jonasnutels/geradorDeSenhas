import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordTitle, setPasswordTitle] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function gerarSenha() {
    let senha = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n));
    }
    const senhaCompleta = passwordTitle + '-' + senha;
    setPasswordValue(senhaCompleta);
    setModalVisible(true);
  }
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>{size} Caracteres</Text>
      <TextInput
        style={styles.titleSenha}
        placeholder="Título da Senha"
        value={passwordTitle}
        onChangeText={(text) => setPasswordTitle(text)}
      />
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="red"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword
          password={passwordValue}
          handleClose={() => setModalVisible(false)}
        ></ModalPassword>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
  },

  button: {
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleSenha: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});
