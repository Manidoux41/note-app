import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const HomeScreen = () => {

  const router = useRouter();

  return (
    <View
      style={styles.container}
    >
      <Image source={require("@/assets/images/pdn-image.png")} style={styles.imagepdn} />
      <Text style={styles.title}>Welcome to NoteApp</Text>
      <Text style={styles.subtitle}>Capture your through anytime, anywhere</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/notes")}
       >
        <Text style={styles.btnTxt}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
  imagepdn: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  title:{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
  },
  btnTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
