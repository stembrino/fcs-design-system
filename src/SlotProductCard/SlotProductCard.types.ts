import { type VariantProps } from "class-variance-authority";
import { variants } from "./SlotProductCard.variants";

export interface SlotProductCardProps extends VariantProps<typeof variants> {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
