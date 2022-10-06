import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { data, data2 } from "./data";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import './service.css'

export default function RecipeReviewCard() {
  return (
    <div className="ServiceContainer" id="Service">
      <h1 data-aos="flip-left" style={{ margin: "20px", textAlign: "center" }}>
        OUR SERVICE
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "20px",
        }}
      >
        {data.map((item) => {
          return (
            <>
              <Card
              className="serviceCard"
                sx={{ maxWidth: 345, margin: "20px" }}
                data-aos={item.class}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="">
                      {item.name.substring(0, 1)}
                    </Avatar>
                  }
                  title={item.name}
                  subheader={<Typography className="subHeader"> {item.service}</Typography>}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.Image}
                  alt="Paella dish"
                />
                <CardActions disableSpacing>
                  <div className="viewBtn">
                    <Link className="btn2" to={"/View/" + item.name}>View</Link>
                  </div>
                </CardActions>
              </Card>
            </>
          );
        })}

    {data2.map((item) => {
          return (
            <>
              <Card
              className="serviceCard"
                sx={{ maxWidth: 345, margin: "20px" }}
                data-aos={item.class}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {item.name.substring(0, 1)}
                    </Avatar>
                  }
                  title={item.name}
                  subheader={<Typography className="subHeader"> {item.service}</Typography>}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.Image}
                  alt="Paella dish"
                />
                <CardActions disableSpacing>
                  <div className="viewBtn">
                    <Link className="btn2 btn-disable" >View</Link>
                  </div>
                </CardActions>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}
