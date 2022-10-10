 
const { RESTDataSource } = require('apollo-datasource-rest');
class MoviesAPI extends RESTDataSource 
{ 
     constructor() 
    {   
         super();   
         this.baseURL = 'http://localhost:50189/';  
    } 
    
     async getMovie(id) {  
          return this.get(`movies/${encodeURIComponent(id)}`); 
     }  async getMostViewedMovies(limit = 10) { 
           const data = await this.get('movies', { 
                 per_page: limit,   
               order_by: 'most_viewed',  
          });
        return data.results;
    }
}


