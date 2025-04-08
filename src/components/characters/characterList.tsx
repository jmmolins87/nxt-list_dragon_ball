



import { getCharacters } from "@/services/characters.service";
import { Card } from "./Card";


const CharacterList = async () => {

    const characters = await getCharacters()

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-3">
            {
                characters.map((character) => {
                    return (
                        <Card key={character.id} character={character} />
                    )
                })
            }
        </section>
    )
}

export default CharacterList;