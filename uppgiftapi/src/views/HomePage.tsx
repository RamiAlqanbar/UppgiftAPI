import Axios, { AxiosResponse } from 'axios'
import React, { useState, useEffect } from 'react'
import {useDebounce} from '../hooks/useDebounce'
import StarWarAPIService from '../shared/api/StarWarAPIService'
import ApiService from '../shared/api/StarWarAPIService'
import './HomePage.css'


export const HomePage = () => {
    const [data, setData] =  useState<any>()
    const [characterID, setCharacterId] = useState<string>('')
    const debounceSearchTerm = useDebounce(characterID, 300)
    /*
    const fetchData = () =>{
        ApiService.getLukeSkyWalker()
        .then( response => { console.log(response)})
        .catch(error => {console.log(error)})

    }
    */

    const fetchData = async(x: string) =>{
        if(debounceSearchTerm){
            const {data} =  await StarWarAPIService.getStarsWarCharecter(x)
            setData(data)
        }
        
    }

    useEffect(() =>{
        fetchData(characterID)
    }, [debounceSearchTerm])
    

    const fetchData2 = async () =>{
        try{
            const response = await ApiService.getStarsWarCharecter(characterID)
            setData(response.data)
        } catch(error){
                console.log('error :', error)
        } finally{

        }
        
    }

    return (
        <div >
           
            <input placeholder='Search by id' onChange={event => setCharacterId(event.target.value)}/>
            <h1>Name : {data?.name}</h1>
            <h1>Gender : {data?.gender}</h1>
            <h1>Hair color: {data?.hair_color}</h1>
            <h1>Height : {data?.height}</h1>
            <h1>Eye color : {data?.eye_color}</h1>
        </div>
    )
}
