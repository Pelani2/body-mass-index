import React from "react";
import PropTypes from "prop-types";
import "./button-styles.scss";

const Button = ({ onClick, children, variant }) => {
    const classNames = `Button ${variant || ""}`;

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            onClick && onClick();
        }
    };

    const handleClick = (event) => {
        event.preventDefault();
        onClick && onClick();
    };

    return(
        <button
            onClick={handleClick}
            className={classNames}
            onKeyPress={handleKeyPress}
            tabIndex={0}
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