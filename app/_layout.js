import { Stack } from "expo-router";


export default function Layout(){
    return (
        <Stack>
            <Stack.Screen name="home" options={{headerShown:false}} />
            <Stack.Screen name="index" options={{headerShown:false}} />
            <Stack.Screen name="regulamin" options={{headerShown:true}} />
            <Stack.Screen name="nauka" options={{headerShown:true}} />
            <Stack.Screen name="postac-dnia" options={{headerShown:true}} />
            <Stack.Screen name="trasa" options={{headerShown:true}} />
            <Stack.Screen name="spiewnik" options={{headerShown:true}} />
            <Stack.Screen name="modlitwa-wieczorna" options={{headerShown:true}} />
            <Stack.Screen name="litanie" options={{headerShown:true}} />
            <Stack.Screen name="miejsca-noclegowe" options={{headerShown:true}} />
            <Stack.Screen name="do-pobrania" options={{headerShown:true}} />
            <Stack.Screen name="ramowka" options={{headerShown:true}} />
            <Stack.Screen name="kontakty" options={{headerShown:true}} />
            <Stack.Screen name="strona" options={{headerShown:true}} />
            <Stack.Screen name="facebook" options={{headerShown:true}} />
            <Stack.Screen name="instagram" options={{headerShown:true}} />
            <Stack.Screen name="youtube" options={{headerShown:true}} />
        </Stack>
    )
}