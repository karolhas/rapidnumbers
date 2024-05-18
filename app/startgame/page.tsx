import { Suspense } from "react";
import StartGameContent from "../components/StartGameContent";

export default function StartGamePage() {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <StartGameContent />
      </Suspense>
   );
}
