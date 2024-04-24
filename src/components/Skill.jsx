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
          gap:5
        }}
      >
        <Card
        sx={{
          padding:5
        }}
        >
          <div className="skills">
            <h2>HTML</h2>
            <div className="progress-bar">
              <div className="html"><span>95%</span></div>
            </div>
            <h2>CSS</h2>
            <div className="progress-bar">
              <div className="css"><span>80%</span></div>
            </div>
            <h2>Javascript</h2>
            <div className="progress-bar">
              <div className="javascript"><span>70%</span></div>
            </div>
            <h2>React js</h2>
            <div className="progress-bar">
              <div className="react"><span>80%</span></div>
            </div>
          </div>
        </Card>
        <Card
        sx={{padding:5}}
        >
            <div className="skills">
            <h2>Node js</h2>
            <div className="progress-bar">
              <div className="nodejs"><span>70%</span></div>
            </div>
            <h2>Express js</h2>
            <div className="progress-bar">
              <div className="express"><span>70%</span></div>
            </div>
            <h2>Mongo Db</h2>
            <div className="progress-bar">
              <div className="mongodb"><span>60%</span></div>
            </div>
            <h2>MUI</h2>
            <div className="progress-bar">
              <div className="mui"><span>90%</span></div>
            </div>
          </div>
        </Card>
      </Box>
    </Box>
  );
};

export default Skill;
