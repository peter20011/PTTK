import { Stack } from "expo-router"



export default function Layout(){
    return (
        <Stack>
            <Stack.Screen name="home" options={{headerShown:false}} /> 
            <Stack.Screen name="index" options={{headerShown:false}} /> 
            <Stack.Screen name="regulamin" options={{headerShown:true, title: "REGULAMIN PPT", headerTitleAlign:'center',headerTitleStyle: {fontWeight:'bold'}}} /> 
            <Stack.Screen name="nauka" options={{headerShown:true, title:'NAUKA', headerTitleAlign:'center', headerTitleStyle: {fontWeight:'bold'}}} />
            <Stack.Screen name="postac-dnia" options={{headerShown:true,title:'POSTAĆ DNIA', headerTitleAlign:'center', headerTitleStyle:{fontWeight:'bold'}}} />
            <Stack.Screen name="trasa" options={{headerShown:true, title:'TRASA' ,headerTitleAlign:'center', headerTitleStyle:{fontWeight:'bold'}}} />
            <Stack.Screen name="spiewnik" options={{headerShown:true,title:'ŚPIEWNIK' ,headerTitleAlign:'center', headerTitleStyle:{fontWeight:'bold'}}} />
            <Stack.Screen name="modlitwa-wieczorna" options={{headerShown:true, title:'MODLITWA WIECZORNA' , headerTitleAlign:'center',headerTitleStyle:{fontWeight:'bold'}}} />
            <Stack.Screen name="intencje_dnia" options={{headerShown:true, title:'INTENCJA DNIA' ,headerTitleAlign:'center',headerTitleStyle:{fontWeight:'bold'}}} />
            <Stack.Screen name="litanie" options={{headerShown:true, title:'LITANIE I KRAKOWIOKI' ,headerTitleAlign:'center',headerTitleStyle:{fontWeight:'bold'}}} />
            <Stack.Screen name="miejsca-noclegowe" options={{headerShown:true, title:'MIEJSCA NOCLEGOWE' ,headerTitleAlign:'center',headerTitleStyle:{fontWeight:'bold'}}} />
            <Stack.Screen name="do-pobrania" options={{headerShown:true, title:'DO POBRANIA' ,headerTitleAlign:'center',headerTitleStyle:{fontWeight:'bold'}}} />
            <Stack.Screen name="ramowka" options={{headerShown:true, title:'RAMÓWKA RDN',headerTitleAlign:'center',headerTitleStyle:{fontWeight:'bold'}}} />
            <Stack.Screen name="kontakty" options={{headerShown:true, title:'KONTAKTY',headerTitleAlign:'center',headerTitleStyle:{fontWeight:'bold'}}} /> 
            <Stack.Screen name="strona" options={{headerShown:false}} /> 
            <Stack.Screen name="facebook" options={{headerShown:false}} /> 
            <Stack.Screen name="instagram" options={{headerShown:false}} /> 
            <Stack.Screen name="youtube" options={{headerShown:false}} /> 
        </Stack>
    )
}