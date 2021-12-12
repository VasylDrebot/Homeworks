// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('block');
        for (const post of posts) {
            let div1 = document.createElement('div');
            div1.classList.add('block1', 'border');
                div1.innerHTML = `<h3>ID - ${post.id}</h3> <p>Title: ${post.title}</p> Info: <p>${post.body}</p>`;

                mainDiv.appendChild(div1);

        }
        document.body.append(mainDiv);
    });


//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let mainDivComments = document.createElement('div');
        mainDivComments.classList.add('block')
        for (const comment of comments) {
            let divComments = document.createElement('div');
            divComments.classList.add('block1', 'border1')
            divComments.innerHTML = `<h4>Comments id - ${comment.id}</h4>
                                     <p>Name - ${comment.name}</p> 
                                     <h3>Email: ${comment.email}</h3>  
                                     <p>Info - ${comment.body}</p>`;
            mainDivComments.appendChild(divComments);
        }
        document.body.append(mainDivComments);
    })
