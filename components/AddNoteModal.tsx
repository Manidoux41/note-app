import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput } from 'react-native'


const AddNoteModal = ({
    modalVisible,
    setModalVisible,
    newNote,
    setNewNote,
    addNote,
}: {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    newNote: string;
    setNewNote: (text: string) => void;
    addNote: () => void;
}) => {
  return (
    <Modal
            visible={modalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modelOverlay}>
                <View style={styles.modelContent}>
                  <Text style={styles.modelTitle}>Add a new Note</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder="Enter your note here"
                    placeholderTextColor={'#aaa'}
                    value={newNote}
                    onChangeText={setNewNote}
                  />
                  <View style={styles.modalButtons}>
                    <TouchableOpacity
                      style={styles.cancelButton}
                      onPress={() => {
                        setModalVisible(false);}}
                    >
                      <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.saveButton}
                      onPress={addNote}
                    >
                      <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
          </Modal>
  )
}

const styles = StyleSheet.create({
    modelOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
modelContent: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
modelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#333',
  },
modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
cancelButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
  },
cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
saveButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },  
})

export default AddNoteModal