const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.src = siteContent['nav']['img-src']

// Updading navigation
let navLinks = document.querySelectorAll('nav a')
console.log(navLinks)

navLinks[0].text = siteContent.nav['nav-item-1'];
navLinks[1].text = siteContent.nav['nav-item-2'];
navLinks[2].text = siteContent.nav['nav-item-3'];
navLinks[3].text = siteContent.nav['nav-item-4'];
navLinks[4].text = siteContent.nav['nav-item-5'];
navLinks[5].text = siteContent.nav['nav-item-6'];

navLinks.forEach(item => {
  item.style.color = '#26bf1b';
  
})


let navigation = document.querySelector('nav')
let newLink = document.createElement('a')
newLink.innerText = 'Facebook'
navigation.append(newLink)

newLink.style.color = '#26bf1b'

let newLink2 = document.createElement('a')
newLink2.innerText = 'Twetter';
navigation.prepend(newLink2);

newLink2.style.color = '#26bf1b'

// const navi = document.querySelectorAll('nav a');
// navi.forEach((item, index) => {
//   item.textContent = siteContent['nav']['nav-item-' + (index + 1)];
// })


// cta section
let ctaText = document.querySelector('.cta-text h1')
siteContent.cta.h1 = "Dom <br> Is <br> Awesome"
ctaText.innerHTML = siteContent.cta['h1']

let ctaButton = document.querySelector('.cta-text button')
ctaButton.innerText = siteContent.cta['button']

let ctaImg = document.getElementById('cta-img')
ctaImg.src = siteContent.cta['img-src']

// Event Listener
ctaImg.addEventListener('mouseenter', () => {
  ctaImg.style.transform = 'scale(1.2)';
  ctaImg.style.transition = 'transform 0.3s';
})
ctaImg.addEventListener('mouseleave', () => {
  ctaImg.style.transform = 'scale(1)';
})

// Middle content
let textH4 = document.querySelectorAll('.text-content h4')
textH4[0].innerText = siteContent['main-content']['features-h4']
textH4[1].innerText = siteContent['main-content']['about-h4']
textH4[2].innerText = siteContent['main-content']['services-h4']
textH4[3].innerText = siteContent['main-content']['product-h4']
textH4[4].innerText = siteContent['main-content']['vision-h4']

// textH4.forEach((item, index) => {
//   item.textContent = siteContent.main-content['features-h4' + (index + 1)]
// })

let textp = document.querySelectorAll('.text-content p')
textp[0].innerText = siteContent['main-content']['features-content']
textp[1].innerText = siteContent['main-content']['about-content']
textp[2].innerText = siteContent['main-content']['services-content']
textp[3].innerText = siteContent['main-content']['product-content']
textp[4].innerText = siteContent['main-content']['vision-content']

let middleImg = document.getElementById('middle-img')
middleImg.src = siteContent['main-content']['middle-img-src']

// contact section
let contacth4 = document.querySelector('.contact h4')
contacth4.innerText = siteContent['contact']['contact-h4']

let contactp = document.querySelectorAll('.contact p')
contactp[0].innerText = siteContent['contact']['address']
contactp[1].innerText = siteContent['contact']['phone']
contactp[2].innerText = siteContent['contact']['email']

// footer section
let footerNote = document.querySelector('footer')
footerNote.innerText = siteContent['footer']['copyright']
