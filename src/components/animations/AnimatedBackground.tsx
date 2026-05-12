import Orbs from "../motions/variants/Orbs";
import Grid from "../motions/variants/Grid";
import Waves from "../motions/variants/Waves";

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
     {variant === "waves" && <Waves />}
       {/* {variant === "particles" && <Particles />}
      {variant === "gradient" && <Gradient />} */}
    </div>
  );
}