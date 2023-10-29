type StockEntity = {
  symbol: string;
  companyName: string;
  industry: string;
  marketCap: number;
  exchange: "NASDAQ" | "NYSE";
};

export const stockData: StockEntity[] = [
  {
    symbol: "NVDA",
    companyName: "NVIDIA Corporation",
    industry: "Semiconductors",
    marketCap: 685_000_000_000,
    exchange: "NASDAQ",
  },
  {
    symbol: "AAPL",
    companyName: "Apple Inc.",
    industry: "Consumer Electronics",
    marketCap: 2_621_000_000_000,
    exchange: "NASDAQ",
  },
  {
    symbol: "TSLA",
    companyName: "Tesla, Inc.",
    industry: "Auto Manufacturers",
    marketCap: 605_000_000_000,
    exchange: "NASDAQ",
  },
  {
    symbol: "XOM",
    companyName: "Exxon Mobil Corporation",
    industry: "Oil & Gas Integrated",
    marketCap: 468_000_000_000,
    exchange: "NYSE",
  },
  {
    symbol: "META",
    companyName: "Meta Platforms, Inc.",
    industry: "Internet Content & Information",
    marketCap: 554_000_000_000,
    exchange: "NASDAQ",
  },
  {
    symbol: "JPM",
    companyName: "JPMorgan Chase & Co.",
    industry: "Banks - Diversified",
    marketCap: 376_330_000_000,
    exchange: "NYSE",
  },
  {
    symbol: "WMT",
    companyName: "Walmart Inc.",
    industry: "Discount Stores",
    marketCap: 396_330_000_000,
    exchange: "NYSE",
  },
  {
    symbol: "MA",
    companyName: "Mastercard Incorporated",
    industry: "Credit Services",
    marketCap: 344_000_000_000,
    exchange: "NYSE",
  },
  {
    symbol: "ABBV",
    companyName: "AbbVie Inc.",
    industry: "Drug Manufacturers - General",
    marketCap: 344_000_000_000,
    exchange: "NYSE",
  },
  {
    symbol: "KO",
    companyName: "The Coca-Cola Company",
    industry: "Beverages - Non-Alcoholic",
    marketCap: 270_000_000_000,
    exchange: "NYSE",
  },
  {
    symbol: "BABA",
    companyName: "Alibaba Group Holding Limited",
    industry: "Internet Retail",
    marketCap: 260_000_000_000,
    exchange: "NYSE",
  },
  {
    symbol: "NKE",
    companyName: "NIKE, Inc.",
    industry: "Footwear & Accessories",
    marketCap: 191_000_000_000,
    exchange: "NYSE",
  },
  {
    symbol: "AMD",
    companyName: "Advanced Micro Devices, Inc.",
    industry: "Semiconductors",
    marketCap: 154_000_000_000,
    exchange: "NASDAQ",
  },
  {
    symbol: "QCOM",
    companyName: "QUALCOMM Incorporated",
    industry: "Semiconductors",
    marketCap: 136_000_000_000,
    exchange: "NASDAQ",
  },
  {
    symbol: "INTC",
    companyName: "Intel Corporation",
    industry: "Semiconductors",
    marketCap: 136_000_000_000,
    exchange: "NASDAQ",
  },
  {
    symbol: "HON",
    companyName: "Honeywell International Inc.",
    industry: "Conglomerates",
    marketCap: 127_000_000_000,
    exchange: "NASDAQ",
  },
  {
    symbol: "BA",
    companyName: "The Boeing Company",
    industry: "Conglomerates",
    marketCap: 128_000_000_000,
    exchange: "NYSE",
  },
];
