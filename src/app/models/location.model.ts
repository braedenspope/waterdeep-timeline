import { CityWard } from './city-ward.enum';

export interface Location {
    id: number;
    name: string;
    ward: CityWard;
    description: string;
}