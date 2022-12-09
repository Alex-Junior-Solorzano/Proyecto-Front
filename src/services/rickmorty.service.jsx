import http from "../http-common";

class RickMortyDataServices{
    getAll(){
        return http.get("/character");
    }

    get(id) {
        return http.get(`/character/:${id}`);
      }

      findByName(name) {
        return http.get(`/character/?name=${name}`);
      }

}

export default new RickMortyDataServices();