import { memo } from "react";
import "./loading.css";

const Loading = memo(function Loading() {
  return (
    <div className="loading">
      <div className="loading__pulse" />
    </div>
  );
});

export default Loading;
