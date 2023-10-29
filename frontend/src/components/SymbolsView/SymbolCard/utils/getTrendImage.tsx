import trendUpImage from "@/assets/up.png";
import trendDownImage from "@/assets/down.png";

function getTrendImage(trend: "UP" | "DOWN" | null) {
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
      alt="testtes dsd sad sd "
      src={imgSrc}
    />
  );
}

export default getTrendImage;
