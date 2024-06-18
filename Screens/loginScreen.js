import {React, useState} from 'react';
import { View, Text , StyleSheet, TextInput, TouchableOpacity} from 'react-native';


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
                <View style={styles.horizontalLine}></View>
                <Text>Or continue with</Text>
                <View style={styles.horizontalLine}></View>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0D0D26',
        marginBottom: 20
    },

    apply:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20
    },
    nameInput: {
        height: 52,
        borderColor: '#000000',
        borderWidth: 1,
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
        borderWidth: 1,
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
})

export default LoginScreen;