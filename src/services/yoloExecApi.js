import axios from "axios";
import Cookies from "js-cookie";

const API_YOLO_URL = "https://localhost:7025/";

const configYolo = {
  method: "get",
  url: "",
  data: {},
};

export async function yoloExecAPI(configs = configYolo) {
  if (!configs) throw new Error('Missing "configs"!');
  if (!configs.url) throw new Error('Missing "configs.url"!');

  const refreshToken = Cookies.get("refreshToken");
  let response = await yoloCallAPI(configs);

  if (response?.status === 401) {
    const refreshResponse = await yoloCallAPI({
      method: "post",
      url: "api/auth/refresh",
      data: refreshToken,
    });

    if (refreshResponse?.status === 401) {
      return [refreshResponse, null];
    }

    const { description } = refreshResponse.data;
    Cookies.set("token", description?.token, { expires: 1 });
    Cookies.set("refreshToken", description?.refreshToken, { expires: 7 });

    response = await yoloCallAPI(configs);
  }

  if (response?.status !== 200) {
    return [response, null];
  }

  return [null, response.data];
}

async function yoloCallAPI(configs = configYolo) {
  if (!configs) throw new Error('Missing "configs"!');
  if (!configs.url) throw new Error('Missing "configs.url"!');

  const token = Cookies.get("token");

  try {
    const response = await axios({
      method: configs.method || "get",
      url: API_YOLO_URL + configs.url,
      data: configs.data || {},
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    return error.response || null;
  }
}
