// 
const parent_paragraphs = document.querySelector('[data_paragraphs_container]');
const child_paragraphs = parent_paragraphs.querySelectorAll('p');

const body_styles = getComputedStyle(document.body);
const body_background_color = body_styles.backgroundColor;
const font_color = '#ffffff';

for (let paragraph of child_paragraphs) {
    paragraph.style.backgroundColor = `${body_background_color}`;
    paragraph.style.color = `${font_color}`;
}