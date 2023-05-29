import React from "react";
import "./style.scss";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

import Switch from "../../assets/switch.png";
import SwitchLite from "../../assets/switch-lite.png";
import SwitchOled from "../../assets/switch-oled.png";
import SwitchLogo from "../../assets/switch-logo.png";

const Home = () => {
  return (
    <div className="wrapper">
      <Container>
        <div className="content-wrapper">
          <div className="left-text">
            <img className="switch-logo" src={SwitchLogo} alt=" " />
            <h1>Nontendo Swotch</h1>
            <p>
              Avaiable now!
              <br />
              Starting from $299.99
            </p>
            <Box>
              <Button
                sx={{
                  bgcolor: "white",
                  color: "red",
                  ":hover": { bgcolor: "tomato", color: "white" },
                }}
                className="Button"
                variant="contained"
              >
                purchase now
              </Button>
            </Box>
          </div>

          <div className="right-image">
            <Carousel controls={false}>
              <Carousel.Item interval={1500}>
                <img className="switch" src={Switch} alt=" " />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="switch" src={SwitchOled} alt=" " />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="switch" src={SwitchLite} alt=" " />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
