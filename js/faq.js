
document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
            const answer = faq.querySelector(".answer");
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
