import React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={"block text-sm font-medium text-gray-700 mb-1 " + (className || "")}
      {...props}
    />
  )
);
Label.displayName = "Label";
