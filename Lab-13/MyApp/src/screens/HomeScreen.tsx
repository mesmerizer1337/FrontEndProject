import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

export default function HomeScreen({ navigation }: any) {
    const userName = 'John Doe';

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.title}>Welcome back 👋</Text>
                <Text style={styles.name}>{userName}</Text>

                <View style={styles.cardContainer}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Profile', { userId: '123' })}
                    >
                        <Text style={styles.cardNumber}>42</Text>
                        <Text style={styles.cardText}>Posts</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Profile', { userId: '123' })}
                    >
                        <Text style={styles.cardNumber}>1.2K</Text>
                        <Text style={styles.cardText}>Followers</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.primaryBtn}
                    onPress={() => navigation.navigate('Profile', { userId: '123' })}
                >
                    <Text style={styles.btnText}>View Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Text style={styles.secondaryText}>Settings</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f7fb' },
    content: { padding: 20 },

    title: {
        fontSize: 18,
        color: '#777',
    },

    name: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
    },

    cardContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 30,
    },

    card: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        elevation: 3,
    },

    cardNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0066cc',
    },

    cardText: {
        color: '#777',
        marginTop: 5,
    },

    primaryBtn: {
        backgroundColor: '#0066cc',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },

    btnText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    secondaryBtn: {
        borderWidth: 1,
        borderColor: '#0066cc',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    secondaryText: {
        color: '#0066cc',
        fontWeight: 'bold',
    },
});