import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeDetailsData from '../Constant/HomeDetailsData';
import HomeData from '../Constant/HomeData';

const ip = 'http://192.168.0.101:3001';

const Login = async (data) => {
    const checkdata = {Email:data.user, Password:data.pass, Role:data.role};
    try {
        const response = await fetch(`${ip}/userAuth/Login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkdata),
        });
        const result = await response.json();
        if (response.ok) {
            await AsyncStorage.setItem('Email', data.user);
            await AsyncStorage.setItem('Password', data.pass);
            await AsyncStorage.setItem('userid', JSON.stringify(result.data.userid));
            console.warn(result.message);
            return 1;
        } else {
            console.warn(result.message);
            return 0;
        }
    } catch (error) {
        console.error("Failed to retrieve data from local storage:", error);
    }
};

const Register = async (data) => {
    const data1 = {Fname: data.FName, Lname: data.LName, Email: data.Email, MobileNumber: data.MobileNumber, Password: data.Password, Role:data.Role, IpAddress:'121.121.1.1'};
    try {
        const response = await fetch(`${ip}/userAuth/Register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        });
        const result = await response.json();

        if (response.ok) {
            console.warn(result.message);
        } else {
            console.warn(result.message);
        }
    } catch (error) {
        console.error("Error during registration:", error);
    }
};



const checkUser = async () => {
    try {
        const storedEmail = await AsyncStorage.getItem('Email');
        const storedPassword = await AsyncStorage.getItem('Password');
        return storedEmail !== null && storedPassword !== null;
    } catch (error) {
        console.error("Failed to check user:", error);
        return false;
    }
};
const getUserId = async () => {
    try {
        const storedUserId = await AsyncStorage.getItem('userId');
        return 2; 
        return storedUserId ? parseInt(storedUserId, 10) : 1;
    } catch (error) {
        console.error("Failed to get user ID:", error);
        return 1;
    }
};


const getUserData = async (id) => {
    const data = {userid:id};
    try {
        const response = await fetch(`${ip}/userAuth/UserInfo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        if (response.ok) {
            return result;
        } else {
            return {};
        }
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

const getEditProfileData = async (id) => {
    // const data = {userid:'121', image:'https://i.pinimg.com/736x/64/ea/83/64ea839f6dfab121afcca10e486a94b7.jpg',first_name:'aman', last_name:'singh', position:'sde', experience:'10', currentCompany:'google', location:'patna', helpyou:'how i help other', birthday:'Thu Aug 22 2024', email:'amansingh@gmail.com', number:'9931495681', audio:'100', video:'250', chat:'20'};
    console.log(id);
    const data = {userid:id};
    try {
        const response = await fetch(`${ip}/userAuth/userinfo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        if (response.ok) {
            return result;
        } else {
            return {};
        }
    } catch (error) {
        console.error("Failed to get user data:", error);
        return {};
    }
}
const updateEditProfileData = async (data) => {
    try {
        const response = await fetch(`${ip}/userAuth/UpdateUserInfo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        if (result.status===1) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}
const getReviewData = async (id) => {
    const data = {userid:id};
    try {
        const response = await fetch(`${ip}/UserReview/UserReview`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (response.ok) {
            return result;
        } else {
            return [];
        }
    } catch (error) {
        return false;
    }
}

export default { Login, Register, checkUser, getUserId, getUserData, getHomeData, getHomeDetailsData, getProfileData, getEditProfileData, updateEditProfileData, getReviewData};
