import { Character } from './character.model';
import { Location } from './location.model';


export interface Event {
    id : number;
    title: string;
    description: string;
    date: string;
    involvedCharacters: Character[];
    location: Location
}