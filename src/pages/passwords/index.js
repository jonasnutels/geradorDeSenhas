import { View, Text, StyleSheet, FlatList } from 'react-native';
import useStorage from '../../hooks/useStorage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { PasswordItem } from './components/passwordItem';

export function Passwords() {
  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem('@pass');
      setListPasswords(passwords);
    }
    loadPasswords();
  }, [focused]);

  async function handleDeletePassword(item) {
    const passwords = await removeItem('@pass', item);
    setListPasswords(passwords);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem
              data={item}
              removePassword={() => handleDeletePassword(item)}
            />
          )}
          style={{ flex: 1, paddingTop: 14 }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#392de9',
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
});
