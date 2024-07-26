const writeList = document.querySelector('#write_list');
const form = document.querySelector('form');
const list = document.querySelector('#list');



const SubmitEvent = (event) => {
    event.preventDefault();

    if(writeList.value !== '') {
        
        const listItem = document.createElement('li');
        const listButton = document.createElement('button');
        const listSpan = document.createElement('span');

        const delItem = (event) => {
            const target = event.target.parentElement;
            target.remove();
        }

        listButton.innerText = '삭제';
        listButton.addEventListener('click',delItem);

        listSpan.innerText = writeList.value;


        listItem.appendChild(listSpan);
        listItem.appendChild(listButton);
        list.appendChild(listItem);
    
        writeList.value = '';
    }
}

form.addEventListener('submit',SubmitEvent);