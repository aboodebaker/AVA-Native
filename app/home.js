import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity } from "react-native";
import {  useRouter } from "expo-router";



const Home = () => {
  const router = useRouter()
  

  return (
    <SafeAreaView style={{ flex: 1, }}>
       

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