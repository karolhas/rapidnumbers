"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/Button";

interface ThemeSettingsProps {
  title: string;
  label: string;
  onClick: () => void;
}

const ThemeSettings: React.FC<ThemeSettingsProps> = ({
  title,
  label,
  onClick,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="p-4 mb-4 flex justify-between items-center rounded-xl shadow-insetShadow">
      <h2 className="mr-12 text-xl font-medium uppercase">{title}</h2>
      <Button
        variant="default"
        size="sm"
        onClick={onClick}
        className="h-7 px-3 text-base"
      >
        {label}
      </Button>
    </div>
  );
};

export default ThemeSettings;
