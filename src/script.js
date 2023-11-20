const namaLaptop = document.querySelector('#nama-laptop')
const deskripsiLaptop = document.querySelector('#deskripsi-laptop')
const hargaLaptop = document.querySelector('#harga-laptop')
const maxLaptop = document.querySelector('#maksimal-laptop')
const gambarLaptop = document.querySelector('#gambar-laptop')
const nomorLaptop = document.querySelector('#nomor-laptop')


const hamburger = document.querySelector('#hamburger')
const navigation = document.querySelector('#navigation')

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active')
    navigation.classList.toggle('hidden')
});

const laptop = [
    {
        nomor : '1',
        nama: 'Unyil 15 - A11S',
        description: 'Laptop Terbaik abad 21',
        price: 'Rp. 10.000.000',
        img: './images/omen.png'
    },
    {
        nomor : '2',
        nama: 'Unyil S5 - A11B',
        description: 'Laptop Terbaik abad 22',
        price: 'Rp. 10.999.000',
        img: './images/laptop-2.png'
    },
    {
        nomor : '3',
        nama: 'Unyil 17 - A134S',
        description: 'Laptop Terbaik abad 23',
        price: 'Rp. 10.900.500',
        img: './images/laptop3.png'
    },
    {
        nomor : '4',
        nama: 'Unyil 12 - A22S',
        description: 'Laptop Terbaik abad 24',
        price: 'Rp. 8.000.000',
        img: './images/laptop.png'
    },
    {
        nomor : '5',
        nama: 'Unyil 202 - K913',
        description: 'Laptop Terbaik abad 25',
        price: 'Rp. 9.000.000',
        img: './images/laptop-20.png'
    },
]

let nomor = 0
let maksimallaptop = laptop.length
let selected = {
    nomor: '1',
    nama: 'Unyil 15 - A11S',
    description: 'Laptop Terbaik abad 21',
    price: 'Rp. 10.000.000',
    img: './images/omen.png',
}

const previousButton = document.querySelector('#previousButton')
const nextButton = document.querySelector('#nextButton')

nextButton.addEventListener('click', function(){
    namaLaptop.classList.add('animate-fade')
    deskripsiLaptop.classList.add('animate-fade')
    hargaLaptop.classList.add('animate-fade')
    gambarLaptop.classList.add('animate-rotate-right')    

    if(nomor >= maksimallaptop - 1){
        nomor = 0
    }else{
        nomor++;
    }
    selected = laptop[nomor]
    
    setTimeout(function(){
        showData() 
    },400)

    setTimeout(function(){
        namaLaptop.classList.remove('animate-fade')
        deskripsiLaptop.classList.remove('animate-fade')
        hargaLaptop.classList.remove('animate-fade')
        gambarLaptop.classList.remove('animate-rotate-right') 
    },600)
})

previousButton.addEventListener('click', function(){
    namaLaptop.classList.add('animate-fade')
    deskripsiLaptop.classList.add('animate-fade')
    hargaLaptop.classList.add('animate-fade')
    gambarLaptop.classList.add('animate-rotate-left')  

    if(nomor <= 0){
        nomor = maksimallaptop - 1
    }else{
        nomor--;
    }
    selected = laptop[nomor]

    setTimeout(function(){
        showData() 
    },400)

    setTimeout(function(){
        namaLaptop.classList.remove('animate-fade')
        deskripsiLaptop.classList.remove('animate-fade')
        hargaLaptop.classList.remove('animate-fade')
        gambarLaptop.classList.remove('animate-rotate-left') 
    },600)
})

function showData(){
    nomorLaptop.innerText = selected.nomor
    namaLaptop.innerText = selected.nama
    deskripsiLaptop.innerText = selected.description
    hargaLaptop.innerText = selected.price
    gambarLaptop.src = selected.img
    maxLaptop.innerText = laptop[laptop.length -1].nomor
}

showData()