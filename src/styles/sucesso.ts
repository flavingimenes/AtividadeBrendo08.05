import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 70,
    },
    sucessoContainer: {
        width: '70%',
        padding: 20,
        marginBottom: '45%',
        alignItems: 'center',
    },
    textoSucesso: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtextoSucesso: {
        fontSize: 12,
        textAlign: 'center',
        color: 'gray',
    },
    buttonNovoCard: {
        backgroundColor: '#3b82f6',
        color: '#fff',
        fontSize: 16,
        paddingVertical: 15,
        paddingHorizontal: 70,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonNovoText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonWrapper: {
        width: '100%',
        marginTop: 10,
        color: '#fff',
    },
    buttonText: {
        color: '#3b82f6',
        fontSize: 16,
        borderRadius: 5,
        textAlign: 'center',
    },
});