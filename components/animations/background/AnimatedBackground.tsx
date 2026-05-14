import Orbs from "./variants/Orbs";
import Grid from "./variants/Grid";
import Waves from "./variants/Waves";
import Particles from "./variants/Particles";


type Variant = "orbs" | "waves" | "grid" | "particles" | "gradient";

interface Props {
  variant: Variant;
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export default function AnimatedBackground({
  variant,
  className = "",
}: Props) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {variant === "orbs" && <Orbs />}
      {variant === "grid" && <Grid />}
{variant === "waves" && (
  <>
    <Waves position="top" />
    <Waves position="bottom" />
  </>
)}      {variant === "particles" && <Particles />}
      {/*  {variant === "gradient" && <Gradient />} */}
    </div>
  );
}