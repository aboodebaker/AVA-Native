import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";



const Second = () => {
  const router = useRouter()
  

  return (
    <SafeAreaView style={{ flex: 1, }}>
       <Stack.Screen
        options={{
          headerBackVisible: false,
          headerTitle: "2",
          headerShown: false,
        }}
      /> 

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>Second</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Second;