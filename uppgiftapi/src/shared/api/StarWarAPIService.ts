import http from './StarWarAPI'

const getLukeSkyWalker = () =>{
    return http.get('/people/1')

}

const getStarsWarCharecter = ( id: any) =>{
    return http.get(`/people/${id}`)
}

export default{
    getLukeSkyWalker,
    getStarsWarCharecter
}


