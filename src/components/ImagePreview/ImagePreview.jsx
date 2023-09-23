import PropTypes from "prop-types";
import styles from "./ImagePreview.module.scss";

export const ImagePreview = ({ uploadedImage }) => {
  return (
    <div className={styles.imagePreview}>
      <h4 className={styles.imagePreview__title}>Uploaded Image:</h4>
      <img
        src={uploadedImage}
        alt="Uploaded"
        className={styles.imagePreview__image}
      />
    </div>
  );
};

ImagePreview.propTypes = {
  uploadedImage: PropTypes.string.isRequired
};
