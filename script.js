document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bgMusic");
    const wishMessage = document.getElementById("wishMessage");
    const balloonsContainer = document.getElementById("balloons");

    function startCelebration() {
        // Play background music
        bgMusic.play();

        // Display the birthday wish with animation
        wishMessage.textContent = "🎂 Happy Birthday Ananya! 🎉 Wishing you all the happiness in the world!";
        wishMessage.classList.remove("hidden");
        wishMessage.classList.add("fadeIn");

        // Fire confetti with heart shapes
        fireConfetti();

        // Create floating balloons
        generateBalloons(20);

        // Start fireworks
        launchFireworks();
    }

    function fireConfetti() {
        if (typeof confetti === "function") {
            confetti({
                particleCount: 200,
                spread: 180,
                origin: { y: 0.6 },
                shapes: ['heart'],
                colors: ['#ff69b4', '#ff1493', '#ff4500', '#ff6347', '#ffa07a']
            });
        } else {
            console.error("Confetti function is not available.");
        }
    }

    function generateBalloons(count) {
        for (let i = 0; i < count; i++) {
            let balloon = document.createElement("div");
            balloon.classList.add("balloon");
            balloon.style.left = Math.random() * 90 + "%";
            balloon.style.animationDuration = (Math.random() * 3 + 4) + "s";
            balloonsContainer.appendChild(balloon);
        }
    }

    function launchFireworks() {
        gsap.to(".firework", {
            opacity: 1,
            scale: 2,
            duration: 1,
            stagger: 0.3,
            repeat: 5,
            yoyo: true
        });
    }

    // Attach event listener to button
    document.querySelector(".btn").addEventListener("click", startCelebration);
});
