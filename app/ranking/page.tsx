//components
import { Button } from "@/app/components/Button";
import Container from "@/app/components/Container";

const Ranking: React.FC = () => {
   return (
      <Container>
         <h1 className="text-[24px] text-center font-medium">Wkrótce . . .</h1>
         <Button
            variant="default"
            size="default"
            href="/"
            className="absolute bottom-20"
         >
            WRÓĆ
         </Button>
      </Container>
   );
};

export default Ranking;
