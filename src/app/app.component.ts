import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
declare const animate:any;
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'cv-app';

  //youtube module
    player: YT.Player;
    

    savePlayer(player) {
      this.player = player;
      console.log('player instance', player);
    }
    onStateChange(event) {
      {passive: false}
      console.log('player state', event.data);
    }

    private id: string = 'tefMQxSR3fw';

  //elements and ngIfs f0r photogrid     
    changeText: boolean;
      constructor() {
         this.changeText = false;
         this.getScreenSize();
     }

     collapsed:any;
     changeText1 = false;
     changeText2 = false;
     changeText3 = false;
     changeText4 = false;
     changeText5 = false;
     changeText6 = false;
     changeText7 = false;

  //hidden elements for resized elements
    screenHeight: number;
    screenWidth: number;

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          // will NOT throw violation, some stupid chrome violation
          document.addEventListener("resize", function(e) {
            e.preventDefault(); // does nothing since the listener is passive
          }, {
            passive: true
          });

          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;

          if (this.screenWidth <= 880) {
            $(".rightYT, #mySidenav").css({"display": "none"});
            $("#smallYt").css({"display": "flex"});  
          }else if(this.screenWidth > 880){
            $("#smallYt").css({"display": "none"});
            $(".rightYT, #mySidenav, .splitscreen .rightYT").css({"display": "flex"});  
          }

          // will NOT throw violation
          document.addEventListener("resize", function(e) {
            e.preventDefault(); // does nothing since the listener is passive
          }, {
            passive: true
          });
    } 

  //image list under current projects
    backgroundImage = 'assets/images/Background.png';
    profileImg = 'assets/images/Image.png';

    imageList = [
    	{name:'assets/images/Posters.jpg'},
    	{name:'assets/images/Vukovi4.jpg'},
  	  {name:'assets/images/windowsLinux.jpg'},
    	{name:'assets/images/Final Projects.png'}, 
    	{name:'assets/images/maven.jpeg'},
    	{name:'assets/images/Logo Design.png'},
    	{name:'assets/images/VisualStudio.png'},
    	{name:'assets/images/Other.jpg'}
   	];

     image0 = this.imageList[0];
     image1 = this.imageList[1];
     image2 = this.imageList[2];
     image3 = this.imageList[3];
     image4 = this.imageList[4];
     image5 = this.imageList[5];
     image6 = this.imageList[6];
     image7 = this.imageList[7];

    imageLink = [
       {link:'https://drive.google.com/drive/u/0/folders/1RWiCo3uKYBDf2WxpncX3BQNShhtKKnhM'},
       {link:'https://drive.google.com/drive/u/0/folders/1TB4UKX7Z9h5uDVGxBY405id_sN3YZUZq'},
       {link:'https://drive.google.com/drive/u/0/folders/1wKg8H6vVqP5iDNfJC5x0UxGYUW9Fi_bs'},
       {link:'https://drive.google.com/drive/u/0/folders/1uKSH94ZQF0-wgqf7Muky2eEkiaX829Kn'},
       {link:'https://drive.google.com/drive/u/0/folders/1_PaLhpWK3Siaez2_aridxdIJf6_0RMOu'},
       {link:'https://drive.google.com/drive/u/0/folders/1R5ZqKxqR8NQv6NX354DRPaX9uTdaVDsW'},
       {link:'https://drive.google.com/drive/u/0/folders/1DmarHHVIr9gTL_UJTP_BZ5PxuWjA3IsX'},
       {link:'https://drive.google.com/drive/u/0/folders/1kPT1u0FZ-G0qqBNjU1gwtD2F6v-iCkLe'},
     ];

     link0 = this.imageLink[0];
     link1 = this.imageLink[1];
     link2 = this.imageLink[2];
     link3 = this.imageLink[3];
     link4 = this.imageLink[4];
     link5 = this.imageLink[5];
     link6 = this.imageLink[6];
     link7 = this.imageLink[7];

  //social media links at footer and sidebar 
    SEList = [
      {link:'https://hub.docker.com/u/goran27vujovic27'},
      {link:'https://dribbble.com/goranvujovic27'},
      {link:'https://github.com/goranvujovic'},
      {link:'https://www.iconfinder.com'}, 
      {link:'https://www.instagram.com/goran_vujovic_/'},
      {link:'https://www.linkedin.com/in/goranvujovic'},
      {link:'https://stackoverflow.com/users/12149281/goran-vujovic'},
      {link:'https://www.youtube.com/channel/UCykReQMNYMBWo1N0a6A-g3w?view_as=subscriber'}
     ];

   SE0 = this.SEList[0];
   SE1 = this.SEList[1];
   SE2 = this.SEList[2];
   SE3 = this.SEList[3];
   SE4 = this.SEList[4];
   SE5 = this.SEList[5];
   SE6 = this.SEList[6];
   SE7 = this.SEList[7];

  //social media images list at footer
   SEimages=[
     {image:'assets/images/SEIcons/docker.png'},
     {image:'assets/images/SEIcons/dribble.png'},
     {image:'assets/images/SEIcons/git.png'},
     {image:'assets/images/SEIcons/facebook.png'},
     {image:'assets/images/SEIcons/instagram.png'},
     {image:'assets/images/SEIcons/linkedIn.png'},
     {image:'assets/images/SEIcons/stack.png'},
     {image:'assets/images/SEIcons/yt.png'}
   ];

   SEI0 = this.SEimages[0];
   SEI1 = this.SEimages[1];
   SEI2 = this.SEimages[2];
   SEI3 = this.SEimages[3];
   SEI4 = this.SEimages[4];
   SEI5 = this.SEimages[5];
   SEI6 = this.SEimages[6];
   SEI7 = this.SEimages[7];
   SEI8 = this.SEimages[8];

  //experiance list per year list
    expList=[
       {exp:'HTML5, CSS3, Java (Eclipse), Monte Vista, Corel Draw X5, Astah'},
       {exp:'Adobe Photoshop CS6, Cisco Packet Tracer, Joomla 3, Wordpress'},
       {exp:'Javascript, MySQL, Oracle,  Virtual OSs, Adobe Premiere CS6'},
       {exp:'PHP, Android Studio, After Effects CC, More Magic Computers, XML'},
       {exp:'Illistrator, JQuery, Visual Basic, Visual Studio, Wireshark, JSON'},
       {exp:'Mircosoft Project, The Remax Collection Adriatic, Wireframes, Smart Housing & Self Automation'},
       {exp:'Typescript, Phyton, Angular 8, Django, React, Xmarmin, C, C++'}
     ];

     exp2013 = this.expList[0];
     exp2014 = this.expList[1];
     exp2015 = this.expList[2];
     exp2016 = this.expList[3];
     exp2017 = this.expList[4];
     exp2018 = this.expList[5];
     exp2019 = this.expList[6];
     
  //exp dropdown events
      expDropAll(event) { 
        $(".triangle, .t3, .t4, .t5, .t6, .t7, .t8, .t9").css({"display": "table-cell", "color": "yellow"});
       }

      hideAll(event) { 
         $(".triangle, .t3, .t4, .t5, .t6, .t7, .t8, .t9").css({"display": "none"});
       }

       expDrop3(event) { 
        $(".t3").css({"display": "table-cell", "color": "yellow"}); 
       }

      hide3(event) { 
         $(".t3").css({"display": "none"});
       }
       expDrop4(event) { 
        $(".t4").css({"display": "table-cell", "color": "yellow"}); 
       }

      hide4(event) { 
         $(".t4").css({"display": "none"});
       }
       expDrop5(event) { 
        $(".t5").css({"display": "table-cell", "color": "yellow"}); 
       }

      hide5(event) { 
         $(".t5").css({"display": "none"});
       }
       expDrop6(event) { 
        $(".t6").css({"display": "table-cell", "color": "yellow"}); 
       }

      hide6(event) { 
         $(".t6").css({"display": "none"});
       }

       expDrop7(event) { 
        $(".t7").css({"display": "table-cell", "color": "yellow"}); 
       }

      hide7(event) { 
         $(".t7").css({"display": "none"});
       }

       expDrop8(event) { 
        $(".t8").css({"display": "table-cell", "color": "yellow"}); 
       }

      hide8(event) { 
         $(".t8").css({"display": "none"});
       }

       expDrop9(event) { 
        $(".t9").css({"display": "table-cell", "color": "yellow"}); 
       }

      hide9(event) { 
         $(".t9").css({"display": "none"});
       }

  //on initicialized elements that onload of page
    ngOnInit(){
      //called after the constructor and called  after the first ngOnChanges() 
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;

      if (this.screenWidth <= 600) {
        $(".rightYT, #mySidenav").css({"display": "none"});
        $("#smallYt").css({"display": "flex"});  
      }else if(this.screenWidth > 600){
        $("#smallYt").css({"display": "none"});
        $(".rightYT, #mySidenav, .splitscreen .rightYT").css({"display": "flex"});  
      }
  }
}

