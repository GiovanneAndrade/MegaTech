import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const CardsSkeleton = () => {
  const skeletonStyles = {
    p: 2,
  
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box>
      <Box sx={skeletonStyles}>
        <Skeleton
          sx={{ bgcolor: "grey.400" }}
          variant="rectangular"
          width={1400}
          height={50}
        />
      </Box>
      <Box sx={{ ...skeletonStyles, overflow: "auto" }}>
        {[...Array(6)].map((_, index) => (
          <Box key={index} sx={{ ...skeletonStyles, borderRadius: "10px" }}>
            <Skeleton
              sx={{ bgcolor: "grey.100", borderRadius: "10px" }}
              variant="rectangular"
              width={200}
              height={350}
            />
           
          </Box>
        ))}
      </Box>
    </Box>
  );
};
