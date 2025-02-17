async function fetchUserData() {
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
const dataContainer = document.getElementById('api-data');
    
    try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = '';
    const userList = document.createElement('ul');
    users.forEach(user => { // 'user' refers to an individual object from the 'users' array.
        setTimeout(() => {
            const li = document.createElement('li') // here "createElement" is a dom property that creates elements
            li.textContent = user.name;
            userList.appendChild(li);
        }, 150);

    });
    dataContainer.appendChild(userList);
    } catch(error) {
        setTimeout(() => {
            dataContainer.innerHTML = '';
            dataContainer.textContent = 'Failed to load user data.'
        }, 150);
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);