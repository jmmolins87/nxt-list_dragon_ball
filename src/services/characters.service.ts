





import { Character, CharactersModel } from "@/models/Character.model"

const API_URL = "https://dragonball-api.com/api/characters"

export const getCharacters = async () => {
    const responseCharacters = await fetch(`${API_URL}?limit=58`, {
        cache: "force-cache"
    })
    const character: CharactersModel = await responseCharacters.json()
    return character.items
}

export const getCharacterById = async (id: string) => {
    const responseCharacters = await fetch(`${API_URL}/${id}`, {
        cache: "force-cache"
    })
    const character: Character = await responseCharacters.json()
    return character
}