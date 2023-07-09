import { Image, StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import EventsFeed from "../components/EventsFeed";

function LogoTitle() {
    return (
        <View style={styles.stackHeader}>
            <Image
                style={styles.iconImage}
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
            <Text style={styles.stackHeaderTitle}>Events</Text>
        </View>
    );
}

export default function Events() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Stack.Screen
                options={{
                    // https://reactnavigation.org/docs/headers#setting-the-header-title
                    title: 'Events',
                    // https://reactnavigation.org/docs/headers#adjusting-header-styles
                    headerStyle: { backgroundColor: '#f4511e' },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
                    headerTitle: props => <LogoTitle {...props} />,
                }}
            />
            <EventsFeed />

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
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
    iconImage: {
        width: 50,
        height: 50,
    },

    stackHeader: {
        flexDirection: "row",
        alignItems: "center",
    },

    stackHeaderTitle: {
        fontSize: 36,
        fontWeight: "bold",
        padding: 20
    },
});