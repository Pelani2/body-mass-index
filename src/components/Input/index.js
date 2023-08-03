import React from "react";
import PropTypes from "prop-types";
import "./input-styles.scss";

const Input = ({ type, value, onChange, className }) => {
    const classNames = `Input ${className || ""}`;

    return(
        <input 
            type={type}
            value={value}
            onChange={onChange}
            className={classNames}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    className: PropTypes.string
};

export default Input;