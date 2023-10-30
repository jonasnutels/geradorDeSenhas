import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import useStorage from '../../hooks/useStorage';

export function ModalPassword({ password, handleClose }) {
  const { getItem, saveItem } = useStorage();
  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);

    await saveItem('@pass', password);
    handleClose();
  }
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Text style={style.title}>Senha Gerada</Text>

        <Pressable style={style.innerPassword} onLongPress={handleCopyPassword}>
          <Text style={style.text}>{password}</Text>
        </Pressable>

        <View style={style.buttonArea}>
          <TouchableOpacity style={style.button} onPress={handleClose}>
            <Text style={style.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.button, style.buttonSave]}
            onPress={handleCopyPassword}
          >
            <Text style={style.buttonSaveText}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(24,24,24,0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#FFF',
    width: '85%',
    paddingTop: 24,
    paddingBottom: 24,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  innerPassword: {
    backgroundColor: '#0e0e0e',
    width: '90%',
    padding: 14,
    borderRadius: 8,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },

  buttonArea: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
  },

  buttonSave: {
    backgroundColor: '#392De9',
    borderRadius: 8,
  },
  buttonSaveText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  titleSenha: {
    color: '#392De9',
  },
});
