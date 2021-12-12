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
            let div1 = document.createElement('div');
            div1.classList.add('block1', 'border');
            let button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = 'Show comments';
            div1.innerHTML = `<h3>ID - ${post.id}</h3> <p>Title: ${post.title}</p>`;


            button.onclick = function () {
                div1.innerHTML = `<p>${post.body}</p>`;
                let button1 = document.createElement('button');
                button1.innerText = 'Hide comments';
                button1.onclick = function () {
                    div1.innerHTML = `<h3>ID - ${post.id}</h3> <p>Title: ${post.title}</p>`;
                    div1.append(button);
                }
                div1.append(button1);
            }
            mainDiv.append(div1);
            div1.append(button);
        }
        document.body.append(mainDiv);
    });