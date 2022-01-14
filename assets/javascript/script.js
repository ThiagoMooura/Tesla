function colapseOpen(){
    document.querySelector('.colapse-menu').classList.add('show');
    document.querySelector('body').style.overflowY='hidden';
    document.querySelector('.model-s').style.filter='brightness(70%) blur(0.2rem)';
    document.querySelector('.model-y').style.filter='brightness(70%) blur(0.2rem)';
    document.querySelector('.model-3').style.filter='brightness(70%) blur(0.2rem)';
    document.querySelector('.model-x').style.filter='brightness(70%) blur(0.2rem)';
    document.querySelector('.solar-panels').style.filter='brightness(70%) blur(0.2rem)';
    document.querySelector('.solar-roof').style.filter='brightness(70%) blur(0.2rem)';
    document.querySelector('.accessories').style.filter='brightness(70%) blur(0.2rem)';
    document.querySelector('.logo').style.filter='brightness(70%) blur(0.2rem)';
    document.querySelector('.menu-links').style.filter='brightness(70%) blur(0.2rem)';
    document.querySelector('.wrap').style.filter='brightness(70%) blur(0.2rem)';
    document.querySelector('.menu-links').style.pointerEvents='none';
}
function colapseClose(){
    document.querySelector('.colapse-menu').classList.remove('show');
    document.querySelector('body').style.overflowY='auto';
    document.querySelector('.model-s').style.filter='blur(0rem)';
    document.querySelector('.model-y').style.filter='blur(0rem)';
    document.querySelector('.model-3').style.filter='blur(0rem)';
    document.querySelector('.model-x').style.filter='blur(0rem)';
    document.querySelector('.solar-panels').style.filter='blur(0rem)';
    document.querySelector('.solar-roof').style.filter='blur(0rem)';
    document.querySelector('.accessories').style.filter='blur(0rem)';
    document.querySelector('.logo').style.filter='blur(0rem)';
    document.querySelector('.menu-links').style.filter='blur(0rem)';
    document.querySelector('.wrap').style.filter='blur(0rem)';
    document.querySelector('.menu-links').style.pointerEvents='auto';
}



function hov(){
    
    var scr = document.querySelector('.container').scrollTop;
    /*//MODEL S
    if(scr > 80){
        document.querySelector('.abc1').style.opacity='0';
    }
    if(scr < 80){
        document.querySelector('.abc1').style.opacity='1';
    }
    //MODEL Y
    if(scr > 430){
        document.querySelector('.abc2').style.opacity='1';
    }
    if(scr < 430 || scr > 750){
        document.querySelector('.abc2').style.opacity='0';
    }
    //MODEL 3
    if(scr > 1080){
        document.querySelector('.abc3').style.opacity='1';
    }
    if(scr < 1080 || scr > 1400){
        document.querySelector('.abc3').style.opacity='0';
    }
    //MODEL X
    if(scr > 1750){
        document.querySelector('.abc4').style.opacity='1';
    }
    if(scr < 1750 || scr > 2080){
        document.querySelector('.abc4').style.opacity='0';
    }
    //SOLAR PANELS
    if(scr > 2430){
        document.querySelector('.abc5').style.opacity='1';
    }
    if(scr < 2430 || scr > 2800){
        document.querySelector('.abc5').style.opacity='0';
    }
    //SOLAR ROOF
    if(scr > 3150){
        document.querySelector('.abc6').style.opacity='1';
    }
    if(scr < 3150 || scr > 3470){
        document.querySelector('.abc6').style.opacity='0';
    }
    //ACCESSORIES
    if(scr > 3820){
        document.querySelector('.abc7').style.opacity='1';
    }
    if(scr < 3820 || scr > 4170){
        document.querySelector('.abc7').style.opacity='0';
    }
    */
   //console.log((window.innerHeight)/2);
   
   var top = window.innerHeight;
   var scr = document.querySelector('.container').scrollTop;

   var resp = top/3;
   var resp1 = top/3.2;
   var resp2 = top/0.7;
   var resp3 = top/0.41;
   var resp4 = top/0.29;
   var resp5 = top/0.22;
   var resp6 = top/0.181;
   console.log('top = ' + top)
   console.log('scr = ' + scr)
   console.log('resposta = ' + resp)
   console.log('resposta2 = ' + resp2)
   console.log('resposta1 = ' + resp1)
   console.log('resposta3 = ' + resp3)
   console.log('resposta4 = ' + resp4)
   console.log('resposta5 = ' + resp5)
   console.log('resposta6 = ' + resp6)

   if(resp1 > scr){
    document.querySelector('.abc1').style.opacity='1'; 
    document.querySelector('.abc2').style.opacity='0';
    document.querySelector('.abc3').style.opacity='0';
    document.querySelector('.abc4').style.opacity='0';
    document.querySelector('.abc5').style.opacity='0';
    document.querySelector('.abc6').style.opacity='0';
    document.querySelector('.abc7').style.opacity='0';
   }
   if(resp < scr){
    document.querySelector('.abc1').style.opacity='0'; 
    document.querySelector('.abc2').style.opacity='1';
    document.querySelector('.abc3').style.opacity='0';
    document.querySelector('.abc4').style.opacity='0';
    document.querySelector('.abc5').style.opacity='0';
    document.querySelector('.abc6').style.opacity='0';
    document.querySelector('.abc7').style.opacity='0';
   }
   if(resp2 < scr){
    document.querySelector('.abc1').style.opacity='0'; 
    document.querySelector('.abc2').style.opacity='0';
    document.querySelector('.abc3').style.opacity='1';
    document.querySelector('.abc4').style.opacity='0';
    document.querySelector('.abc5').style.opacity='0';
    document.querySelector('.abc6').style.opacity='0';
    document.querySelector('.abc7').style.opacity='0';
   }
   if(resp3 < scr){
    document.querySelector('.abc1').style.opacity='0'; 
    document.querySelector('.abc2').style.opacity='0';
    document.querySelector('.abc3').style.opacity='0';
    document.querySelector('.abc4').style.opacity='1';
    document.querySelector('.abc5').style.opacity='0';
    document.querySelector('.abc6').style.opacity='0';
    document.querySelector('.abc7').style.opacity='0';
   }
   if(resp4 < scr){
    document.querySelector('.abc1').style.opacity='0'; 
    document.querySelector('.abc2').style.opacity='0';
    document.querySelector('.abc3').style.opacity='0';
    document.querySelector('.abc4').style.opacity='0';
    document.querySelector('.abc5').style.opacity='1';
    document.querySelector('.abc6').style.opacity='0';
    document.querySelector('.abc7').style.opacity='0';
   }
   if(resp5 < scr){
    document.querySelector('.abc1').style.opacity='0'; 
    document.querySelector('.abc2').style.opacity='0';
    document.querySelector('.abc3').style.opacity='0';
    document.querySelector('.abc4').style.opacity='0';
    document.querySelector('.abc5').style.opacity='0';
    document.querySelector('.abc6').style.opacity='1';
    document.querySelector('.abc7').style.opacity='0';
   }
   if(resp6 < scr){
    document.querySelector('.abc1').style.opacity='0'; 
    document.querySelector('.abc2').style.opacity='0';
    document.querySelector('.abc3').style.opacity='0';
    document.querySelector('.abc4').style.opacity='0';
    document.querySelector('.abc5').style.opacity='0';
    document.querySelector('.abc6').style.opacity='0';
    document.querySelector('.abc7').style.opacity='1';
   }
   
    //1618 1015
   /*
   if((top > 100 && top < 400)){
    document.querySelector('.abc1').style.opacity='1';
   }if((top > 400)){
    document.querySelector('.abc1').style.opacity='0';  
    document.querySelector('.abc2').style.opacity='0';  
    
   }if((top > 700 && top < 1060)){
    document.querySelector('.abc2').style.opacity='1';
   }if(top > 1060){
    document.querySelector('.abc2').style.opacity='0';  
    document.querySelector('.abc3').style.opacity='0';    
   }
   
   if((top > 1360 && top < 1720)){
    document.querySelector('.abc3').style.opacity='1';
   }if(top > 1720){
    document.querySelector('.abc3').style.opacity='0';  
    document.querySelector('.abc4').style.opacity='0';  
   }

   if((top > 2020 && top < 2360)){
    document.querySelector('.abc4').style.opacity='1';
   }if(top > 2360){
    document.querySelector('.abc4').style.opacity='0';  
    document.querySelector('.abc5').style.opacity='0';  
   }

   if((top > 2660 && top < 3020)){
    document.querySelector('.abc5').style.opacity='1';
   }if(top > 3020){
    document.querySelector('.abc5').style.opacity='0';  
    document.querySelector('.abc6').style.opacity='0';    
   }

   if((top > 3320 && top < 3680)){
    document.querySelector('.abc6').style.opacity='1';
   }if(top > 3680){
    document.querySelector('.abc6').style.opacity='0';
    document.querySelector('.abc7').style.opacity='0';    
   }

   if((top > 3980 && top < 4340)){
    document.querySelector('.abc7').style.opacity='1';
   }if(top > 4340){
    document.querySelector('.abc7').style.opacity='0';   
   }*/
   

}




window.document.querySelector('.container').addEventListener('scroll', hov);