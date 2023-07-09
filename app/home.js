import { Image, StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import HomeFeed from "../components/HomFeed";


function LogoTitle() {
  return (
    <View style={styles.stackHeader}>
      <Image
        style={styles.iconImage}
        source={require('../asset/logo.png')}

      />
      <Text style={styles.stackHeaderTitle}>nLighten</Text>
    </View>
  );
}

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen

        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: 'Home',
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: 'maroon', opacity: 0.5, height: 40 },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
      {/* <Text style={styles.subtitle}>description of home </Text> */}
      <HomeFeed />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
    color: "#38434D",
  },
  iconImage: {
    width: 25,
    height: 25,
  },

  stackHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  stackHeaderTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    padding: 20
  },
});