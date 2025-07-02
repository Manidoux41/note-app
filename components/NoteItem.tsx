import { StyleSheet, Text, View } from "react-native"

interface Note {
  text: string;
}

interface NoteItemProps {
  note: Note;
}

const NoteItem = ({ note }: NoteItemProps) => {
  return (
    <View style={styles.noteItem}>
        <Text style={styles.noteText}>{note.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    noteItem: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
noteText: {
    fontSize: 16,
    color: '#333',
  },

})

export default NoteItem