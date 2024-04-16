import { Stack } from "expo-router";

export default function Layout(){
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: '#dcdcdc'
            },
            headerTintColor: '#121212',
        }}>
            <Stack.Screen name="index" options={{title: "Sysmobile - Gestão de Locação de Veículos"}}/>
            <Stack.Screen name="login/index" options={{title: "Sysmobile - Login"}}/>
        </Stack>
    )
}