let url = ['https://www.youtube.com/embed/l8ZNTBAIoF4','https://www.youtube.com/embed/95xj9UHtInQ','https://www.youtube.com/embed/9FIu-jp-e0Q','https://www.youtube.com/embed/CcAfRyPNmGU','https://www.youtube.com/embed/wvvpoFBu48E','https://www.youtube.com/embed/IcC4IETBIls','https://www.youtube.com/embed/fNLBg3fM398','https://www.youtube.com/embed/Knd9dBr8xIw'];
window.addEventListener('load',()=>{
  let divIframe = document.querySelector('.div1');
  for(let x = 0 ;x < url.length;x++){
  let iframe = document.createElement('iframe');
   iframe.classList.add('iframeResponsive');
   iframe.src =url[x];
   iframe.width = "400";
   iframe.height = "315";
   iframe.allow = 'autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture';
   iframe.loading = 'lazy';
   iframe.frameborder ='0';
   divIframe.append(iframe);
  }
});
