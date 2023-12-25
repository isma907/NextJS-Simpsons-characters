import { SimpsonCharacter } from "@/interfaces";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import styles from "../app/page.module.css";

interface Props {
  data: SimpsonCharacter;
  className?: string;
  style?: React.CSSProperties;
}
export default function CharacterCard({ data, className, style }: Props) {
  return (
    <Card className={className} style={style} elevation={1}>
      <CardMedia
        sx={{
          height: 200,
          backgroundSize: "contain",
          backgroundPosition: "left 20px top 10px",
        }}
        image={data.image}
        title={data.name}
        className={styles.card_list_item_image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontSize: 20 }}
        >
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.gender}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
