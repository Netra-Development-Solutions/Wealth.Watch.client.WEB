import { Grid } from "@mui/material";
import RegisterForm from "user_management/Register";
import LoginForm from "user_management/Login";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
    const navigate = useNavigate();
    const callBackIfLoggedIn = () => {
        navigate('/dashboard');
    }

    return (
        <Grid container>
            <Grid xs={12} sm={6}>
                <RegisterForm />
            </Grid>
            <Grid xs={12} sm={6}>
                <LoginForm callBackIfLoggedIn={callBackIfLoggedIn} />
            </Grid>
        </Grid>
    );
};

export default Authentication;