// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('block');
        for (const post of posts) {
            console.log(post);
            let div1 = document.createElement('div');
            div1.classList.add('block1', 'border');
            let button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = 'Show comments';
            div1.innerHTML = `<h3 class="title">ID - ${post.id}</h3> <p class="title">Title: ${post.title}</p> <p>Info: ${post.body}</p>`;


            button.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            console.log(comment);
                            if (post.id === comment.postId) {
                                let div2 = document.createElement('div');
                                div2.classList.add('block2');
                                div2.innerHTML = `<h4 class="title">Comments id - ${comment.id}</h4>
                                     <p class="title">Name - ${comment.name}</p>
                                     <h3>Email: ${comment.email}</h3>
                                     <p>Info - ${comment.body}</p>`;
                                div1.append(div2);
                            }
                        }
                    })
                button.disabled = true;
            }
            mainDiv.append(div1);
            div1.append(button);
        }
        document.body.append(mainDiv);
    });