import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeDetailsData from '../Constant/HomeDetailsData';

const ip = 'http://192.168.0.102:3000';
// const ip = 'https://credconnect-backend.azurewebsites.net';

const Login = async (data) => {
    const checkdata = {Email:data.user, Password:data.pass, Role:data.role};
    try {
        const response = await fetch(`${ip}/UserAuth/Login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkdata),
        });
        const result = await response.json();
        console.log(result)
        if (result.status === 1) {
            await AsyncStorage.setItem('Email', data.user);
            await AsyncStorage.setItem('Password', data.pass);
            await AsyncStorage.setItem('userid', JSON.stringify(result.data.userid));
            return 1;
        } else {
            return 0;
        }
    } catch (error) {
        console.error("Failed to retrieve data from local storage:", error);
    }
};

const Register = async (data) => {
    const data1 = {Fname: data.FName, Lname: data.LName, Email: data.Email, MobileNumber: data.MobileNumber, Password: data.Password, Role:data.Role, IpAddress:'121.121.1.1'};
    try {
        const response = await fetch(`${ip}/UserAuth/Register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        });
        const result = await response.json();
        return result.status;
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
        return false;
    }
};
const getUserId = async () => {
    try {
        const storedUserId = await AsyncStorage.getItem('userid');
        const t = storedUserId ? parseInt(storedUserId, 10) : 0;
        return t;
    } catch (error) {
        return 1;
    }
};


const getUserData = async (id) => {
    const data = {userid:id};
    try {
        const response = await fetch(`${ip}/UserAuth/UserInfo`, {
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
            return {};
        }
    } catch (error) {
        console.error("Failed to get user data:", error);
        return {};
    }
};

const getHomeData = async () => {
    try {
        const response = await fetch(`${ip}/Home/Home`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching home data:", error);
        return [];
    }
};

const getHomeDetailsData = async (itemId) => {
    const data = {domainid:itemId};
    try {
        const response = await fetch(`${ip}/Home/HomeDetailData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching home data:", error);
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
    const data = {userid:id};
    try {
        const response = await fetch(`${ip}/UserAuth/userinfo`, {
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
            return {};
        }
    } catch (error) {
        console.error("Failed to get user data:", error);
        return {};
    }
}
const updateEditProfileData = async (data) => {
    try {
        const response = await fetch(`${ip}/UserAuth/UpdateUserInfo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
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

const getEditSocialData = async (id) => {
    const data = {userid:id};
    try {
        const response = await fetch(`${ip}/UserAuth/SocialLink`, {
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
            return {};
        }
    } catch (error) {
        console.error("Failed to get user data:", error);
        return {};
    }
}

const updateEditSocialData = async (data) => {
    try {
        const response = await fetch(`${ip}/UserAuth/UpdateSocialLink`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result.status===1) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

export default { Login, Register, checkUser, getUserId, getUserData, getHomeData, getHomeDetailsData, getProfileData, getEditProfileData, updateEditProfileData, getReviewData, getEditSocialData, updateEditSocialData};
