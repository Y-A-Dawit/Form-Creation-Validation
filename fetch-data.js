document.addEventListener('DOMContentLoaded', fetchUserData());
const fetchUserData = async() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = '<ul>';
        users.forEach(user => {
            const li = document.createElement('li') // here "createElement" is a dom property that creates elements
            li.textContent = users.name;
            userList.appendChild(li)
        })
        dataContainer.appendChild(userList);
    } catch {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.'
    }
}