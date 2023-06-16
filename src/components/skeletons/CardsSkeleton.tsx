import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const CardsSkeleton = () => {
  const skeletonStyles = {
    py: 2,
    px: 1,
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
          width={1200}
          height={50}
        />
      </Box>
      <Box sx={{ ...skeletonStyles, overflow: "auto" }}>
        {[...Array(6)].map((_, index) => (
          <Box key={index} sx={{ ...skeletonStyles, borderRadius: "10px" }}>
            <Skeleton
              sx={{ bgcolor: "grey.100", borderRadius: "10px" }}
              variant="rectangular"
              width={180}
              height={330}
            />
           
          </Box>
        ))}
      </Box>
    </Box>
  );
};
