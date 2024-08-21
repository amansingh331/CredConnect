import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeData from '../Constant/HomeDetailsData'

const Login = async (data) => {
    try {
        const storedEmail = await AsyncStorage.getItem('Email');
        const storedPassword = await AsyncStorage.getItem('pass');
        const parsedEmail = storedEmail ? storedEmail : null;
        const parsedPassword = storedPassword ? storedPassword : null;
        if (data.user === parsedEmail && data.pass === parsedPassword) {
            console.warn("Right password");
        } else {
            console.warn("Wrong password");
        }
    } catch (error) {
        console.error("Failed to retrieve data from local storage:", error);
    }
};

const Register = async (data) => {
    try {
        await AsyncStorage.setItem('FirstName', data.FName);
        await AsyncStorage.setItem('LastName', data.LName);
        await AsyncStorage.setItem('Email', data.Email);
        await AsyncStorage.setItem('MNumber', data.MobileNumber);
        await AsyncStorage.setItem('pass', data.Password);
        await AsyncStorage.setItem('role', JSON.stringify(data.Role));
        console.warn("Data saved");
    } catch (error) {
        console.error("Failed to save data in local storage:", error);
    }
};

const checkUser = async () =>{
    const storedEmail = await AsyncStorage.getItem('Email');
    const storedPassword = await AsyncStorage.getItem('pass');
    // if(storedEmail===null || storedPassword===null){
    //     console.warn("user not exist");
    //     return false;
    // }else{
    //     console.warn("user exist");
    //     return true;
    // }
    return false;
}
const getUserId = async () =>{
    const storedUserId = await AsyncStorage.getItem('userid');
    return 1;
}
const getUserData = async () =>{
    return HomeData[0];
}

export default { Login, Register, checkUser, getUserId, getUserData};