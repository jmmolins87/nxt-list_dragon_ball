




import CharacterList from "@/components/characters/characterList";
import { Header } from "@/components/Header";


export default function Home() {
  return (
    <div className="max-w-11/12 sm:max-w-10/12 mx-auto">
      <Header />
      <div>
        <CharacterList />
      </div>
    </div>
  );
}
