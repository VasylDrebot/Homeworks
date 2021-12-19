let url = new URL(location.href);
let postID = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/posts/' + postID)
    .then(response => response.json())
    .then(posts => {
        let div = document.createElement('div');
        div.classList.add('main');
        let h3_1 = document.createElement('h3');
        h3_1.innerText = `User-id: ${posts.userId}`;
        let h3_2 = document.createElement('h3');
        h3_2.innerText = `Id: ${posts.id}`;
        let h3_3 = document.createElement('h3');
        h3_3.innerText = `Title: ${posts.title}`;
        let p = document.createElement('p');
        p.innerText = `Info: ${posts.body}`;
        let id = posts.id;
        fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then(response => response.json())
            .then(comments => {
                let wrapDiv = document.createElement('div');
                wrapDiv.classList.add('wrap');
                for (const comment of comments) {
                    let mainDiv = document.createElement('div');
                    mainDiv.classList.add('comment');
                    let postId = document.createElement('h3');
                    postId.innerText = `Post-id: ${comment.postId}`;
                    let commentId = document.createElement('h3');
                    commentId.innerText =`Id: ${comment.id}`;
                    let commentName = document.createElement('p');
                    commentName.innerText =`Name: ${comment.name}`;
                    let email = document.createElement('p');
                    email.innerText =`Email: ${comment.email}`;
                    let body = document.createElement('p');
                    body.innerText =`Info: ${comment.body}`;
                    mainDiv.append(postId, commentId, commentName, email, body);
                    wrapDiv.append(mainDiv);
                }
                document.body.append(wrapDiv);
            })

        div.append(h3_1, h3_2, h3_3, p);
        document.body.append(div);
    })