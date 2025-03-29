function filterList() {
    let input = document.getElementById('search').value.toLowerCase();
    let listItems = document.querySelectorAll('#activityList li');
    let headings = document.querySelectorAll('#activityList h3');

    listItems.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    headings.forEach(heading => {
        let nextElements = [];
        let next = heading.nextElementSibling;

        while (next && next.tagName !== 'H3') {
            nextElements.push(next);
            next = next.nextElementSibling;
        }

        let hasVisibleItems = nextElements.some(el => el.style.display === 'block');

        if (hasVisibleItems) {
            heading.style.display = 'block';
        } else {
            heading.style.display = 'none';
        }
    });
}
