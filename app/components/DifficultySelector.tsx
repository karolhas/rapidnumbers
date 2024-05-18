//components
import { Button } from "@/app/components/Button";

//icons
import { IoSkull, IoHappy } from "react-icons/io5";

interface DifficultySelectorProps {
   title: string;
   selectedDifficulty: string | null;
   onDifficultyChange: (level: string) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
   title,
   selectedDifficulty,
   onDifficultyChange,
}) => (
   <div className="text-center">
      <h2 className="mb-4 text-xl font-medium uppercase">{title}</h2>
      <div className="space-x-4">
         <Button
            variant={selectedDifficulty === "normal" ? "active" : "default"}
            size="default"
            onClick={() => onDifficultyChange("normal")}
         >
            <IoHappy
               size="20"
               className="mr-2 text-slate-800 dark:text-slate-300"
            />
            NORMAL
         </Button>
         <Button
            variant={selectedDifficulty === "hardcore" ? "active" : "default"}
            size="default"
            onClick={() => onDifficultyChange("hardcore")}
         >
            <IoSkull
               size="20"
               className="mr-2 text-slate-800 dark:text-slate-300"
            />
            HARDCORE
         </Button>
      </div>
   </div>
);

export default DifficultySelector;
