import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ProfileScreen({ route }: any) {
    const { userId } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileBox}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>J</Text>
                </View>

                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.username}>@johndoe</Text>

                <View style={styles.stats}>
                    <Text>42 Posts</Text>
                    <Text>1.2K Followers</Text>
                    <Text>890 Following</Text>
                </View>

                <Text style={styles.info}>User ID: {userId}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f7fb' },

    profileBox: {
        alignItems: 'center',
        marginTop: 50,
    },

    avatar: {
        width: 100,
        height: 100,
        backgroundColor: '#0066cc',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatarText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
    },

    username: {
        color: '#777',
        marginBottom: 20,
    },

    stats: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 20,
    },

    info: {
        color: '#555',
    },
});