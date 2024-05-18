//components
import { Button } from "@/app/components/Button";

interface ConfirmModalProps {
   isOpen: boolean;
   onConfirm: () => void;
   onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
   isOpen,
   onConfirm,
   onCancel,
}) => {
   if (!isOpen) {
      return null;
   }

   return (
      <div className="w-[100vw] h-[100vh] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex bg-[#00000080] backdrop-blur-sm justify-center items-center z-50">
         <div className="bg-[#fff] p-8 rounded-lg text-center dark:bg-[#dadada]">
            <p className="dark:text-slate-800 text-lg">
               Czy na pewno chcesz zacząć od nowa?
            </p>
            <div className="space-x-4">
               <Button
                  variant="default"
                  size="sm"
                  className="mt-4 dark:text-slate-800 dark:border-slate-800 dark:hover:text-slate-300"
                  onClick={onConfirm}
               >
                  TAK
               </Button>
               <Button
                  variant="default"
                  size="sm"
                  className="mt-4 dark:text-slate-800 dark:border-slate-800 dark:hover:text-slate-300"
                  onClick={onCancel}
               >
                  NIE
               </Button>
            </div>
         </div>
      </div>
   );
};

export default ConfirmModal;
