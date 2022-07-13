import axios from 'axios'
export const baseurl = 'https://bayut.p.rapidapi.com'



export const fetchapi = async(url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '9fc598df98mshacdc26f399e849bp15c0d4jsn1e89370f0781',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
}