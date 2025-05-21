import Game from "@/components/Game";

function MenuPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <Game className="tablet:gap-10 gap-8">
        <Game.Logo />
        <Game.PickPlayer />
        <Game.PickMode />
      </Game>
    </main>
  );
}

export default MenuPage;
