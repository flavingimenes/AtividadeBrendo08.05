import { Stack } from 'expo-router';
import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function Layout() {
    const router = useRouter();

    return (
        <Stack
            screenOptions={{
                headerRight: () => (
                    <TouchableOpacity onPress={() => router.push('/sobre')} style={{ marginRight: 15 }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>Sobre</Text>
                    </TouchableOpacity>
                ),
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="cadastro" options={{ title: 'Cadastro' }} />
            <Stack.Screen name="preview" options={{ title: 'Preview' }} />
            <Stack.Screen name="sucesso" options={{ title: 'Sucesso' }} />
            <Stack.Screen name="sobre" options={{ title: 'Sobre' }} />
        </Stack>
    );
}