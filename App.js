//App.js
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Octicons } from "@expo/vector-icons";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import DetailScreen from "./pages/DetailScreen"; 

const BottomTabNavigator = createBottomTabNavigator();
const Stack = createStackNavigator(); 

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomTabNavigator.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "lightgray",
              marginHorizontal: 16,
              borderRadius: 24,
              height: 64,
              shadowOpacity: 0,
              elevation: 1,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
                color = focused ? "black" : "lightgray";
              } else if (route.name === "Profile") {
                iconName = "person";
                color = focused ? "black" : "lightgray";
              }

              return <Octicons name={iconName} size={24} color={color} />;
            },
            headerShown: false,
          })}
        >
          <BottomTabNavigator.Screen name="Home" component={HomeScreen} />
          <BottomTabNavigator.Screen name="Profile" component={ProfileStack} />

        </BottomTabNavigator.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}