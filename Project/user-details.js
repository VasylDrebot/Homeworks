let url = new URL(location.href);
let userID = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users/' + userID)
    .then(response => response.json())
    .then(users => {
        let div = document.createElement('div');
        div.classList.add('main');
        let div1 = document.createElement('div');
        let id = document.createElement('h4');
        id.innerText = `User-id: ${users.id}`;
        let name = document.createElement('h4');
        name.innerText =`Name: ${users.name}`;
        let user_name = document.createElement('h4');
        user_name.innerText = `Username: ${users.username}`;
        let email = document.createElement('h4');
        email.innerText = `Email: ${users.email}`;

        let div2 = document.createElement('div');
        let address = document.createElement('ul');
        address.innerText = `Address`;
        let street = document.createElement('li');
        street.innerText = `Street: ${users.address.street}`;
        let suite = document.createElement('li');
        suite.innerText = `Suite: ${users.address.suite}`;
        let city = document.createElement('li');
        city.innerText = `City: ${users.address.city}`;
        let zipcode = document.createElement('li');
        zipcode.innerText = `Zipcode: ${users.address.zipcode}`;

        let geo = document.createElement('ul');
        geo.innerText = `Geo:`
        let lat = document.createElement('li');
        lat.innerText = `${users.address.geo.lat}`;
        let lng = document.createElement('li');
        lng.innerText = `${users.address.geo.lng}`;
        let phone = document.createElement('h4');
        phone.innerText = `Phone: ${users.phone}`;
        let website = document.createElement('h4');
        website.innerText = `Website: ${users.website}`;

        let div3 = document.createElement('div');
        let company = document.createElement('ul');
        company.innerText = `Company:`;
        let company_name = document.createElement('li');
        company_name.innerText = `Name: ${users.company.name}`;
        let catch_phrase = document.createElement('li');
        catch_phrase.innerText = `Catch phrase: ${users.company.catchPhrase}`;
        let bs = document.createElement('li');
        bs.innerText = `Bs: ${users.company.bs}`;

        div.append(div1, div2, div3);
        div1.append(id, name, user_name, email);
        div2.append(address);
        address.append(street, suite, city, zipcode, geo);
        geo.append(lat, lng);
        div3.append(phone, website, company );
        company.append(company_name, catch_phrase, bs);
        document.body.append(div);

        let button = document.createElement('button');
        button.classList.add('button');
        button.innerText = 'Post of current user';
        button.onclick = function () {
            let id = users.id;
            fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
                .then(response => response.json())
                .then(posts => {
                    let postDiv = document.createElement('div');
                    postDiv.classList.add('post');
                    for (const post of posts) {

                        let titleDiv = document.createElement('div');
                        titleDiv.style.textAlign = 'justify';
                        titleDiv.innerText = `Title: ${post.title}`;
                        let info = document.createElement('a');
                        info.classList.add('link');
                        info.innerText = 'More information';
                        info.href = 'post-details.html?id=' + post.id;
                        postDiv.append(titleDiv);
                        titleDiv.append(info);

                        button.disabled = true;
                    }
                    document.body.append(postDiv);
                })
        }
        document.body.append(button);
    })


