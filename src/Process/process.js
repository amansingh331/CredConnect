import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeDetailsData from '../Constant/HomeDetailsData';
import HomeData from '../Constant/HomeData';

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

const checkUser = async () => {
    try {
        const storedEmail = await AsyncStorage.getItem('Email');
        const storedPassword = await AsyncStorage.getItem('pass');
        return storedEmail !== null && storedPassword !== null;
    } catch (error) {
        console.error("Failed to check user:", error);
        return false;
    }
};
const getUserId = async () => {
    try {
        const storedUserId = await AsyncStorage.getItem('userid');
        return storedUserId ? parseInt(storedUserId, 10) : 1;
    } catch (error) {
        console.error("Failed to get user ID:", error);
        return 1;
    }
};


const getUserData = async () => {
    try {
        return HomeDetailsData[0];
    } catch (error) {
        console.error("Failed to get user data:", error);
        return {};
    }
};

const getHomeData = async () => {
    try {
        return HomeData;
    } catch (error) {
        console.error("Failed to get home data:", error);
        return [];
    }
};

const getHomeDetailsData = async (itemId) => {
    try {
        return HomeDetailsData;
    } catch (error) {
        console.error("Failed to get home details data:", error);
        return [];
    }
};

const getProfileData = async (data) => {
    try {
        return HomeDetailsData[data-1];
    } catch (error) {
        console.error("Failed to get home details data:", error);
        return [];
    }
};

const getEditProfileData = async () => {
    const data = {userid:'121', image:'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg',first_name:'aman', last_name:'singh', position:'sde', experience:'10', currentCompany:'google', location:'patna', helpyou:'how i help other', birthday:'Thu Aug 22 2024', email:'amansingh@gmail.com', number:'9931495681', audio:'100', video:'250', chat:'20'};
    try {
        return data;
    } catch (error) {
        console.error("Failed to get home details data:", error);
        return {};
    }
}
const updateEditProfileData = async () => {
    
}

export default { Login, Register, checkUser, getUserId, getUserData, getHomeData, getHomeDetailsData, getProfileData, getEditProfileData, updateEditProfileData };
