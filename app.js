((e)=>{

    const img = e.getElementById('slide');
    

    let index =1;

    img.src =`./sources/slide/hill${index}.jpg`

     setInterval(() => {

         img.src =`./sources/slide/hill${index}.jpg`
         index++;

         if(index===4) index = 1;
     
        }, 4000);
})(document);