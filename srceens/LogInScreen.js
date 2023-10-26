import { View, Image, StyleSheet, useWindowDimensions, ScrollView, KeyboardAvoidingView, TextInput, Platform } from 'react-native'
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';



const LogInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })
        return unsubscribe

    }, [])


    const handleSignUp = () => {
        auth 
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log('Registered with:',user.email)
            })
            .catch(error => alert(error.message))
    }

    const handleLogIn = () => {
        auth 
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log('Logged In With:', user.email)
                navigation.replace("Home")
            })
            .catch(error => alert(error.message))
    }

    const { height } = useWindowDimensions();

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='padding'>
                <View style={Styles.container}>
                    <Image source={require('../assets/logo.png')}
                        style={[Styles.logo, { height: height * 0.3 }]}
                        resizeMode="contain"
                    />
                    <TextInput
                        placeholder='Email'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={Styles.input}
                    />
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={Styles.input}
                        secureTextEntry
                    />

                    <AppButton
                        onPress={handleLogIn}
                        title="Log In"
                    />
                    
                    <AppButton
                        onPress={handleSignUp}
                        title="Register Account"
                    />
                    </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
};

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding:30
    },
    logo: {
        width: '70%',
        maxWidth:300,
        maxheight:200,
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        height:55,
        
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 7,

    },
})

export default LogInScreen