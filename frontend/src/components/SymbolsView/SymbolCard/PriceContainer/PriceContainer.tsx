import { memo } from "react";

import "./PriceContainer.css";

type PriceContainerProps = {
  priceValue: number;
};

const PriceContainer = memo(function PriceContainer(
  props: PriceContainerProps
) {
  const { priceValue } = props;

  return (
    <div className="price-container">
      <div className="price-text">PRICE:</div>
      <div className="price-amount">
        {priceValue === 0 ? "-" : `$${priceValue}`}
      </div>
    </div>
  );
});

export default PriceContainer;
