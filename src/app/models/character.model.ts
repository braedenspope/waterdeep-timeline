import { CharacterClass } from "./character-class.enum";

export interface Character {
    id: number;
    name: string;
    class: CharacterClass;
    race: string;
    background: string;
}