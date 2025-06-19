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

            }
        });
    });
});