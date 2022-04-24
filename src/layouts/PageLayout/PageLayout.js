import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {Card} from "reactstrap";

function PageLayout({ background, children }) {
    // const location = useLocation();
    // useEffect(() => {
    //     setLayout(dispatch, "page");
    // }, [pathname]);

    return (
        <Card
            width="100vw"
            height="100%"
            minHeight="100vh"
            bgColor={background}
            sx={{ overflowX: "hidden" }}
        >
            {children}
        </Card>
    );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
    background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
    background: PropTypes.oneOf(["white", "light", "default"]),
    children: PropTypes.node.isRequired,
};

export default PageLayout;
