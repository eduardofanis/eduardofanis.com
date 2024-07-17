import { animated, useSpring } from "@react-spring/web";
import { HTMLAttributes, ReactNode } from "react";

export function AnimatedContainer({
  children,
  ...rest
}: {
  children: ReactNode;
}) {
  const style = useSpring({
    from: { y: -100 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -100, opacity: 0 },
    to: { y: 0 },
  });

  return (
    <animated.div style={style} {...rest}>
      {children}
    </animated.div>
  );
}

export default AnimatedContainer as unknown as React.FC<
  HTMLAttributes<HTMLDivElement>
>;
