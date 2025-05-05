const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const list = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
  const text = input.value.trim();
  if (text !== '') {
    const li = document.createElement('li');
    li.textContent = text;
    li.addEventListener('click', () => li.remove()); // クリックで削除
    list.appendChild(li);
    input.value = '';
  }
});