import { axes } from "@/data/axis";
import { AxisPageContent } from "@/components/AxisPageContent";

const axis = axes.find((item) => item.slug === "axis-4");

export default function AxisFourPage() {
  if (!axis) {
    return null;
  }
  return <AxisPageContent axis={axis} />;
}
