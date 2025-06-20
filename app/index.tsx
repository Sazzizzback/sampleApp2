import {View,Text,StyleSheet, Pressable, TextInput} from 'react-native'
import {ThemedView} from '@/components/ThemedView'
import {ThemedText} from '@/components/ThemedText'
import {useState, useEffect} from 'react'
//import {Link} from 'expo-router'
export default function SignUp(props:any) {
    const [ email, setEmail ] = useState<string>('')
    const [ Password, setPassword ] = useState<string>('')
    // email and password validity 
    const [ validEmail, setValidEmail ] = useState<boolean>(false)
    const [ validPassword, setValidPassword] = useState<boolean>(false)

    useEffect( () => {
        if (email.indexOf('@') > 0 ) {
            //console.log('valid email')
            setValidEmail( true )
        }
        else {
            //console.log('invalid email')
            setValidEmail ( false )
        }
    }, [email] )

    useEffect( () => {
        if( Password.length >= 8) {
            //valid password 
            setValidPassword (true)
        }
        else {
            //invalid password
            setValidPassword (false)
        }
    }, [Password])

    return(
        <ThemedView style = {styles.container}>
            <View style = { styles.form}>
                <Text style={styles.title}>Sign Up</Text>
                <ThemedText>Email</ThemedText>
                <TextInput 
                    style = {styles.input} 
                    placeholder ='you@example.com'
                    onChangeText={ (val) => setEmail(val)}
                    value={email}
                />
                <ThemedText>Password</ThemedText>
                <TextInput 
                    style = {styles.input} 
                    placeholder ='minimum 8 characters'
                    secureTextEntry = {true}
                    value = {Password}
                    onChangeText={ (val) => setPassword} 
                />
                <Pressable style = { (validEmail && validPassword) ? styles.button: styles.buttondisabled} 
                    disabled = { (validEmail && validPassword ) ? false: true}
                >
                    <ThemedText style = {styles.buttonText}>Sign up</ThemedText>
                </Pressable>
            </View>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    form: {
    marginHorizontal: 50,
    padding: 15,
    marginTop: 100,
    },
    input: {
        backgroundColor: "#dfe7f5",
        padding: 5,
        fontSize: 16,
        marginBottom: 15,

    },

    title: {
        fontSize: 30,
        color: "green",
        textAlign:"center",
    },
    container: {
        flex: 1,
    
    },
    button: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#dfe7f5",
        padding: 5,
        borderRadius: 5,

    },
    buttondisabled: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#7e84",
        padding: 5,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: "center",
    },
})