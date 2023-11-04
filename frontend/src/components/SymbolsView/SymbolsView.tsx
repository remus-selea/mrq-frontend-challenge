import { useCallback, useState } from "react";
import "./symbolsView.css";
import PriceChart from "@/components/SymbolsView/PriceChart/PriceChart";
import SymbolsGrid from "./SymbolsGrid/SymbolsGrid";

const SymbolsView = () => {
  const [activeSymbol, setActiveSymbol] = useState<null | string>(null);
  const handleSymbolClick = useCallback((symbolId: string) => {
    setActiveSymbol((s) => (s === symbolId ? null : symbolId));
  }, []);

  return (
    <div className="symbolsView">
      <div className="symbolsView__chart">
        <h3>PRICE HISTORY</h3>
        <PriceChart symbolId={activeSymbol} />
      </div>
      <div className="symbolsView__cards">
        <SymbolsGrid
          onSymbolClick={handleSymbolClick}
          activeSymbol={activeSymbol}
        />
      </div>
    </div>
  );
};

export default SymbolsView;
