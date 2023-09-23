import axios from "axios";
import { API_KEY, API_URL } from "../consts";

export const getTextFromImage = async (imageFile) => {
  try {
    const formData = new FormData();

    formData.append("image", imageFile);

    const response = await axios.post(API_URL, formData, {
      headers: {
        "X-Api-Key": API_KEY,
        "Content-Type": "multipart/form-data"
      }
    });

    return response.data;
  } catch (error) {
    const statusCode = error.response.status;

    if (statusCode === 400) {
      throw new Error("Bad request. Please try upload another image!");
    }

    throw new Error("Error occurred when fetching data");
  }
};
