const fetchURL = "http://localhost:5000/authors"
 export const loadAuthors  = async()=>{
 const response =   await fetch(fetchURL)
 const data = await response.json()
 return data
}