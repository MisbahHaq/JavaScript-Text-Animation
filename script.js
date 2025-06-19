import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const animeTextParagraphs = document.querySelectorAll(".anime-text p");

    const wordHighlightBgColor = "60, 60, 60";

    const keywords = [
        "vibrant",
        "living",
        "clarity",
        "expression",
        "shape",
        "intuitive",
        "storytelling",
        "interactive",
        "vision",
    ];

    animeTextParagraphs.forEach((paragraph) => {
        const text = paragraph.textContent;
        const words = text.split(/\s+/);
        paragraph.innerHTML = "";

        words.forEach((word) => {
            if (word.trim()) {
                const wordContainer = document.createElement("div");
                wordContainer.className = "word";

                const wordText = document.createElement("span");
                wordText.textContent = word;


                const normalizedWord = word.toLowerCase().replace(/[.,!?;:*]/g, "");
                if (keywords.includes(normalizedWord)) {
                    wordContainer.classList.add("keyword-wrapper");
                    wordText.classList.add("keyword", normalizedWord);
                }
                wordContainer.appendChild(wordText);
                paragraph.appendChild(wordContainer);
            }
        });
    });

    const animeTextContainers = document.querySelectorAll(
        ".anime-text-container"
    );

    animeTextContainers.forEach((container) => {
        ScrollTrigger.create({
            trigger: container,
            pin: container,
            start: "top top",
            end: `+=${window.innerHeight * 4}`,
            pinSpacing: true,
        })
    })
});