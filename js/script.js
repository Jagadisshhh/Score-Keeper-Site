const p1Btn = document.querySelector('#p1Btn');
        const p2Btn = document.querySelector('#p2Btn');
        const reset = document.querySelector('#reset');
        const p1Score = document.querySelector('#p1Score');
        const p2Score = document.querySelector('#p2Score');
        const times = document.querySelector('#times');
        const h1 = document.querySelector('h1');
        let p1Current =0;
        let p2Current =0;
        let valueTimes =1;
        times.addEventListener('change', function (e){
            valueTimes = times.value;
        })
        
        p1Btn.addEventListener('click', function () {
            
            p1Current +=1;
            if(p1Current==valueTimes){
                p1Btn.disabled=true;
                p2Btn.disabled = true;
            }
            p1Score.innerText = p1Current;
            if(p1Score.innerText == valueTimes && p2Score.innerText <= valueTimes) {
                p1Score.style.color = 'green'
                p2Score.style.color ='red'
            }
        })
        
        p2Btn.addEventListener('click', function () {
            
            p2Current +=1;
            if(p2Current==valueTimes){
                p1Btn.disabled=true;
                p2Btn.disabled =true;
            }
            p2Score.innerText = p2Current;
            if(p2Score.innerText ==valueTimes  && p1Score.innerText <= valueTimes ) {
                p2Score.style.color = 'green'
                p1Score.style.color = 'red'
            }
        })
        reset.addEventListener('click', function () {
            // h1.innerHTML = `<span id="p1Score">0</span> to <span id="p2Score">0</span>`;
            p1Score.innerText = '0';
            p2Score.innerText = '0';
            p1Current =0;
            p2Current =0;
            p1Score.style.color = 'black'
            p2Score.style.color ='black'
            p1Btn.disabled=false;
            p2Btn.disabled=false;
        })