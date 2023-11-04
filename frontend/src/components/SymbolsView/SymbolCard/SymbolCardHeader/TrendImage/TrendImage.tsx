import trendUpImage from "@/assets/up.png";
import trendDownImage from "@/assets/down.png";
import { memo } from "react";

type TrendImageProps = {
  trend: "UP" | "DOWN" | null;
};

const TrendImage: React.FC<TrendImageProps> = memo(function TrendImage(
  props: TrendImageProps
) {
  const { trend } = props;

  if (!trend) {
    return null;
  }

  let imgSrc;
  if (trend === "UP") {
    imgSrc = trendUpImage;
  } else if (trend === "DOWN") {
    imgSrc = trendDownImage;
  }

  return (
    <img
      className="symbol-card-trend-img"
      alt="testtes dsd sad sd"
      src={imgSrc}
    />
  );
});

export default TrendImage;
