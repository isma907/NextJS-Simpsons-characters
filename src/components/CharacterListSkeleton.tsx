import { Grid, Card, Box, Skeleton } from "@mui/material";
export default function CharacterListSkeleton() {
  const skeletonItems = Array.from(new Array(24));

  return (
    <>
      {skeletonItems?.map((item, index) => (
        <Grid item key={item + "_" + index} xs={6} md={3} lg={2}>
          <Card elevation={0}>
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
