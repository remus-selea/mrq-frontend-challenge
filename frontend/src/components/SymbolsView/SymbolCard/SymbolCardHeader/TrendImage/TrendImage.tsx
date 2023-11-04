import trendUpImage from "@/assets/up.png";
import trendDownImage from "@/assets/down.png";
import { memo } from "react";

type TrendImageProps = {
  trend: "UP" | "DOWN" | null;
};

const TrendImage = memo(function SymbolCardHeader(props: TrendImageProps) {
  const { trend } = props;

  if (!trend) {
    return;
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
