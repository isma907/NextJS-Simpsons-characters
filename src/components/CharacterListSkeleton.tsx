import { Sizes } from "@/interfaces";
import { Grid, Card, Box, Skeleton } from "@mui/material";
export default function CharacterListSkeleton({
  gridSettings,
}: {
  gridSettings: Sizes;
}) {
  const skeletonItems = Array.from(new Array(24));

  return (
    <>
      {skeletonItems?.map((item, index) => (
        <Grid
          item
          xs={gridSettings?.xs}
          md={gridSettings?.md}
          lg={gridSettings?.lg}
        >
          <Card elevation={0} key={item + "_" + index}>
            <Box>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Box sx={{ p: 1 }}>
                <Skeleton height={40} />
                <Skeleton width="30%" />
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
}
