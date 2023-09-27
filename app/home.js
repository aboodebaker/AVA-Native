import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";



const Home = () => {
  const router = useRouter()
  

  return (
    <SafeAreaView style={{ flex: 1, }}>
       <Stack.Screen
        options={{
          headerBackVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      /> 

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>Hello</Text>
        </View>
        <TouchableOpacity onPress={() => {router.push('/second')}}>
          <Text>Page 2</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;