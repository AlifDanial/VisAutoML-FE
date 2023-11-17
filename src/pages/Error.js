import {
    Box,
    Button, Card,
    Paper,

} from "@mui/material";
import "../App.css";
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <Card className="error-page-main"
              sx={{
                  flex: 1,
                  backgroundColor: "#F5F5F5",
                  padding: "30px",
              }}
        >
            <Paper sx={{
                margin: "auto",
                width: "50%",
                height: "auto",
                padding: "20px",
                borderRadius: "20px",
            }}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src="/img/error-404.png"/>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button
                        variant="contained"
                        onClick={()=>{ navigate('/home');}}
                        sx={{borderRadius: "15px"}}
                    >
                        Return To Home Page
                    </Button>
                </div>
            </Paper>
        </Card>
    );
};

export default ErrorPage;
