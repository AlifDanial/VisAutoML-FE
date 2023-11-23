import { useEffect, useState } from "react";
import { Box, LinearProgress } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { modelValidator } from "../validation/newModelValidation";
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#000000',
    color: '#ffffff',
    maxWidth: 580,
    fontSize: theme.typography.pxToRem(14),
    border: '1px solid #dadde9',
    borderRadius: '10px',
  },
}));

const images = [
  {
    id: 1,
    title: 'Preprocessing: Review the dataset in detail before model training',
    image: '/img/preprocess.gif'
  },  
];

const LoadingDialog = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (open) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(timer);
          }

          return Math.min(oldProgress + 100 / 150, 100);
        });
      }, 100);

      return () => {
        clearInterval(timer);
      }
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    setProgress(0);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em"
        }}
      >
      <Carousel
          autoPlay
          showThumbs={false}
          infiniteLoop
          interval={10000} // Set the interval to 10 seconds (10000 milliseconds)
          stopOnHover // Pause auto-play on hover
          stopOnInteraction={false} // Allow interaction without stopping auto-play
        >
          {images.map(image => (
            <Box key={image.id} style={{ position: 'relative' }}>
              <img src={image.image} alt={image.title} />
              <div
                style={{
                  position: 'absolute',
                  bottom: '30px', // Adjust the vertical position of the text
                  left: '50%',    // Center the text horizontally
                  transform: 'translateX(-50%)', // Center the text horizontally
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Background color for the text
                  color: 'white', // Text color
                  padding: '5px', // Padding around the text
                  fontSize: '17px', // Font size of the text
                  fontFamily: "'SF Pro Display', sans-serif",
                  borderRadius:"5px"
                }}
              >
                {image.title}
              </div>
            </Box>
          ))}
        </Carousel>
        </DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            gap: "1em"
          }}
        >
          {/* <LinearProgress variant="determinate" value={progress} style={{ height: 20, borderRadius: 10 }} /> */}
          <Typography sx={{ fontSize: "1.2em", fontFamily: "'SF Pro Display', sans-serif", }}>
            Analysing...
          </Typography>

        </Box>
      
      {/* <DialogActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleClose} variant="outlined" sx={{ marginLeft: "15px", marginBottom: "10px", fontFamily: "'SF Pro Display', sans-serif",
 }}>
          Cancel
        </Button>
        <Button onClick={() => navigate('/model')} variant={progress === 100 ? "outlined" : "disabled"} sx={{ marginRight: "15px", marginBottom: "10px", fontFamily: "'SF Pro Display', sans-serif",
 }}>
          Explore Model
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default LoadingDialog;
