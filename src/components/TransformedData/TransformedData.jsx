import React from "react";
import PropTypes from "prop-types";
import styles from "./TransformedData.module.scss";
import { getParsedText } from "../../helpers/getParsedText";

export const TransformedData = ({ data }) => {
  const text = getParsedText(data);

  return (
    <article className={styles.transformedData}>
      <h2 className={styles.transformedData__title}>Transformed Text</h2>

      <div className={styles.transformedData__text}>{text}</div>
    </article>
  );
};

TransformedData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      bounding_box: PropTypes.shape({
        x1: PropTypes.number,
        y1: PropTypes.number,
        x2: PropTypes.number,
        y2: PropTypes.number
      }).isRequired
    })
  )
};
