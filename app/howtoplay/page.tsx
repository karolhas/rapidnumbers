//components
import { Button } from "@/app/components/Button";
import Container from "@/app/components/Container";
import { HowToPlayContent } from "../components/HowToPlayContent";

export default function HowToPlay() {
   return (
      <Container>
         <div className="grid grid-cols-1 justify-items-center items-center">
            <HowToPlayContent />
            <Button variant="default" size="default" href="/" className="mt-4">
               WRÓĆ
            </Button>
         </div>
      </Container>
   );
}
