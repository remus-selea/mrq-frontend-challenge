import { useEffect } from 'react';
import './priceChart.css';
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchPriceHistory, selectors } from '@/store/priceHistorySlice';
type PriceChartProps = {
  symbolId: string | null;
};
const PriceChart = ({ symbolId }: PriceChartProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (symbolId !== null) {
      dispatch(fetchPriceHistory(symbolId));
    }
  }, [dispatch, symbolId]);

  const data = useAppSelector(selectors.selectPriceHistory);
  const symbolInfo = useAppSelector(selectors.selectSymbolInfo);
  return (
    <div className="priceChart">
      <div>{symbolInfo}</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data.map((e) => ({ ...e, time: new Date(e.time).toLocaleTimeString() }))}>
          <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
          <XAxis dataKey="time" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
