const initState = {
  username: "van dung",
  email: "dung.nv.soict@gmail.com",
  avatar: "",
  role: "",
  isLogin: false,
};

const UserReducers = (state = initState, action) => {
  switch (action.type) {
    case "SET_INFO":
      return {
        ...state,
        ...action.payload,
        isLogin: true,
      };
    case "RESET_USER":
      return {
        ...initState,
      };
    default:
      return {
        ...initState,
      };
  }
};

export default UserReducers;
