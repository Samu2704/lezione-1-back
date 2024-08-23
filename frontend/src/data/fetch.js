const fetchURL = "http://localhost:5000/authors"
export const loadAuthors = async () => {
    const res = await fetch(fetchURL)
    const data = await res.json()
    return data
}

const postAuthors = async () => {
    const res = await fetch(fetchURL, {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            name: "jsjsjsj",
            surname: "cgcgcgcg",
            email: "ememememem"
        })

    })
const data = await res.json()
return data
}

const putAuthors = async (id) =>{
    //console.log(id)
    const res = await fetch(fetchURL, + `${id}`, {
        
        headers: {
            "content-type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({
            avatar:
            "https://tse3.mm.bing.net/th?id=OIP.9Btjsmc2REIDnvL48BXp6wHaFj&pid=Api&P=0&h=180"
        })
    })
    if (!res.ok) console.log(res)
        const data = await res.json();
    return data;
}


export const DelAuthor = async (id) => {
    const res = await fetch(fetchURL + `/${id}`, {
       
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    if (!res.ok) console.log(res);
    const data = await res.json();
    //console.log(data)
    return data;
  };
 