import { KeyboardEvent, SyntheticEvent } from "react";

function isEnterKeyPress(event: SyntheticEvent): boolean {
  return event.type === "keydown" && (event as KeyboardEvent).key === "Enter";
}

export default isEnterKeyPress;
