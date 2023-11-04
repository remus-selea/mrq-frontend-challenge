import React, { memo, useCallback } from "react";
import { ReactComponent as IndustryLogo } from "@/assets/industry.svg";
import { ReactComponent as CompanyIcon } from "@/assets/company.svg";
import { ReactComponent as MarketCapIcon } from "@/assets/market_cap.svg";
import { useAppSelector } from "@/hooks/redux";
import getTrendImage from "./utils/getTrendImage";
import abbreviateNumber from "./utils/abbreviateNumber";
import isClick from "./utils/isClick";
import isEnterKeyPress from "./utils/isEnterKeyPress";
import calculateAbsolutePercentageDifference from "./utils/calculateAbsolutePercentageDifference";
import useTimedClassOnCondition from "./hooks/useTimedClassOnCondition";

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

  return (
    <div
      className={cardClasses}
      role="button"
      tabIndex={0}
      onClick={handleInteraction}
      onKeyDown={handleInteraction}
    >
      <div className="symbol-card-head">
        <div>{id}</div>
        <div className="symbol-card-trend">{getTrendImage(trend)}</div>
      </div>
      <div className="symbol-card-content">
        <div className="price-container">
          <div className="price-text">PRICE:</div>
          <div className="price-amount">
            {priceValue === 0 ? "" : priceValue}
          </div>
        </div>
        <div className="symbol-details">
          <CompanyIcon className="symbol-details-svg" />
          <div className="symbol-details-text">{companyName}</div>
        </div>
        <div className="symbol-details">
          <IndustryLogo className="symbol-details-svg" />
          <div className="symbol-details-text">{industry}</div>
        </div>
        <div className="symbol-details">
          <MarketCapIcon className="symbol-details-svg" />
          <div className="symbol-details-text">
            {abbreviateNumber(marketCap)}
          </div>
        </div>
      </div>
    </div>
  );
});

export default SymbolCard;
