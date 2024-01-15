import React from "react";

import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";
import BodyPartImage from "../assets/icons/body-part.png";
import { Button, Stack, Typography } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
    {
      icon: TargetImage,
      name: target,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { sm: "row", xs: "column" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { sm: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong.
          {name} {` `} is one of the best exercises to target your {target}. it
          will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
