import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import NoteList from '@/components/NoteList';
import AddNoteModal from '@/components/AddNoteModal';

const NoteScreen = () => {

    const [notes, setNotes] = useState<{id: string, text: string}[]>([
        {id: '1', text: 'First note' },
        {id: '2', text: 'Second note' },
        {id: '3', text: 'Third note' },
        {id: '4', text: 'Fourth note' },
        {id: '5', text: 'Fifth note' },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');

    //add a new note
    const addNote = () => {
      if (newNote.trim() === '') return; // Prevent adding empty notes

      setNotes((prevNotes) => [
        ...prevNotes,
        { id: Date.now.toString(), text: newNote },
      ]);
      setNewNote(''); // Clear the input field
      setModalVisible(false); // Close the modal
    }

  return (
    <View style={styles.container}>
      {/* FlatList to render notes */}
      <NoteList notes={notes} />

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+ Add note</Text>
      </TouchableOpacity>

      {/* Modal for adding a new note */}
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})