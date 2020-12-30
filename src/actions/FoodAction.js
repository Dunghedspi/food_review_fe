import { FoodApi } from "apis/FoodApi";

export const getList = () => {
  return async (dispatch) => {
    const response = await FoodApi.GetList();
    if (response && response.status === 200) {
      dispatch({
        type: "SET_FOOD",
        payload: response.data,
      });
    }
  };
};
