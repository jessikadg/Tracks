import React, {useState, useContext} from 'react';
import { StyleSheet, } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email,setEmail] = useState('');  
  const [password, setPassword] = useState('');

  return (
    <> 
        <Spacer>
        <Text style={styles.header}>{headerText}</Text>
        </Spacer>
        
        <Input 
            label="Email" 
            value={email} 
            onChangeText={(newEmail) => setEmail(newEmail)} 
            autoCapitalize="none"
            autoCorrect={false}    
        />
        <Spacer />
        
        <Input 
            secureTextEntry={true}
            label="Password" 
            value={password} 
            onChangeText={(newPassword)=>setPassword(newPassword)} 
            autoCapitalize="none"
            autoCorrect={false}
        />
        
        <Text style={styles.errorMessage} >{errorMessage}</Text>
        <Spacer>
         <Button 
            title={submitButtonText} 
            style={styles.Button} 
            onPress={()=> onSubmit({ email, password })}  
        />
        </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
   errorMessage: {
        fontSize: 16,
        color: 'red'
    },
    header: {
        textAlign:'center',
        fontWeight:'200',
        fontSize: 30,
        marginVertical: 20
    },
})

export default AuthForm;
