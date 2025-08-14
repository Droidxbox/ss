// Basic interactions: preloader, counters, back-to-top, smooth scroll for internal links
document.addEventListener('DOMContentLoaded',function(){
  // preloader
  var p = document.getElementById('preloader'); if(p) setTimeout(function(){p.style.display='none'},400);

  // year updates
  document.querySelectorAll('[id^="year"]').forEach(function(e){ e.textContent = new Date().getFullYear(); });

  // counters
  var counters = document.querySelectorAll('.counter');
  counters.forEach(function(c){
    var target = +c.getAttribute('data-target') || 0;
    var count = 0;
    var step = Math.max(1, Math.round(target/80));
    var iv = setInterval(function(){
      count += step;
      if(count >= target){ c.textContent = target; clearInterval(iv); } else { c.textContent = count; }
    },20);
  });

  // back to top
  var bt = document.getElementById('backToTop');
  window.addEventListener('scroll', function(){ bt.style.display = window.scrollY > 300 ? 'block' : 'none'; });
  bt.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });

  // smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href');
      if(href.length>1 && document.querySelector(href)){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
      }
    });
  });
});
