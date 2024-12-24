document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.querySelector(".typing-text");
    const textToType = [
        "Web Development",
        "Web and Mobile app development",
        "Design and Editing",
        " AI & Machine Learning Solutions",
        "Cloud Solutions",
        "UI/UX Design",
        "Game Development",

    ]; // Add your comma-separated items here
    const typingSpeed = 200; // Typing speed in ms
    const erasingSpeed = 50; // Erasing speed in ms
    const delayBetweenTexts = 150; // Delay between typing and erasing

    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textToType[textIndex].length) {
            typingText.textContent += textToType[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenTexts);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = textToType[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            textIndex = (textIndex + 1) % textToType.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

// JavaScript for Popup
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const cancelButton = document.getElementById('cancelButton');

    // Show popup after 10 seconds of scrolling
    let scrollTimer;
    window.addEventListener('scroll', () => {
        if (!scrollTimer) {
            scrollTimer = setTimeout(() => {
                popup.style.display = 'flex';
            }, 10000); // Trigger after 10 seconds
        }
    });

    // Close popup when the cancel button is clicked
    cancelButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
