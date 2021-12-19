fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            console.log(user);
            let userDiv = document.createElement('div');
            userDiv.classList.add('wrap');
            userDiv.innerText = `User-id: ${user.id}, Name: ${user.name}`;
            let linkDiv = document.createElement('div');
            linkDiv.classList.add('item');
            let link = document.createElement('a');
            link.innerText = 'Get more details';
            link.href = 'user-details.html?id=' + user.id;


            linkDiv.append(link);
            userDiv.append(linkDiv);
            document.body.append(userDiv);
        }





    })
