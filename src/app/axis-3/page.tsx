import { axes } from "@/data/axis";
import { AxisPageContent } from "@/components/AxisPageContent";

const axis = axes.find((item) => item.slug === "axis-3");

export default function AxisThreePage() {
  if (!axis) {
    return null;
  }
  return <AxisPageContent axis={axis} />;
}
