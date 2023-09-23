import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, FormControl } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import { getTextFromImage } from "../../api/image";
import styles from "./ImageForm.module.scss";
import { validationSchema } from "../../validation/validationSchema";

export const ImageForm = ({
  onStoreData,
  onStoreError,
  onStoreIsLoading,
  onStoreUploadedImage
}) => {
  const [selectedFileName, setSelectedFileName] = useState(null);

  const initialValues = {
    image: null
  };

  const handleFileInputChange = (event, setFieldValue) => {
    const file = event.target.files[0];

    setFieldValue("image", file);
    setSelectedFileName(file ? file.name : null);
  };

  const handleSubmit = async (values) => {
    const imageFile = values.image;

    onStoreIsLoading(true);
    onStoreError("");

    try {
      const data = await getTextFromImage(imageFile);

      onStoreData(data);
      onStoreUploadedImage(URL.createObjectURL(imageFile));
    } catch (error) {
      onStoreError(error);
    } finally {
      onStoreIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={styles.form}>
          <FormGroup className={styles.form__formGroup}>
            <FormControl component="fieldset" className={styles.form__control}>
              <label
                htmlFor="image-upload"
                className={styles.form__labelWrapper}
              >
                Upload your file
                <span className={styles.form__labelText}>Browse</span>
                <input
                  id="image-upload"
                  type="file"
                  accept=".jpeg, .png"
                  className={styles.form__input}
                  onChange={(event) =>
                    handleFileInputChange(event, setFieldValue)
                  }
                />
              </label>
            </FormControl>

            <ErrorMessage
              className={styles.form__errorMessage}
              name="image"
              component="span"
            />
          </FormGroup>

          <span className={styles.form__fileLabel}>
            {selectedFileName ? `File: ${selectedFileName}` : "No file chosen!"}
          </span>

          <Button
            className={styles.form__button}
            type="submit"
            variant="contained"
            color="success"
          >
            Upload Image
          </Button>
        </Form>
      )}
    </Formik>
  );
};

ImageForm.propTypes = {
  onStoreData: PropTypes.func.isRequired,
  onStoreError: PropTypes.func.isRequired,
  onStoreIsLoading: PropTypes.func.isRequired,
  onStoreUploadedImage: PropTypes.func.isRequired
};
