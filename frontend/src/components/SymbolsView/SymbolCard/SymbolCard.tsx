import { useCallback } from "react";
import { ReactComponent as IndustryLogo } from "@/assets/industry.svg";
import { ReactComponent as CompanyIcon } from "@/assets/company.svg";
import { ReactComponent as MarketCapIcon } from "@/assets/market_cap.svg";
import { useAppSelector } from "@/hooks/redux";
import getTrendImage from "./utils/getTrendImage";
import getFlooredPrice from "./utils/getFlooredPrice";
import abbreviateNumber from "./utils/abbreviateNumber";

import "./symbolCard.css";

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, industry, companyName, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );

  const handleOnClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter") {
        handleOnClick();
      }
    },
    [handleOnClick]
  );

  return (
    <div
      className="symbolCard"
      role="button"
      tabIndex={0}
      onClick={handleOnClick}
      onKeyDown={handleKeyDown}
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
