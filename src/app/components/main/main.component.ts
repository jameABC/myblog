import { Component } from '@angular/core';
import { CommonModule , NgOptimizedImage} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  template: `
<section data-bs-version="5.1" class="menu menu1 cid-sOn4DV5YRt" once="" id="menu1-16">
   <nav class="navbar navbar-dropdown navbar-expand-lg">
        <div class="container">
            <div class="navbar-brand">
                <span class="navbar-logo">
                    <a href="/">
                        <img ngSrc="assets/images/log.ico" alt="" width="3" height="3" >
                    </a>
                </span>
                <span class="navbar-caption-wrap"><a class="navbar-caption text-black display-7" href="/">{{title}}</a></span>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                    <li class="nav-item"><a class="nav-link link text-black display-4" href="#header1-p">
                            Main</a></li>
                    <li class="nav-item"><a class="nav-link link text-black display-4" href="#article8-1c">
                            About Me</a></li>
                    <li class="nav-item"><a class="nav-link link text-black display-4" href="#contact2-17">Contact Me</a>
                    </li>
                </ul>


            </div>
        </div>
    </nav>
</section>

<!-- 1 -->

<section data-bs-version="5.1" class="header1 cid-sNHVg6lxOV" id="header1-p">





    <div class="container">
        <div class="row header-wrap">
            <div class="col-lg-6 col-md-12 ">
                <div class="header-title">
                    <h2 class="mbr-section-subtitle mbr-fonts-style mb-4 display-7"> <strong>M HASSAN</strong>
                    </h2>
                    <h1 class="mbr-section-title mbr-fonts-style mb-3 strong display-1"><strong>SHORT STORY</strong><br><strong>AUTHOR</strong></h1>
                    <p class="mbr-text mbr-fonts-style display-5">
                        Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit. Senectus arcu nulla viverra arcu.</p>
                    <div class="mbr-section-btn mt-4 mbr-text "><a class="btn btn-black display-4 " href="#"><strong>CONTACT ME</strong></a></div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-md- image-wrapper">
                <img class="w-100 header-ml" src="assets/images/main.jpg" alt="" >
            </div>
        </div>
    </div>
</section>



<!--  -->

<section data-bs-version="5.1" class="contact2 cid-sOn8TZMYtW" id="contact2-17">





    <div class="container">
        <div class="row align-items-center justify-content-center contact-wrap">
            <div class="col-lg-8 col-md-12">
                <div class="contact">
                    <h6 class="mbr-section-title mbr-fonts-style mb-0 display-7">CONTACT
                    </h6>
                    <div class="contact-container mbr-text">
                        <a href="#">
                            <p class="mbr-fonts-style display-5" href="#">
                                <strong>laser&#64;creativex.com</strong></p>
                        </a>
                        <a class="mbr-fonts-style display-5">
                            <p href="#"><strong>(123) 456 - 7890</strong></p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="contact-links">
                    <h6 class="mbr-title mbr-fonts-style mb-0 display-7">FOLLOW ME</h6>
                    <div class="contact-links-container">
                        <ul class="mbr-link mbr-fonts-style display-5">
                            <li><a href="https://www.facebook.com" class="mbr-fonts-style"><p>
                                <strong>Facebook</strong>
                                <span class="mobi-mbri mobi-mbri-gift"></span></p>
                            </a></li>
                            <li><a href="https://twitter.com" class="mbr-fonts-style"><p><strong>Twitter</strong><span class="mobi-mbri mobi-mbri-growing-chart mbr-iconfont"></span></p></a></li>
                            <li><a href="https://www.instagram.com" class="mbr-fonts-style"><p><strong>Instagram</strong><span class="mobi-mbri mobi-mbri-growing-chart mbr-iconfont"></span></p></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  `,
  styles: `
  .navbar-toggler:focus{
    box-shadow:none;
  }
  :host{
    scroll-behavior:smooth;
  }

  `
})
export class MainComponent {
  title = 'myblog';

  constructor(private router: Router){
    this.router.navigate(['/'], { fragment: "" });
  }
}
