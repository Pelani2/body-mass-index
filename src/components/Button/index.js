import React from "react";
import PropTypes from "prop-types";
import "./button-styles.scss";

const Button = ({ onClick, children, variant }) => {
    const classNames = `Button ${variant || ""}`;

    return(
        <button
            onClick={onClick}
            className={classNames}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    variant: PropTypes.oneOf(["primary", "secondary", "outline"])
};

export default Button;