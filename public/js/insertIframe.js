let url = ['video-01.MP4','video-02.MP4','video-03.MP4','video-04.MP4','video-05.MP4','video-06.MP4','video-07.MP4'];

window.addEventListener('load',()=>{
  let divVideo = document.querySelector('.iframeSlider');
  for(let x = 0 ;x < url.length;x++){
  let video = document.createElement('video');
  video.classList.add('iframeResponsive');
  video.setAttribute('controls','');
   let source = document.createElement('source');
   source.src =`/videos/${url[x]}`;
   source.type="video/mp4"; 
   video.append(source);
   video.append('Tu navegador no soporta el video.');
   divVideo.append(video);
  }
});
