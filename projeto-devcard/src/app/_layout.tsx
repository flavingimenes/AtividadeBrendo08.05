import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="cadastro" options={{ title: 'Cadastro' }} />
            <Stack.Screen name="preview" options={{ title: 'Preview' }} />
            <Stack.Screen name="sucesso" options={{ title: 'Sucesso' }} />
        </Stack>
    );
}