import {React, useState} from 'react';
import { View, Text , StyleSheet, TextInput, TouchableOpacity , Image} from 'react-native';


const LoginScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        navigation.navigate('HomeScreen', {name, email})
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.Jobizz}>Jobizz</Text>
                <Text style={styles.welcome}>Welcome Back 👋</Text>
                <Text style={styles.apply}>let's log in, Apply to jobs</Text>
                <View>
                    <View>
                        <TextInput style={styles.nameInput}
                        placeholder='Name' 
                        value={name}
                        onChangeText={setName}
                        />
                    </View>
                    <View>
                        <TextInput style={styles.mailInput}
                        placeholder='Email' 
                        value={email}
                        onChangeText={setEmail}
                        />
                    </View>

                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.continueSection}>
                <View style={styles.horizontalLine}/>
                <Text>Or continue with</Text>
                <View style={styles.horizontalLine}/>
            </View>

            <View style={styles.signinLogos}>
                <Image source={require('../assets/apple.png')} style={styles.logo} />
                <Image source={require('../assets/google.png')} style={styles.logo} />
                <Image source={require('../assets/facebook.png')} style={styles.logo} />
            </View>

            <View style={styles.signUp}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingTop: 89,
        paddingHorizontal: 30
    },

    Jobizz:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#356899',
        marginTop: 20,
        marginBottom: 20
    },

    welcome:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0D0D26',
        marginBottom: 10,
    },

    apply:{
        fontSize: 10,
        fontWeight: 'ultralight',
        color: '#000000',
        marginBottom: 20
    },
    nameInput: {
        height: 52,
        borderColor: '#000000',
        borderWidth: 0.5,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#ffff'
    },
    mailInput: {
        height: 52,
        width:327,
        borderColor: '#000000',
        borderWidth: 0.5,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#ffff'
    },
    button: {
        backgroundColor: '#356899',
        height: 52,
        width: 327,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonText: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    continueSection: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    horizontalLine: {
        width:110,
        height: 0.5,
        backgroundColor: '#000000',
        marginVertical: 10,
        opacity: 0.5,
        marginHorizontal: 10,
    },
    signinLogos: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
        marginTop: 20,
        marginBottom: 20,
    },

    logo: {
        width: 30,
        height: 30,
        marginHorizontal: 20,
    },

    signUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#356899',
        fontWeight: 'bold',


    },
})

export default LoginScreen;