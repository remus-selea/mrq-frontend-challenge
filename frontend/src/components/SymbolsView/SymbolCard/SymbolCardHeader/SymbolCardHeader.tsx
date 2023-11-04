import React, { memo } from "react";
import TrendImage from "./TrendImage/TrendImage";

import "./SymbolCardHeader.css";

type SymbolCardHeaderProps = {
  id: string;
  trend: "UP" | "DOWN" | null;
};

const SymbolCardHeader = memo(function SymbolCardHeader(
  props: SymbolCardHeaderProps
) {
  const { id, trend } = props;

  return (
    <div className="symbol-card-head">
      <div>{id}</div>
      <div className="symbol-card-trend">
        <TrendImage trend={trend} />
      </div>
    </div>
  );
});

export default SymbolCardHeader;
