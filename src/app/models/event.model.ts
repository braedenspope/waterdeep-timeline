import { Character } from './character.model';
import { HarptosDate } from './harptos-date.model';
import { Location } from './location.model';


export interface Event {
    id : number;
    title: string;
    description: string;
    date: HarptosDate;
    involvedCharacters: Character[];
    location: Location
}