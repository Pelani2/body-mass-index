import React from "react";
import PropTypes from "prop-types";
import "./label-styles.scss";

const Label = ({ children, className }) => {
    const classNames = `Label ${className || ""}`;

    return(
        <label
            className={classNames}
        >
            {children}
        </label>
    );
};

Label.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Label;