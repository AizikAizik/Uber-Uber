export type ScreenType = 'MapScreen' | 'EatScreen';

export interface NavData  {
    id: string;
    image: string;
    title: string;
    screen: ScreenType;
}