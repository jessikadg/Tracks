import React, {useContext} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Context as AuthContext } from './../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';
import TrackListScreen from './TrackListScreen';

const SigninScreen = ({navigation}) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
      <View>  
        
        <NavigationEvents onWillFocus={clearErrorMessage}/>

        <AuthForm 
        headerText="Sign In on Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
        />

        <NavLink 
        text="Don't have an account yet? Create yours here"
        routeName="Signup"
        />

        <Button 
            title = "Shortcut to TrackList"
            onPress={()=>{navigation.navigate('TrackList')}}
        />

     </View> 
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};


const styles = StyleSheet.create({
    nice: {
        justifyContent: 'center',
        flex: 1,
        marginBottom:50
        
    },
});

export default SigninScreen;