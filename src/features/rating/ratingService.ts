import { userRating } from './ratingModel';
import { executeQuery } from '../../database/connection';

export class RatingService{
    static async createRating(data: userRating){
        const {id_user, id_movie, rating, comments} = data;
        const query = "CALL CreateRating(?, ?, ?, ?)";
        const results = await executeQuery(query, [id_user, id_movie, rating, comments]);
        return results[0][0];
    }
}