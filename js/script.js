const markdownInput = document.getElementById('markdownInput');
const preview = document.getElementById('preview');
const downloadButton = document.getElementById('downloadButton');

function updatePreview() {
    const markdownText = markdownInput.value;
    const htmlContent = marked.parse(markdownText);
    preview.innerHTML = htmlContent;
}

function downloadAsHTML() {
    const markdownText = markdownInput.value;
    const htmlContent = marked.parse(markdownText);
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'markdown.html';
    a.click();
    URL.revokeObjectURL(url);
}

markdownInput.addEventListener('input', updatePreview);
downloadButton.addEventListener('click', downloadAsHTML);

updatePreview(); // Initial call to display any default text
