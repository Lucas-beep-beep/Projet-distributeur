"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "light" | "solid";
  color?: "primary" | "success" | "error" | "warning" | "info" | "light" | "dark";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function Badge({
  children,
  variant = "light",
  color = "primary",
  startIcon,
  endIcon,
}: BadgeProps) {
  return (
    <span className={`badge badge-${variant} badge-${color}`}>
      {startIcon && <span className="icon">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="icon">{endIcon}</span>}
    </span>
  );
}
