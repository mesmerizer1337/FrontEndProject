import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function SettingsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <View style={styles.item}>
                <Text>Dark Mode</Text>
            </View>

            <View style={styles.item}>
                <Text>Notifications</Text>
            </View>

            <View style={styles.item}>
                <Text>Privacy</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f7fb' },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
});