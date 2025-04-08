





import { Character, CharactersModel } from "@/models/Character.model"

const API_URL = "https://dragonball-api.com/api/characters"

export const getCharacters = async () => {
    const responseCharacters = await fetch(`${API_URL}?limit=58`, {
        cache: "force-cache"  // se fuerza a la cache para que no esté haciendo tantas peticiones al server
    })
    const character: CharactersModel = await responseCharacters.json()
    return character.items
}

export const getCharacterById = async (id: string) => {
    const responseCharacters = await fetch(`${API_URL}/${id}`, {
        next: {
            revalidate: 3600 * 24 // cada cuanto se va a verificar el API, para verificar la parte estática con el servidor
        }
    })
    const character: Character = await responseCharacters.json()
    return character
}