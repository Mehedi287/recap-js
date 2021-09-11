localStorage.setItem('name', 'mehedi hasan');
localStorage.setItem('user id', 907980);
document.getElementById('btn').addEventListener('click', function () {
    const storageKey = document.getElementById('storage-key');
    const key = storageKey.value;
    storageKey.value = '';
    const storageValue = document.getElementById('storage-value');
    const value = storageValue.value;
    storageValue.value = '';
    localStorage.setItem(key, value)
})
const name = 'Hero'; const age = 34;

const person = { name, age }; console.log(person);
