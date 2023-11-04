import React, { memo, useCallback, useMemo } from "react";
import { ReactComponent as IndustryLogo } from "@/assets/industry.svg";
import { ReactComponent as CompanyIcon } from "@/assets/company.svg";
import { ReactComponent as MarketCapIcon } from "@/assets/market_cap.svg";
import { useAppSelector } from "@/hooks/redux";
import abbreviateNumberWithMagnitude from "./utils/abbreviateNumberWithMagnitude";
import isClick from "./utils/isClick";
import isEnterKeyPress from "./utils/isEnterKeyPress";
import calculateAbsolutePercentageDifference from "./utils/calculateAbsolutePercentageDifference";
import useTimedClassOnCondition from "./hooks/useTimedClassOnCondition";
import SymbolCardHeader from "./SymbolCardHeader/SymbolCardHeader";
import PriceContainer from "./PriceContainer/PriceContainer";
import SymbolDetails from "./SymbolDetails/SymbolDetails";

import "./symbolCard.css";

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
  activeSymbol: string | null;
};

const SymbolCard = memo(function SymbolCard(props: SymbolCardProps) {
  const { id, onClick, price, activeSymbol } = props;
  const { trend, industry, companyName, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );

  const priceValue = price !== undefined ? Math.floor(price) : 0;

  const handleInteraction = useCallback(
    (event: React.SyntheticEvent) => {
      if (isClick(event) || isEnterKeyPress(event)) {
        onClick(id);
      }
    },
    [id, onClick]
  );

  const priceChangeClass = useTimedClassOnCondition(
    priceValue,
    (prevPrice) => {
      if (priceValue > prevPrice) {
        return "green-shadow";
      } else if (priceValue < prevPrice) {
        return "red-shadow";
      }
    },
    1000
  );

  const significantPriceChangeClass = useTimedClassOnCondition(
    priceValue,
    (prevPrice) => {
      if (calculateAbsolutePercentageDifference(prevPrice, priceValue) > 25) {
        return "symbolCard__shake";
      }
    },
    1000
  );

  const cardClasses = `symbolCard ${
    id === activeSymbol ? "symbolCard-active" : ""
  } ${priceChangeClass} ${significantPriceChangeClass}`;

  const detailsData = useMemo(() => {
    return [
      {
        icon: <CompanyIcon className="symbol-details-svg" />,
        text: companyName,
      },
      { icon: <IndustryLogo className="symbol-details-svg" />, text: industry },
      {
        icon: <MarketCapIcon className="symbol-details-svg" />,
        text: abbreviateNumberWithMagnitude(marketCap),
      },
    ];
  }, [companyName, industry, marketCap]);

  return (
    <div
      className={cardClasses}
      role="button"
      tabIndex={0}
      onClick={handleInteraction}
      onKeyDown={handleInteraction}
    >
      <SymbolCardHeader id={id} trend={trend} />
      <div className="symbol-card-content">
        <PriceContainer priceValue={priceValue} />

        {detailsData.map((item, index) => (
          <SymbolDetails
            iconComponent={item.icon}
            text={item.text}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))}
      </div>
    </div>
  );
});

export default SymbolCard;
