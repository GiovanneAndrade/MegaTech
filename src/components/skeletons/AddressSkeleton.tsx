import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function AddressSkeleton() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap:'30px'
      }}
    >
       <Skeleton animation="wave" variant="circular" width={25} height={25} />
      <Box sx={{ width: "80%" }}>
        <Skeleton />
        <Skeleton animation="wave" />
      </Box>
    </Box>
  );
}
