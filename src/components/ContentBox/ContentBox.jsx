import React, { useState } from "react";
import { TransformedData } from "../TransformedData";
import { ImageForm } from "../ImageForm";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";
import styles from "./ContentBox.module.scss";
import { ImagePreview } from "../ImagePreview";

export const ContentBox = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const storeData = (newData) => {
    setData(newData);
  };

  const storeError = (newError) => {
    setError(newError);
  };

  const storeIsLoading = (isDataLoading) => {
    setIsLoading(isDataLoading);
  };

  const storeUploadedImage = (imageURL) => {
    setUploadedImage(imageURL);
  };

  return (
    <section className={styles.contentBox}>
      <ImageForm
        onStoreData={storeData}
        onStoreError={storeError}
        onStoreIsLoading={storeIsLoading}
        onStoreUploadedImage={storeUploadedImage}
      />

      {error ? (
        <ErrorMessage error={error} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <TransformedData data={data} />
          {uploadedImage && <ImagePreview uploadedImage={uploadedImage} />}
        </>
      )}
    </section>
  );
};
