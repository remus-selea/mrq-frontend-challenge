import { useCallback, useRef } from "react";
import { ReactComponent as IndustryLogo } from "@/assets/industry.svg";
import { ReactComponent as CompanyIcon } from "@/assets/company.svg";
import { ReactComponent as MarketCapIcon } from "@/assets/market_cap.svg";
import { useAppSelector } from "@/hooks/redux";
import getTrendImage from "./utils/getTrendImage";
import getFlooredPrice from "./utils/getFlooredPrice";
import abbreviateNumber from "./utils/abbreviateNumber";
import getPriceTrendClasses from "./utils/getPriceTrendClasses";
import isClick from "./utils/isClick";
import isEnterKeyPress from "./utils/isEnterKeyPress";

import "./symbolCard.css";

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
  activeSymbol: string | null;
};

const SymbolCard = ({ id, onClick, price, activeSymbol }: SymbolCardProps) => {
  const { trend, industry, companyName, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );

  const handleInteraction = useCallback(
    (event: React.SyntheticEvent) => {
      if (isClick(event) || isEnterKeyPress(event)) {
        onClick(id);
      }
    },
    [id, onClick]
  );

  const prevPriceRef = useRef<number | null>(null);
  const { colorClass, shakeClass } = getPriceTrendClasses(
    prevPriceRef.current,
    price
  );
  prevPriceRef.current = price;

  const cardClasses = `symbolCard ${
    id === activeSymbol ? "symbolCard-active" : ""
  } ${colorClass} ${shakeClass}`;

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
          <div className="price-amount">{getFlooredPrice(price)} </div>
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
};
export default SymbolCard;
