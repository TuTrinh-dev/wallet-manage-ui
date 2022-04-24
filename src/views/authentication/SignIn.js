import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import BasicLayout from "./components/BasicLayout";
import bgImage from "assets/img/bg-sign-in-basic.jpeg"
import {Button, Input, Col} from "reactstrap";

function SignIn() {
    const [rememberMe, setRememberMe] = useState(false);

    const handleSetRememberMe = () => setRememberMe(!rememberMe);

    return (
        <BasicLayout image={bgImage}>
            <Card>
                <Card
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                    mx={2}
                    mt={-3}
                    p={2}
                    mb={1}
                    textAlign="center"
                >
                    <Button>
                        Sign in
                    </Button>
                    <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                        <Grid item xs={2}>
                            <Button component={MuiLink} href="#" variant="body1" color="white">
                                <FacebookIcon color="inherit" />
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button component={MuiLink} href="#" variant="body1" color="white">
                                <GitHubIcon color="inherit" />
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button component={MuiLink} href="#" variant="body1" color="white">
                                <GoogleIcon color="inherit" />
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
                <Card pt={4} pb={3} px={3}>
                    <Card component="form" role="form">
                        <Card mb={2}>
                            <Input type="email" label="Email" fullWidth />
                        </Card>
                        <Col mb={2}>
                            <Input type="password" label="Password" fullWidth />
                        </Col>
                        <Col display="flex" alignItems="center" ml={-1}>
                            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                            <span
                                variant="button"
                                fontWeight="regular"
                                color="text"
                                onClick={handleSetRememberMe}
                                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                            >
                                &nbsp;&nbsp;Remember me
                            </span>
                        </Col>
                        <Col mt={4} mb={1}>
                            <Button variant="gradient" color="info" fullWidth>
                                sign in
                            </Button>
                        </Col>
                        <Col mt={3} mb={1} textAlign="center">
                            <span variant="button" color="text">
                                Don&apos;t have an account?{" "}
                                <Button
                                    component={Link}
                                    to="/authentication/sign-up"
                                    variant="button"
                                    color="info"
                                    fontWeight="medium"
                                    textGradient
                                >
                                    Sign up
                                </Button>
                            </span>
                        </Col>
                    </Card>
                </Card>
            </Card>
        </BasicLayout>
    );
}

export default SignIn;
