const fetchUserData = async() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);
        const jsonUserData = await response.json();
    } catch {

    }
}