import { axes } from "@/data/axis";
import { AxisPageContent } from "@/components/AxisPageContent";

const axis = axes.find((item) => item.slug === "axis-2");

export default function AxisTwoPage() {
  if (!axis) {
    return null;
  }
  return <AxisPageContent axis={axis} />;
}
