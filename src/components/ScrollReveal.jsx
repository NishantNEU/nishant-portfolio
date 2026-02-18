import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Reusable scroll reveal wrapper
 * Usage: <ScrollReveal type="scale" delay={2}> ... </ScrollReveal>
 *
 * type:  "default" | "scale" | "fade" | "left" | "right"
 * delay: 1-6 (maps to reveal-delay-1 through reveal-delay-6)
 */
export default function ScrollReveal({
  children,
  type = "default",
  delay = 0,
  className = "",
  as: Tag = "div",
  ...props
}) {
  const ref = useScrollReveal();

  const baseClass = {
    default: "reveal",
    scale: "reveal-scale",
    fade: "reveal-fade",
    left: "reveal-left",
    right: "reveal-right",
  }[type] || "reveal";

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${delayClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}