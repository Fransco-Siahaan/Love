gsap.from('.hero',{y : -80, opacity : 0, duration : 1});

// Utama

const sandi = '18-11-2022';

const id = document.getElementById('id');
const paragraf = document.createElement('p');
paragraf.textContent = 'Salah';
paragraf.classList.add('wrong');

function masuk(){
    const pass = id.value;
    const tl1 = gsap.timeline();

    // down

    gsap.from('#down',{
        opacity : 0,
        y : -40,
        duration : .9
    });

    if(pass === sandi){
        gsap.to('.hero',{
            y : -60,
            duration : 1
        });

        // menghilankan class element form
        
        const formElement = document.querySelector('.form');
        formElement.classList.add('hilang');

        // tampil gambar

        const artic = document.querySelector('.gambars');
        artic.classList.add('photo');

    }else{
        document.querySelector('.form').append(paragraf);
    }

    tl1.to('.hilang', {
        scale : 1.2,
        duration : .2,
        ease : 'power1.inOut',
    }).to('.hilang',{
        scale : 0,
        duration : .2,
        CSS : {
            PointerEvent : 'none'
        }
    });
}

document.body.addEventListener('keydown', () => {
    if(event.key == 'Enter'){
        masuk();
    }
})

const listkenangan = document.querySelectorAll('.list');

listkenangan.forEach((value) => {
    console.log(value.textContent);

    value.addEventListener('click', () => {
        const cerita = document.querySelector('.cerita');
        const kenangan = document.querySelector('.kenangan');
        const pesan = document.querySelector('.pesan');

        cerita.classList.remove('opencerita');
        kenangan.classList.remove('opengambar');
        pesan && pesan.classList.remove('openpesan');

        if(value.textContent === 'Gambar'){
            kenangan.classList.add('opengambar');
            gsap.from('.box',{
                y : -180,
                opacity : 0,
                duration : 1,
                stagger : .3,
                ease : "back.out(1.7)"
            });
    
            gsap.from('img',{
                opacity : 0
            });
        }
        else if(value.textContent === 'Cerita'){
            cerita.classList.add('opencerita');
            gsap.from('.cerita span',{
                x : -10,
                opacity : 0,
                stagger : .2,
                duration : .5,
                ease : 'back.out(1.7)'
            });
        }
        else if(value.textContent === 'Pesan'){
            pesan.classList.add('openpesan');
            gsap.from('.pesan',{
                scale : 0,
                opacity : 0,
                duration : .8,
                ease : 'back.out(1.7)'
            });
        }
    })
});

const btnAy = document.querySelector('.btn-ay');

btnAy.addEventListener('click', function(){
    gsap.from('.ay',{
        height : 0,
        duration : .6,
        opacity : 0,
    });
    document.querySelector('.ay').classList.add('openay');
});

const deletePesanAy = document.querySelector('.x-ay');
deletePesanAy.addEventListener('click',function(){
    document.querySelector('.ay').classList.remove('openay');
});

const btnHani = document.querySelector('.btn-hani');

btnHani.addEventListener('click', function(){
    gsap.from('.hani',{
        height : 0,
        duration : .6,
        opacity : 0,
    });
    document.querySelector('.hani').classList.add('openhani');
});

const deletePesanHani = document.querySelector('.x-hani');
deletePesanHani.addEventListener('click',function(){
    document.querySelector('.hani').classList.remove('openhani');
});