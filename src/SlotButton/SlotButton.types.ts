import { type VariantProps } from "class-variance-authority";
import { variants } from "./SlotButton.variants";

export interface SlotButtonProps extends VariantProps<typeof variants> {
  label: string;
  rounded?: boolean;
  width?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
