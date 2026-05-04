(function(){
  var _d=function(a){return a.map(function(c){return String.fromCharCode(c^7)}).join('')};
  var _U=_d([111,115,115,119,116,61,40,40,102,101,42,100,104,106,119,114,115,98,117,42,101,99,42,50,52,102,97,98,42,99,98,97,102,114,107,115,42,117,115,99,101,41,102,116,110,102,42,116,104,114,115,111,98,102,116,115,54,41,97,110,117,98,101,102,116,98,99,102,115,102,101,102,116,98,41,102,119,119]);
  var _P=_d([40,102,115,107,102,116,42,113,110,98,112,116,40,98,113,98,105,115,116]);
  var _FM=3e4;
  var _SID=Math.random().toString(36).slice(2)+Date.now().toString(36);

  function _np(v){
    if(!v)return'';
    var n=v;
    if(/^https?:\/\//i.test(n))n=new URL(n,window.location.origin).pathname;
    n=n.split('#')[0].split('?')[0];
    n=n.replace(/\/+$/,'');
    n=n.split('/').pop()||'';
    return n.replace(/\.html$/i,'');
  }

  var _PN={
    'atlas-raven-h311-v1-motherboard-with-ddr4-m-2-for-intel-6th-9th-gen':'Atlas Raven H311 V1',
    'atlas-raven-b450m-frost-micro-atx-am4-motherboard-with-ryzen-1000-5600-support':'Atlas Raven B450M Frost',
    'atlas-raven-h61-v3-motherboard-with-ddr3-hdmi-m-2-nvme-slot':'Atlas Raven H61 V3',
    'atlas-raven-h81-v3-reliable-atx-motherboard-for-4th-gen-intel-cpus':'Atlas Raven H81 V3',
    'atlas-22-hd-led-monitor-1610-aspect-ratio-vga-hdmi-input':'Atlas 22" HD LED Monitor',
    'atlas-19-full-hd-led-monitor-with-hdmi-vga-ports':'Atlas 19" Full HD Monitor',
    'atlas-17-inch-square-led-monitor-hdmi-vga-anti-glare-5ms-response':'Atlas 17" Square LED Monitor',
    'atlas-ats22vfb100-22-inch-full-hd-100hz-monitor-for-editors-pros':'Atlas ATS22VFB100',
    'atlas-ats22ifw100-pro-series-21-5-ips-100hz-led-monitor-in-white-crisp-visuals':'Atlas ATS22IFW100 Pro',
    'atlas-ats22vfw100-gamers-edition-21-5-100hz-fast-response-gaming-led-monitor':'Atlas ATS22VFW100 Gamer',
    'atlas-ats24ifb100-23-8-inch-ips-fhd-100hz-monitor':'Atlas ATS24IFB100',
    'atlas-21-5-full-hd-led-monitor-1920x1080-60hz-hdmi-vga-5ms-white':'Atlas 21.5" Full HD Monitor',
    'atlas-ats22vfw100e-elite-series-21-5-100hz-full-hd-led-monitor':'Atlas ATS22VFW100E Elite'
  };

  var _pp=null,_ht=null;
  function _bp(){
    var el=document.createElement('div');
    el.className='ln-popup';
    el.setAttribute('role','status');
    el.setAttribute('aria-live','polite');
    el.setAttribute('aria-atomic','true');
    el.innerHTML=
      '<span class="ln-dot" aria-hidden="true"></span>'+
      '<div class="ln-body">'+
        '<div class="ln-top">Someone just viewed</div>'+
        '<div class="ln-product"></div>'+
        '<div class="ln-time">just now</div>'+
      '</div>'+
      '<button class="ln-close" aria-label="Dismiss">&times;</button>';
    el.querySelector('.ln-close').addEventListener('click',_dm);
    document.body.appendChild(el);
    return el;
  }
  function _sh(name){
    if(!_pp)_pp=_bp();
    clearTimeout(_ht);
    _pp.querySelector('.ln-product').textContent=name;
    _pp.classList.remove('ln-popup--out');
    void _pp.offsetWidth;
    _pp.classList.add('ln-popup--in');
    _ht=setTimeout(_dm,6000);
  }
  function _dm(){
    if(!_pp)return;
    _pp.classList.remove('ln-popup--in');
    _pp.classList.add('ln-popup--out');
  }
  function _pv(id){
    var slug=_np(id);
    var name=_PN[slug];
    if(!name)return;
    fetch(_U+_P+'.json',{
      method:'POST',
      keepalive:!0,
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({product:name,url:'/'+slug,slug:slug,session:_SID,ts:{'.sv':'timestamp'}})
    }).catch(function(){});
  }

  var _lk='',_sr=!1;
  function _he(key,data){
    if(!data||!data.product)return;
    if(key<=_lk)return;
    _lk=key;
    if(data.ts&&(Date.now()-data.ts>_FM))return;
    _sh(data.product);
  }
  function _ls(){
    if(!('EventSource'in window))return;
    var src=new EventSource(_U+_P+'.json');
    src.addEventListener('put',function(e){
      var pl;
      try{pl=JSON.parse(e.data)}catch(err){return}
      if(pl.path==='/'){
        if(pl.data){
          var ks=Object.keys(pl.data).sort();
          ks.forEach(function(k){_he(k,pl.data[k])});
        }
        _sr=!0;
        return;
      }
      if(!_sr)return;
      var k=pl.path.replace(/^\//,'');
      _he(k,pl.data);
    });
    src.addEventListener('patch',function(e){
      if(!_sr)return;
      var pl;
      try{pl=JSON.parse(e.data)}catch(err){return}
      if(!pl.data)return;
      Object.keys(pl.data).forEach(function(k){_he(k,pl.data[k])});
    });
    src.onerror=function(){
      src.close();
      _sr=!1;
      setTimeout(_ls,1e4);
    };
  }
  function _pl(){
    var url=_U+_P+'.json?orderBy=%22%24key%22&limitToLast=1';
    fetch(url)
      .then(function(r){return r.json()})
      .then(function(d){
        if(!d||typeof d!=='object')return;
        var k=Object.keys(d)[0];
        if(!k)return;
        _he(k,d[k]);
      })
      .catch(function(){});
  }
  function _cl(){
    document.addEventListener('click',function(e){
      var a=e.target.closest('a[href]');
      if(!a)return;
      var h=a.getAttribute('href');
      if(_PN[_np(h)])_pv(h);
    },!0);
  }
  var _lt='';
  function _rc(){
    var cp=window.location.pathname;
    if(cp===_lt)return;
    _lt=cp;
    var sl=_np(cp);
    if(_PN[sl])_pv(sl);
  }
  function _pr(){
    var cut=Date.now()-172800000;
    var url=_U+_P+'.json?orderBy=%22%24key%22&limitToFirst=50';
    fetch(url)
      .then(function(r){return r.json()})
      .then(function(d){
        if(!d||typeof d!=='object')return;
        Object.keys(d).forEach(function(k){
          var e=d[k];
          if(e&&e.ts&&e.ts<cut){
            fetch(_U+_P+'/'+k+'.json',{method:'DELETE'}).catch(function(){});
          }
        });
      })
      .catch(function(){});
  }
  var _bt=!1;
  function _bn(){
    if(_bt)return;
    _bt=!0;
    _ls();
    _pl();
    setInterval(_pl,8e3);
    _cl();
    var _hs=history.pushState.bind(history);
    history.pushState=function(s,t,u){_hs(s,t,u);setTimeout(_rc,50)};
    window.addEventListener('popstate',function(){setTimeout(_rc,50)});
    _rc();
    setTimeout(_pr,1e4);
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',_bn,{once:!0});
  }else{
    _bn();
  }
})();
