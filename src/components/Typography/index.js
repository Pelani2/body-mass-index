import React from "react";
import PropTypes from "prop-types";
import "./typography-styles.scss";

function Typography({ variant, children, className }) {
    const variantElementMap = {
        default: "p",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        span: "span",
    };

    const Element = variantElementMap[variant] || variantElementMap["default"];
    const classNames = `Typography ${variant || "default"} ${className || ""}`;

    return(
        <Element className={classNames}>
            {children}
        </Element>
    );
};

Typography.propTypes = {
    children: PropTypes.string,
    variant: PropTypes.oneOf(["default", "h1", "h2", "h3", "h4", "h5", "h6", "span"]),
    className: PropTypes.string,
}

export default Typography;