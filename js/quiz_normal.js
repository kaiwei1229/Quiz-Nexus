window.onload = function () {
    for (let i = 0; i < 4; i++) {
        document.getElementById("opt-" + i).addEventListener("click", () => {
            handleAnswer(i);
        });
    }

    initGame();
};
