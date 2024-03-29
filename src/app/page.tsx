import { GameCard } from "@/components/GameCard";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/quizzy");
  return (
    <div className="subjective w-screen h-screen pt-20 space-y-20">
      <h1 className="text-center text-5xl lg:text-6xl font-bold text-white">
        FrenzyHub
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-10">
        <GameCard name="Quizzy" picture="/picture/quiz.png" link="/quizzy" />

        <GameCard
          name="Guess The Song"
          picture="/picture/guesssonglogo.jpg"
          link="/guessthesong"
        />
      </div>
    </div>
  );
}
