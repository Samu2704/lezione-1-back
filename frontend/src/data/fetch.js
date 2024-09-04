//const fetchAuthorsURL = "http://localhost:5000/authors"
//const FetchBlogPostsUrl = "http://localhost:5000/posts";

// export const loadAuthors = async () =>{
//     const res = await fetch ('http://localhost:5000/authors')
//     const data = await res.json();
//     return data
// }

export const loadPosts = async () =>{
    const res = await fetch ('http://localhost:5000/posts')
    const data = await res.json();
    return data
}

export const newPost = async (formValue,cover) =>{
    const formData = new FormData()
    formData.append('cover', cover)
    formData.append('category', formValue.category)
    formData.append('title', formValue.title)
    formData.append('readTime', JSON.stringify(formValue.readTime))
    formData.append('author', formValue.author)
    formData.append('content', formValue.content)
    const res= await fetch ('http://localhost:5000/posts', {
        
        method: "POST",
        body: formData
    })
    const data = await res.json() 
    // loadPosts()
    return data
} 

export const login = async (formValue) => {
    const res = await fetch('http://localhost:5000/api/v1/login', {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        body:JSON.stringify (formValue)
    })
    const data = await res.json();
    return data
}

export const me = async() =>{
    const res = await fetch('http://localhost:5000/api/v1/me',{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    const data = await res.json();
    return data
}

export const register = async (regFormValue, avatar) => {
    console.log(regFormValue)
    const formData = new FormData()
    formData.append('avatar', avatar)
    formData.append('name', regFormValue.name)
    formData.append('surname', regFormValue.surname)
    formData.append('email', regFormValue.email)
    formData.append('password', regFormValue.password)
    console.log(formData)
    try {
        const res = await fetch('http://localhost:5000/api/v1/register', {
            // headers: {
            //     "Content-Type": "application/json"
            // },
            method: 'POST',
            body:formData
        })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
    
}