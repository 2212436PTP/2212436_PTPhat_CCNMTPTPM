"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

interface SubmitButtonProps {
  children: ReactNode;
  pendingText?: string;
  disabled?: boolean;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
}

export default function SubmitButton({
  children,
  pendingText = "Đang xử lý...",
  disabled = false,
  className,
  variant = "default",
  size = "default",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant={variant}
      size={size}
      disabled={pending || disabled}
      className={
        className ?? "w-full disabled:opacity-50 disabled:cursor-not-allowed"
      }
    >
      {pending ? pendingText : children}
    </Button>
  );
}
