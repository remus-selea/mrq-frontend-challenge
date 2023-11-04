import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import SymbolCard from "../SymbolCard/SymbolCard";
import { fetchAllStocks, selectors } from "@/store/stocksSlice";

import "./symbolsGrid.css";
import Loading from "@/components/Loading/Loading";

type SymbolsGridProps = {
  onSymbolClick: (symbolId: string) => void;
  activeSymbol: string | null;
};

const SymbolsGrid = ({ onSymbolClick, activeSymbol }: SymbolsGridProps) => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const apiState = useAppSelector(selectors.apiState);
  const prices = useAppSelector((state) => state.prices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  if (apiState.loading) {
    return <Loading />;
  }

  return (
    <div className="symbol-cards">
      {stockSymbols.map((id) => (
        <SymbolCard
          price={prices[id]}
          onClick={onSymbolClick}
          key={id}
          activeSymbol={activeSymbol}
          id={id}
        />
      ))}
    </div>
  );
};

export default SymbolsGrid;
