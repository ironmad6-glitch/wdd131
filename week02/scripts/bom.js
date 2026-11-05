const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');







li.append(deleteButton);

list.append(li);

button.addEventListener('click', function () {
    //Code to execute when the button is clicked.
    if (input.value.trim() !== '') {
       const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    };
    input.value = '';
    input.focus();
});