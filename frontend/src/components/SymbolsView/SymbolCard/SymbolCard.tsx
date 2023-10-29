import { useCallback } from 'react';
import './symbolCard.css';
import { ReactComponent as IndustryLogo } from '@/assets/industry.svg';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { useAppSelector } from '@/hooks/redux';

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
  }, [id]);

  return (
    <div onClick={handleOnClick} className="symbolCard">
      <div>
        {id} - {trend}
      </div>
      <div>Price:</div>
      <div>{price || 0} </div>
      <CompanyIcon /> <div>{companyName}</div>
      <IndustryLogo /> <div>{industry}</div>
      <MarketCapIcon /> <div>{marketCap}</div>
    </div>
  );
};
export default SymbolCard;
