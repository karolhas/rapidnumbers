//hooks
import { StaticImageData } from "next/image";

//components
import FlagButton from "./FlagButton";

interface LanguageSettingsProps {
   title: string;
   label: string;
   flagSrcPl: StaticImageData;
   flagSrcEn: StaticImageData;
   onClick: () => void;
}

const LanguageSettings: React.FC<LanguageSettingsProps> = ({
   title,
   label,
   flagSrcPl,
   flagSrcEn,
   onClick,
}) => (
   <div className="p-4 mb-4 flex justify-between items-center rounded-xl shadow-insetShadow">
      <h2 className="text-xl font-medium uppercase mr-[150px]">{title}</h2>
      <FlagButton
         label={label}
         flagSrc={label === "pl" ? flagSrcPl : flagSrcEn}
         onClick={onClick}
      />
   </div>
);

export default LanguageSettings;
