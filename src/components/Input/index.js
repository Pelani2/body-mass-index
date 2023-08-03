import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, value, onChange }) => {
    return(
        <input 
            type={type}
            value={value}
            onChange={onChange}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
};

export default Input;