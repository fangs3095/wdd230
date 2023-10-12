const list = document.querySelector('#list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (input.value != '') {
    let item = input.value;
    const listItem = document.createElement('li');
    const listBtn = document.createElement('button');

    listItem.textContent= item;
    listBtn.textContent = "❌";
    listItem.append(listBtn);
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
      list.removeChild(listItem);
      input.focus();
    });
  }
  input.value = '';
  input.focus();
});


