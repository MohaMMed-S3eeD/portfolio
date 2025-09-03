import HeroSc from "@/components/HeroSc";
import Intros from "@/components/Intros";

export default function Home() {
  return (
    <div>
      <Intros />

      <HeroSc />
      <div className="h-[1000px]"></div>
    </div>
  );
}
