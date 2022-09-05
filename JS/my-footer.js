class myFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="container-fluid footer py-5">
    <div class="container py-5" style="min-height: 300px; width: 100%;">
       <div class="row">
          <div class="col-md-4 footer-content">
               <h3 style="font-weight: bold;">UPCONSTRUCTION</h3><br>
               <span>A108 Adam Street</span><br>
               <span>NY 523521, USA</span><br><br>
               <span><span style="font-weight: bold;">Phone : </span>+1 5589 55488 55</span><br>
               <span><span style="font-weight: bold;">Email :</span> info@example.com</span>
               <div class="footer-social-links">
                   <a href="" class="footer-social"><i class="fa-brands fa-twitter"></i></a>
                   <a href="" class="footer-social"><i class="fa-brands fa-facebook"></i></a>
                   <a href="" class="footer-social"><i class="fa-brands fa-instagram"></i></a>
                   <a href="" class="footer-social"><i class="fa-brands fa-linkedin-in"></i></a>
               </div>
          </div>
          <div class="col-md-2 footer-content">
            <p class="footer-link-title">Useful Links</p>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="projects.html">Terms of service</a></li>
              <li><a href="blogs.html">Privacy policy</a></li>
          </div>
          <div class="col-md-2 footer-content">
            <p class="footer-link-title">Our Services</p>
              <li><a href="">Web Design</a></li>
              <li><a href="">Web Development</a></li>
              <li><a href="">Product Management</a></li>
              <li><a href="">Marketing</a></li>
              <li><a href="">Graphic Design</a></li>
          </div>
          <div class="col-md-2 footer-content">
            <p class="footer-link-title">Hic solutasetp</p>
              <li><a href="">Molestiae accusamus iure</a></li>
              <li><a href="">Excepturi dignissimos</a></li>
              <li><a href="">Suscipit distinctio</a></li>
              <li><a href="">Dilecta</a></li>
              <li><a href="">Sit quas consectetur</a></li>
          </div>
          <div class="col-md-2 footer-content">
            <p class="footer-link-title">Nobis illum</p>
              <li><a href="">Ipsam</a></li>
              <li><a href="">Laudantium dolorum</a></li>
              <li><a href="">Dinera</a></li>
              <li><a href="">Trodelas</a></li>
              <li><a href="">Flexo</a></li>
          </div>
       </div>
    </div>
    <div class="container footer-underline"></div>
    <div style="color: white; width: 100%;" class="copy-right">
      <p style="text-align: center;">© Copyright <span style="font-weight: bold;">Mahmudul Hasan.</span> All Rights Reserved</p>
      <p style="text-align: center; font-size: 14px; line-height: 0;">Designed by: <span style="color: var(--orange);">Mahmudul Hasan</span></p>
    </div>
   </div>
        `
    }
}

customElements.define('my-footer', myFooter)