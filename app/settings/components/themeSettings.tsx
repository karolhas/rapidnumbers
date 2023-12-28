"use client";

interface ThemeSettingsProps {
  title: string;
  label: string;
  onClick: () => void;
}

const ThemeSettings: React.FC<ThemeSettingsProps> = ({
  title,
  label,
  onClick,
}) => (
  <div className="settings_box">
    <h2 className="mr-12">{title}</h2>
    <button className="" onClick={onClick}>
      {label}
    </button>
  </div>
);

export default ThemeSettings;
