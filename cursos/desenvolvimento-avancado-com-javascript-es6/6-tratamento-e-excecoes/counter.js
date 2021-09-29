let contador = 0;
        const btn = document.querySelector('[data-js="btn"]');
        btn.addEventListener('click', (event) => {
            contador++
            document.querySelector('[data-js="contador"]').innerHTML = `Contador: ${contador}`
        })