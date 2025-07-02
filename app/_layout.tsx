import { Stack } from "expo-router";

const RootLayout = () =>{
  return <Stack 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      contentStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 16,
      },
    }}
  >
    <Stack.Screen 
      name="index" 
      options={{ title: 'Home' }} 
    />
    <Stack.Screen 
      name="notes" 
      options={{ headerTitle: 'Notes' }} 
    />
  </Stack>;
}

export default RootLayout;
