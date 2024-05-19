function addEntry() {
    const dateInput = document.getElementById('date').value;
    const entryInput = document.getElementById('entry').value;

    // Create a new article element
    const article = document.createElement('article');
    article.classList.add('post');

    // Create a third-level heading
    const heading = document.createElement('h3');
    heading.textContent = 'Date: ' + dateInput;

    // Create a paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Entry: ' + entryInput;

    // Append heading and paragraph to the article
    article.appendChild(heading);
    article.appendChild(paragraph);

    // Append the article to the #posts container
    const postsContainer = document.getElementById('posts');
    postsContainer.appendChild(article);

    // Clear the date and entry inputs
    document.getElementById('date').value = '';
    document.getElementById('entry').value = '';

    // Add double click event listener to remove the post
    article.addEventListener('dblclick', function () {
        postsContainer.removeChild(article);
    });
}
