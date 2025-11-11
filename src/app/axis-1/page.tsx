import { axes } from "@/data/axis";
import { AxisPageContent } from "@/components/AxisPageContent";

const axis = axes.find((item) => item.slug === "axis-1");

export default function AxisOnePage() {
  if (!axis) {
    return null;
  }
  return <AxisPageContent axis={axis} />;
}
