
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Spartan", sans-serif;
  }
  
html {
    scroll-behavior: smooth;
  }

  h1 {
    font-size: 50px;
    line-height: 64px;
    color: #222;
  }


  h2 {
    font-size: 46px;
    line-height: 54px;
    color: #222;
  }
  
  h4 {
   
    color: #222;
  }
  
  h6 {
    font-weight: 700;
    font-size: 12px;
  }

  
p {
  font-size: 16px;
  color: #465b52;
  margin: 15px 0 20px 0;
}
  
/*header start */


#header{                /*add img for header background */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px,80px;
  background: #f7dada;
  box-shadow: 0 5px 15px rgba(242, 5, 179, 0.06);
  z-index:999;
  position: sticky;
  top: 0;
  right: 0;
}

/*navbar start */
#navbar{
   
    display: flex;
    align-items: center;
    justify-content: space-between;
   
}

#navbar li{
     list-style: none;
     padding: 0 20px;
}

#navbar li a{

    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    transition: 0.3s ease;
}


#navbar li a:hover{
    color: #fb62cd;
}



#hero {
    background-image: url("Image/background/bg2.png");
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: top 25% right 0; 
    padding:  0 90px; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

  }
#hero h4 {
    padding-bottom: 15px;
}
  
  #hero h2{
    font-weight: bold;
    font-size: 40px;
  }

  
#hero p span{
    color: #ef3636;
    font-weight: bold;

}
  
  #hero h1 {
    color: #088178;
    font-weight: bold;
    font-size: 41px;
   
  }
  
  #hero p {
    font-size: 40px;
    font-size: 33px;
  }


  /*3D button ok */

  #hero .button {
    display: flex;
    display: flex;
    align-items: center;
    justify-content: right;
  
  }

  
  #hero button {
    border-radius: 49px;
    border: 1px solid #333;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    font-size: 1.6em;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.6s ease-in-out;
  }
  
  #hero button:hover {
    background-color: #000;
  }

  
  .button {
    position: relative;
    padding: 20px 32px;
    border-radius: 20px;
    border: none;
    color: #fff;
    cursor: pointer;
    background-color: #ffffff;
    transition: all 0.10s ease;
  }
  .button:active {
    transform: scale(0.79);
  }
  .button:before,
  .button:after {
    position: absolute;
    content: "";
    width: 250%;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    z-index: -1000;
    background-repeat: no-repeat;
  }
  .button.animate::before {
    top: -70%;
    background-image: radial-gradient(circle, #333 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, #333 20%, transparent 30%),
      radial-gradient(circle, #333 20%, transparent 20%),
      radial-gradient(circle, #333 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #333 15%, transparent 20%),
      radial-gradient(circle, #333 20%, transparent 20%),
      radial-gradient(circle, #333 20%, transparent 20%),
      radial-gradient(circle, #333 20%, transparent 20%),
      radial-gradient(circle, #333 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
      10% 10%, 18% 18%;
    animation: greentopBubbles ease-in-out 0.8s forwards infinite;
  }
  @keyframes greentopBubbles {
    0% {
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
        40% 90%, 55% 90%, 70% 90%;
    }
    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
        50% 50%, 65% 20%, 90% 30%;
    }
    100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
        50% 40%, 65% 10%, 90% 20%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }
  .button.animate::after {
    bottom: -70%;
    background-image: radial-gradient(circle, #333 20%, transparent 20%),
      radial-gradient(circle, #333 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #333 15%, transparent 20%),
      radial-gradient(circle, #333 20%, transparent 20%),
      radial-gradient(circle, #333 20%, transparent 20%),
      radial-gradient(circle, #333 20%, transparent 20%),
      radial-gradient(circle, #333 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
    animation: greenbottomBubbles ease-in-out 0.8s forwards infinite;
  }
  @keyframes greenbottomBubbles {
    0% {
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
        70% -10%, 70% 0%;
    }
    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
        105% 0%;
    }
    100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
        110% 10%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }

/* end of button click */


/* soscimida icon add left start ok*/
#meicon{
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
#meicon body{
  font-family: 'Montserrat', sans-serif;
  background: url(bg.jpeg);
  background-position: center;
  background-size: cover;
  height: 100vh;
}
 #meicon{
  position: fixed;
  width: 55px;
  margin-top: 60px;
  transition: all 0.3s linear;
  box-shadow: 2px 2px 8px 0px rgba(0,0,0,.4);
}
#meicon li{
  height: 60px;
  position:relative;
}
#meicon li a{
  color: white;
  display: block;
  height: 100%;
  width: 100%;
  line-height: 60px;
  padding-left:30%;
  border-bottom: 1px solid rgba(0,0,0,.4);
  transition: all .3s linear;
}
#meicon li:nth-child(1) a{
  background: #4267B2;
}
#meicon li:nth-child(2) a{
  background: #1DA1F2;
}
#meicon li:nth-child(3) a{
  background: #E1306C;
}
#meicon li:nth-child(4) a{
  background: #2867B2;
}
#meicon li:nth-child(5) a{
  background: #333;
}
#meicon li:nth-child(6) a{
  background: #ff0000;
}
#meicon li a i{
  position:absolute;
  top: 17px;
  left: 15px;
  font-size: 27px;
}
ul li a span{
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: none;
}
#meicon a:hover {
  z-index:1;
  width: 200px;
  border-bottom: 1px solid rgba(0,0,0,.5);
  box-shadow: 0 0 1px 1px rgba(0,0,0,.3);
}
#meicon ul li:hover span{
  padding-left: 25%;
  display: block;
}
/* socimida icon end */


.section-m1{
     margin: 40px 0px;
} 

.section-P1{

    padding: 80px 40px;
  }


button.normal{
    font-size: 16px;
    font-weight: 600;
    padding: 15px 30px;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline:none;
    transition: 0.2s;
}

  #feature{
     display: flex;
     align-items:center;
     justify-content: space-between;
     flex-wrap: wrap;
  }

  #feature .fe-box {
     width: 200px;
     text-align: center;
     padding: 25px 15px;
     box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
     border: 1px solid #cce7d0;
     border-radius: 4px;
     margin: 15px 0px;
  }

#feature .fe-box:hover{
 box-shadow: 10px 10px 54px rgba(1, 0, 6, 0.1);
 }

 #feature .fe-box img{
     width: 100%;
     margin-bottom:50px;   
 }
 

 #feature .fe-box h6{
     display: inline-block;
     padding: 9px 8px 6px 8px;
     line-height: 1;
     border-radius: 4px;
     color: #088178;
     background-color: #fddde4;
 }

 #products1 .pro-container{
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: wrap;
 }


#products1{
        text-align: center;
 }

 #products1 .pro{
     width:15%;
     min-width: 250px;
     padding: 10px 20px;
     border: 1px solid #cce7d0;
     border-radius: 25px;
     cursor: pointer;
     box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
     margin: 20px 0px;
     position: relative;
   
}

#products1 .pro:hover{

    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}

#products1 .pro img{
    width:100%;
    border-radius: 20px;
}

#products1 .pro .des{
    text-align: start;
    padding: 10px 0;
}

#products1 .pro .des{
    color: #606063;
    font-size: 12px;
}

#products1 h2{
    font-size: 50px
}

#products1 p{
    font-size: 20px
}
#products1 .pro .des h5{
    padding-top: 7px;
    color: #1a1a1a;
    font-size: 14px;
}

#products1 .pro .des i{
     font-size: 12px;
     color: rgb(243, 181, 25)

}

#products1 .pro .des h4{
    padding-top: 7px;
    font-size: 15px;
    font-weight: 700;
    color: #088178;
}

#products1 .pro .cart{
    width: 35px;
    height: 35px;
    line-height: 40px;
    border-radius: 50px;
    background-color: #e8f6ea;
    font-weight: 500;
    color: #088178;
    border:1px solid #cce7d0;
    position:absolute;
    bottom: 20px;
    right: 10px;
}

#banner{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(Image/Banner/b2.jpg);
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-position: center;
}

#banner h3{
    font-size: 30px;
    color: palegoldenrod;
}

#banner h4{
    color: #fff;
    font-size: 16px;

}
#banner h2{
    color: #fff;
    font-size: 40px;
    padding: 10px 0;
}

#banner h2 span{
    color: #ef3636;

}

#banner button:hover{
    background: #088178;
    color: #fff;
}



#products2 .pro-container{
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  flex-wrap: wrap;
}


#products2{
      text-align: center;
}

#products2 .pro{
   width:16%;
   min-width: 180px;
   padding: 10px 15px;
   border: 1px solid #cce7d0;
   border-radius: 25px;
   cursor: pointer;
   box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
   margin: 10px 10px;
   position: relative;
 
}

#products2 .pro:hover{

  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}

#products2 .pro img{
  width:100%;
  border-radius: 20px;
}

#products2 .pro .des{
  text-align: start;
  padding: 10px 0;
}

#products2 .pro .des{
  color: #606063;
  font-size: 12px;
}

#products2 h2{
  font-size: 50px
}

#products2 p{
  font-size: 20px
}
#products2 .pro .des h5{
  padding-top: 7px;
  color: #1a1a1a;
  font-size: 14px;
}

#products2 .pro .des i{
   font-size: 12px;
   color: rgb(243, 181, 25)

}

#products2 .pro .des h4{
  padding-top: 7px;
  font-size: 15px;
  font-weight: 700;
  color: #088178;
}

#products2 .pro .cart{
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50px;
  background-color: #e8f6ea;
  font-weight: 500;
  color: #088178;
  border:1px solid #cce7d0;
  position:absolute;
  bottom: 20px;
  right: 10px;
}

#products2 h2 {
  color: #088178;
  font-weight: bold;
 
}

#products2 h3 span{
   font-size: 30px;
  color: red;
}

/* start bannar 1 to 2*/
#sm-banner{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 90px;
}


#sm-banner .banner-box1{
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(Image/Banner/ba001.png);
  min-width: 600px;
  height: 45vh;
  background-size: cover;
  background-position: center;
}

#sm-banner h3{
  font-weight: bold;
 font-size: 35px;
 color: #333;
 margin-left: -40px;
}

#sm-banner h4{
  font-weight: bold;
 font-size: 35px;
 color: #333;
 margin-left: -65px;
}

#sm-banner h4 span{
  color: red;
}

#sm-banner button{
   margin-left: -50px;
}

#sm-banner .banner-box2{
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(Image/Banner/ba002.jpg);
  min-width: 600px;
  height: 45vh;
  background-size: cover;
  background-position: center;

}


#sm-banner  .banner-box2 button{
   margin-left: 20%;
   margin-top: 250px;
}

#sm-banner .ba001{
  border-radius: 5px;
  font-size: 13px;
  font-weight: 600;
  padding: 11px 18px;
  color: #1a1a1a;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #000000 ;
  outline: none;
  transition: 0.2s;
}

#sm-banner .banner-box1:hover button{
  background-color: #088178;
  border: 1px solid #000000 ;
  
}

#sm-banner .ba002{
  border-radius: 5px;
  font-size: 13px;
  font-weight: 600;
  padding: 11px 18px;
  width: 14vh;
  color: #1a1a1a;
  cursor: pointer;
  border: 1px solid #000000 ;
  outline: none;
  transition: 0.2s;
}

#sm-banner .banner-box2:hover button{
  background-color: #FAE0D8;
  border: 1px solid #000000 ;
}


/* banner 3 to 4 */

#sm-banner{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 90px;
}


#sm-banner .banner-box3{

  margin-top: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(Image/Banner/ba003.png);
  min-width: 600px;
  height: 45vh;
  background-size: cover;
  background-position: center;
}

#sm-banner .banner-box3 h3{
  font-weight: bold;
 font-size: 35px;
 color: #333;
 margin-left: 95px;
}

#sm-banner .banner-box3 h4{
  font-weight: bold;
 font-size: 25px;
 color: #333;
 margin-left: 70px;
}

#sm-banner  .banner-box3 h4 span{
  color: red;
}

#sm-banner .banner-box3 button{
   margin-left: 50px;
}

#sm-banner .banner-box4{

  margin-top: 40px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(Image/Banner/ba004.png);
  min-width: 600px;
  height: 45vh;
  background-size: cover;
  background-position: center;
}


#sm-banner .banner-box4 h3{
  font-weight: bold;
 font-size: 40px;
 color: #1a1a1a;
 margin-top: 30px;
 margin-left: 10%;
}

#sm-banner .banner-box4 h4{
  font-weight: bold;
 font-size: 25px;
 color: #1a1a1a;
 margin-top: 5px;
 margin-left: 5%;
}


#sm-banner  .banner-box4 button{
   margin-left: 10%;
   margin-top: 20px;
}

#sm-banner .ba003{
  border-radius: 5px;
  font-size: 13px;
  font-weight: 600;
  padding: 11px 18px;
  color: #1a1a1a;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #000000 ;
  outline: none;
  transition: 0.2s;
}

#sm-banner .banner-box3:hover button{
  background-color: #088178;
  border: 1px solid #000000 ;
  
}

#sm-banner .ba004{
  border-radius: 5px;
  font-size: 13px;
  font-weight: 600;
  padding: 11px 18px;
  color: #1a1a1a;
  width: 14vh;
  cursor: pointer;
  border: 1px solid #000000 ;
  outline: none;
  transition: 0.2s;
}

#sm-banner .banner-box4:hover button{
  background-color: 	#2a83a7;
  border: 1px solid #000000 ;
}




/* end of 1 to 4 banner ok */


#banner1{

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(Image/Banner/banner02.jpg);
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
   
}


/*footer start */

body{
	line-height: 1.5;
	font-family: 'Poppins', sans-serif;
}

.container{
	max-width: 1170px;
	margin:auto;
}
.row{
	display: flex;
	flex-wrap: wrap;
}
ul{
	list-style: none;
}
.footer{
	background-color: #24262b;
    padding: 70px 0;
}
.footer-col{
   width: 25%;
   padding: 0 15px;
}
.footer-col h4{
	font-size: 18px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #e91e63;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}

/*footer End */

#slider-container {
  width: 80%;
  margin: auto;
  overflow: hidden;
}

#slider-container .slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

#slider-container .slide {
  min-width: 100%;
  box-sizing: border-box;
}

#slider-container .img {
  width: 100%;
  height: auto;
}

/* product click detalis */


#f1 {
 
  background-image: url("Image/bgimg.jpg");
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-position: top 25% right 0; 
  padding:  0 90px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  
}

 #p1text {
   font-size: 200%;
   font-weight: 600;
   padding-top: 10%;
   padding-bottom: 19%;
   padding-left: 52%;
  }


  /* Food project */


#food {
    background-image: url("Image/Food/foodbg.png");
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: top 25% right 0; 
    padding:  0 90px; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}



#food1 {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #ffffff;
}

.profood {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;
  justify-content: center;
}

.box {
  position: relative;
  width: 150px;
  height: 180px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s, transform 0.3s;
}

.box:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

 .box:hover img {
  transform: scale(1.2);
}

/* Add a glowing effect on hover */
.box:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  box-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 0 30px #00bcd4;
  animation: glow 1s infinite;
}

@keyframes glow {
  0% {
      box-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 0 30px #00bcd4;
  }
  50% {
      box-shadow: 0 0 20px #00bcd4, 0 0 30px #00bcd4, 0 0 40px #00bcd4;
  }
  100% {
      box-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 0 30px #00bcd4;
  }
}


/*img rotet*/

#rotateimg1 {
  position: absolute; 
  top: 23%;
  left:23%;
  transform: translate(-50%, -50%);
  width: 120px; 
  height: 110px; 
  animation: rotateImage 5s linear infinite;
}
#rotateimg2 {
  position: absolute;
  top: 76%;
  left:36%;
  transform: translate(-50%, -50%);
  width: 120px; 
  height: 110px; 
  animation: rotateImage 5s linear infinite; 
}
#rotateimg3 {
  position: absolute; 
  top: 23%;
  left:45%;
  transform: translate(-50%, -50%);
  width: 120px; 
  height: 110px; 
  animation: rotateImage 5s linear infinite; 
}
#rotateimg4 {
  position: absolute; 
  top: 74%;
  left: 64%;
  transform: translate(-50%, -50%);
  width: 120px; 
  height: 110px; 
  animation: rotateImage 5s linear infinite; 
}

#rotateimg5 {
  position: absolute; 
  top: 24%;
  left: 73%;
  transform: translate(-50%, -50%);
  height:110px; 
  width: 120px; 
  animation: rotateImage 5s linear infinite; 
}

@keyframes rotateImage {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
