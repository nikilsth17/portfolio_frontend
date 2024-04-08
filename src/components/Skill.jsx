import React from "react";
import { Box, Card } from "@mui/material";

const Skill = () => {
  return (
    <Box
      id="skills"
      sx={{
        alignItems: "center",
        padding: { xs: "none", md: "none", lg: 9 },

        paddingTop: { lg: "none", md: 20, xs: 5 },

        backgroundColor: "whitesmoke",
      }}
    >
      <h1 style={{ textAlign: "center" }}> {"< My Skills />"}</h1>
      <h4 style={{ textAlign: "center" }}>
        Here are some of my skills on which I have been working.
      </h4>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: {
              xs: "80vw",
              lg: 315,
            },
            padding: 5,
            margin: { lg: 5, xs: 1 },
          }}
        >
          <div id="HTML" className="cardStyle">
            <div className="class">
              <span className="class">HTML</span>
              <div className="percentCount">90%</div>
            </div>

            <div
              className="progressBar"
              style={{
                width: "100%",
                backgroundColor: "rgb(59, 59, 59)",
                borderRadius: "5px",
              }}
            >
              <div className="proggress" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div id="css" className="cardStyle">
            <div className="class">
              <span className="class">CSS</span>
              <div className="percentCount">80%</div>
            </div>

            <div
              className="progressBar"
              style={{
                width: "100%",
                backgroundColor: "rgb(59, 59, 59)",
                borderRadius: "5px",
              }}
            >
              <div className="proggress" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div id="javascript" className="cardStyle">
            <div className="class">
              <span className="class">JavaScript</span>
              <div className="percentCount">60%</div>
            </div>

            <div
              className="progressBar"
              style={{
                width: "100%",
                backgroundColor: "rgb(59, 59, 59)",
                borderRadius: "5px",
              }}
            >
              <div className="proggress" style={{ width: "60%" }}></div>
            </div>
          </div>
          <div id="react" className="cardStyle">
            <div className="class">
              <span>React js</span>
              <div className="percentCount">75%</div>
            </div>

            <div
              className="progressBar"
              style={{
                width: "100%",
                backgroundColor: "rgb(59, 59, 59)",
                borderRadius: "5px",
              }}
            >
              <div className="proggress" style={{ width: "75%" }}></div>
            </div>
          </div>
        </Card>
        <Card
          sx={{
            width: {
              xs: "80vw",
              sm: "25vw",
              ls: 315,
            },
            padding: 5,
            margin: { lg: 5, xs: 1 },
          }}
        >
          <div id="Node js" className="cardStyle">
            <div className="class">
              <span className="class">Node JS</span>
              <div className="percentCount">65%</div>
            </div>

            <div
              className="progressBar"
              style={{
                width: "100%",
                backgroundColor: "rgb(59, 59, 59)",
                borderRadius: "5px",
              }}
            >
              <div className="proggress" style={{ width: "65%" }}></div>
            </div>
          </div>
          <div id="express js" className="cardStyle">
            <div className="class">
              <span className="class">Express js</span>
              <div className="percentCount">70%</div>
            </div>

            <div
              className="progressBar"
              style={{
                width: "100%",
                backgroundColor: "rgb(59, 59, 59)",
                borderRadius: "5px",
              }}
            >
              <div className="proggress" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div id="mongo db" className="cardStyle">
            <div className="class">
              <span className="class">Mongo DB</span>
              <div className="percentCount">55%</div>
            </div>

            <div
              className="progressBar"
              style={{
                width: "100%",
                backgroundColor: "rgb(59, 59, 59)",
                borderRadius: "5px",
              }}
            >
              <div className="proggress" style={{ width: "55%" }}></div>
            </div>
          </div>
          <div id="mui" className="cardStyle">
            <div className="class">
              <span>MUI library</span>
              <div className="percentCount">80%</div>
            </div>

            <div
              className="progressBar"
              style={{
                width: "100%",
                backgroundColor: "rgb(59, 59, 59)",
                borderRadius: "5px",
              }}
            >
              <div className="proggress" style={{ width: "80%" }}></div>
            </div>
          </div>
        </Card>
      </Box>
    </Box>
  );
};

export default Skill;
