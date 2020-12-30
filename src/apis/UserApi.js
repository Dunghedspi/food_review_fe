import axiosCustom from "Plugins/axios";
import * as toast from "utils/toastify";
import axiosSendFile from "Plugins/axios/axiosSendFile";
export const UserApi = {
  SignIn: async (payload) => {
    let userInfo = null;
    const response = await axiosCustom
      .callApi("POST", "/api/auth/login", payload)
      .catch((error) => console.error(error));
    if (response && response.status === 200) {
      userInfo = response.data;
      toast.toastifySuccess("Login successful");
    } else {
      toast.toastifyError("Login unsuccessful");
    }
    return userInfo;
  },
  SignUp: async (payload) => {
    console.log(payload);
    let isSignUp = false;
    const response = await axiosCustom
      .callApi("POST", "/api/auth/register", payload)
      .catch((error) => console.error(error));
    if (response && response.status === 200) {
      isSignUp = true;
    }
    return isSignUp;
  },
  EditInfo: async (payload) => {
    let userInfo = null;
    const response = await axiosCustom
      .callApi("POST", "/api/user/edit", payload)
      .catch((error) => console.error(error));
    if (response && response.status === 200) {
      userInfo = response.data;
      toast.toastifySuccess("Successful");
    } else {
      toast.toastifyError("unsuccessful");
    }
    return userInfo;
  },
  EditAvatar: async (payload) => {
    let avatarUrl = null;
    const response = await axiosSendFile(
      "/api/user/editAvatarUser",
      payload
    ).catch((error) => console.error(error));
    if (response && response.status === 200) {
      console.log(response);
      avatarUrl = response.data;
      toast.toastifySuccess("Successful");
    } else {
      toast.toastifyError("unsuccessful");
    }
    return avatarUrl;
  },
  getUserInfo: async () => {
    let data = null;
    const response = await axiosCustom
      .callApi("GET", "/api/user/getUser")
      .catch((error) => console.log(error));
    if (response && response.status === 200) {
      data = response.data;
    }
    return data;
  },
  Logout: async () => {
    let isLogout = false;
    const response = await axiosCustom
      .callApi("GET", "/api/auth/logout")
      .catch((error) => console.log(error));
    if (response && response.status === 200) {
      isLogout = true;
    }
    return isLogout;
  },
};
