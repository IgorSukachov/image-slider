let imgs = document.querySelectorAll('li img')
                    
imgs.forEach(li => {
    li.addEventListener('click', (e) => {
        let img = ['img1_large.jpg',
                    'img2_large.jpg',
                    'img3_large.jpg',
                    'img4_large.jpg']   

        let globalImg = document.getElementById('slider')
        if ( e.target ==  imgs[0]) {                  
            globalImg.src = img[0]
        } else if ( e.target ==  imgs[1]) {
            globalImg.src = img[1]
        } else if ( e.target ==  imgs[2]) {
            globalImg.src = img[2]
        } else if (e.target ==  imgs[3]) {                    
            globalImg.src = img[3]
        }                        
    })
})