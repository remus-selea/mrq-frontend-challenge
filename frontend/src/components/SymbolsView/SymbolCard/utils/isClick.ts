import { SyntheticEvent } from "react";

function isClick(event: SyntheticEvent): boolean {
  return event.type === "click";
}

export default isClick;
