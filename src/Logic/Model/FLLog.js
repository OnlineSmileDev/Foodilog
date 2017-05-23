import  type { FLDish, } from './FLDish'

export type FLLog = {
  id: string,
  userId: string,
  userName: string,
  restaurantId: string,
  restaurantName: string,
  score: number,
  ambiance: number,
  service: number,
  taste: number,
  overall: number,
  likes: number,
  timestamp: number,
  photos: Array<string>,
  dishes: Array<FLDish>,
  comment: string,
  liked: Bool = false
  favourate: boolean,
  background: string,

};