import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather"; // Importe o ícone de sua escolha

interface DropdownInputProps {
  itens: string[]; // Array de cidades
  onSelectItem: (item: string) => void; // Função de callback para selecionar a cidade
  itemName: string;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  itens,
  onSelectItem,
  itemName,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [search, setSearch] = useState("");
  const [filteredItens, setFilteredItens] = useState(itens);

  useEffect(() => {
    search === ""
      ? setFilteredItens(itens)
      : setFilteredItens(
          itens.filter(item =>
            item.toLowerCase().includes(search.toLowerCase())
          )
        );
  }, [search]);

  const handleSelectCity = (item: string) => {
    setSelectedItem(item);
    setModalVisible(false);
    onSelectItem(item);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setModalVisible(true)}
      >
        {selectedItem === "" ? (
          <Text style={styles.placeholder}>{itemName}</Text>
        ) : (
          <Text style={styles.dropdownInput}>{selectedItem}</Text>
        )}

        <Text style={styles.text}>Opcional</Text>
        <Icon
          name='chevron-down'
          size={20}
          color='#230B34'
        />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              <TextInput
                placeholder='Pesquisar'
                value={search}
                onChangeText={text => setSearch(text)}
              />
              {filteredItens.map(item => (
                <TouchableOpacity
                  key={item}
                  style={styles.itemItem}
                  onPress={() => {
                    handleSelectCity(item);
                  }}
                >
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: "100%",
    height: 45,
    marginTop: 10,
    borderRadius: 100,
    paddingLeft: 18,
    paddingRight: 18,
    borderColor: "#CCCCCC",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
  },
  text: {
    marginRight: 10,
    fontFamily: "Poppins_400Regular_Italic",
    lineHeight: 16.5,
    color: "#979797",
    fontSize: 11,
  },
  placeholder: {
    flex: 1,
    fontSize: 16,
    color: "#939393",
  },
  dropdownInput: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
    minWidth: 200,
    maxHeight: 200,
  },
  itemItem: {
    padding: 8,
  },
  itemText: {
    fontSize: 16,
    color: "#000",
  },
});

export default DropdownInput;
