


const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach(button => {
  button.addEventListener('click', event => {
    const tabContent = document.querySelector(`#${event.target.id}-content`);
    const otherTabs = document.querySelectorAll(`.tab-content:not(#${event.target.id}-content)`);

    tabContent.style.display = 'block';
    otherTabs.forEach(tab => tab.style.display = 'none');
  });
});

