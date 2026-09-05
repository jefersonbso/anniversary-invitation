function irParaRSVP(){
  // smooth redirect to accept page
  window.location.href = '/accept.html';
}

// optional tiny animation for hearts (if present)
document.addEventListener('DOMContentLoaded', ()=>{
  const floats = document.querySelectorAll('.heart-float');
  if (!floats) return;
  floats.forEach((el, i)=>{
    el.style.animationDelay = (i*0.6)+'s';
  });
});

