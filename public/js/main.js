axios.get("http://127.0.0.1:3003")
.then(response => {
    const posts = response.data
    console.log(posts)

    let container = document.querySelector('body')

    posts.forEach((post, index) => {
        const markupPost = `
            <h2>Post ${index + 1}</h2>
            <p>Titolo: ${post.titolo}</p>
            <p>Contenuto: ${post.contenuto}</p>
            <img src="${post.img}" alt="Immagine del Post">
            <p>Tag: ${post.tags.join(", ")}</p>
        `
        container.insertAdjacentHTML("beforeend", markupPost)
    })

    }).catch(error => {
        console.error("Errore:", error);
    })














