import { ComponentSizes } from "../util/commons.types";

export interface SlotButtonProps {
  label: string;
  rounded?: boolean;
  size?: ComponentSizes;
  width?: string;
  border?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
