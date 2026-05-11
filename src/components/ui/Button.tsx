import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "success";

type Size = "default" | "sm" | "lg"
interface ButtonProps {
    variant?: Variant,
    type?: "submit" | "button" | "reset",
    disabled?: boolean,
    size?: Size
    children: React.ReactNode,
    className?: string,
    onClick?: () => void;
}

const Button = ({variant = "primary", type="button", disabled = false, size= "default", children, className, onClick}: ButtonProps) => {
    const baseStyle = "inline-flex justify-center  items-center font-medium p-3 rounded-full gap-2 text-base whitespace-nowrap transition-colors cursor-pointer outline-none disabled:pointer-events-none disable:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
    const variants: Record<Variant,string> = {
        primary: "bg-primary-gradient",
        secondary: "bg-bg-dark text-white",
        success: "bg-success text-white",
    }
    const sizes: Record<Size, string> = {
         default: "h-9 px-4 py-2",
        sm: "h-8 gap-1.5 px-3",
        lg: "h-10 px-8 py-7",
    }
    return (
        <button disabled={disabled} type={type} onClick={onClick} className={cn(baseStyle, variants[variant], sizes[size], className)}>{children}</button>
    )
}

export default Button