let counts = setInterval(updated);
        let upto = 1000;
        function updated() {
            let count = document.getElementById("counter");
            count.innerHTML = --upto;
            if (upto === 0) {
                clearInterval(counts);
            }
        }