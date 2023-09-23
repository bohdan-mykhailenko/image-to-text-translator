import * as Yup from "yup";

export const validationSchema = Yup.object({
  image: Yup.mixed()
    .required("Image is required")
    .test("fileSize", "File size must not exceed 5MB", (value) => {
      if (!value) {
        return true;
      }

      return value.size <= 5 * 1024 * 1024;
    })
});
