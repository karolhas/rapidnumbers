interface TimerDisplayProps {
   milliseconds: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ milliseconds }) => {
   const formatTime = (milliseconds: number) => {
      const minutes = Math.floor((milliseconds % 3600000) / 60000);
      const seconds = Math.floor((milliseconds % 60000) / 1000);
      const ms = milliseconds % 100;

      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
         2,
         "0"
      )}:${String(ms).padStart(2, "0")}`;
   };

   return (
      <p className="absolute text-xl top-[2vh] left-[50%] translate-x-[-50%]">
         Czas: {formatTime(milliseconds)}
      </p>
   );
};

export default TimerDisplay;
