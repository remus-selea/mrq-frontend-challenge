import { ReactNode, memo } from "react";

type SymbolDetailsProps = {
  iconComponent: ReactNode;
  text: string;
};

const SymbolDetails = memo(function SymbolDetails(props: SymbolDetailsProps) {
  const { iconComponent, text } = props;

  return (
    <div className="symbol-details">
      {iconComponent}
      <div className="symbol-details-text">{text}</div>
    </div>
  );
});

export default SymbolDetails;
