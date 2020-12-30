import axiosCustom from "../Plugins/axios/axiostest";
export const FoodApi = {
  GetList: async () => {
    let foods = null;
    const response = await axiosCustom
      .callApi("GET", "/api/food")
      .catch((error) => console.error(error));
    if (response && response.status === 200) {
      foods = response.data;
    }
    return foods;
  },
  GetFoodTrending: async () => {
    let trendingProducts = null;
    const response = await axiosCustom
      .callApi("GET", "/api/products/getProductTrending")
      .catch((error) => console.error(error));
    if (response && response.status === 200) {
      trendingProducts = response.data;
    }
    return trendingProducts;
  },
  GetFoodsRelate: async (payload) => {
    let relateProducts = null;
    const response = await axiosCustom
      .callApi("GET", "/api/products/relate", null, payload)
      .catch((error) => console.error(error));
    if (response && response.status === 200) {
      relateProducts = response.data;
    }
    return relateProducts;
  },
  GetDetailsFoods: async (payload) => {
    let products = null;
    const response = await axiosCustom
      .callApi("GET", "/api/products/get-details-products", null, payload)
      .catch((error) => console.error(error));
    if (response && response.status === 200) {
      products = response.data;
    }
    return products;
  },
};
