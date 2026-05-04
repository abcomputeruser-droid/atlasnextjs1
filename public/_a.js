(function(){
  var _d=function(a){return a.map(function(c){return String.fromCharCode(c^7)}).join('')};
  var _U=_d([111,115,115,119,116,61,40,40,102,101,42,100,104,106,119,114,115,98,117,42,101,99,42,50,52,102,97,98,42,99,98,97,102,114,107,115,42,117,115,99,101,41,102,116,110,102,42,116,104,114,115,111,98,102,116,115,54,41,97,110,117,98,101,102,116,98,99,102,115,102,101,102,116,98,41,102,119,119]);
  var _C=_d([40,102,115,107,102,116,42,113,110,98,112,116,40,100,104,114,105,115,116]);
  var _FY=157788e6;
  var _EY='<svg width="13" height="9" viewBox="0 0 13 9" fill="currentColor" aria-hidden="true" focusable="false" style="flex-shrink:0;opacity:.8"><path d="M6.5 0C3.5 0 1 2 0 4.5 1 7 3.5 9 6.5 9S12 7 13 4.5C12 2 9.5 0 6.5 0zm0 7.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-4.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6z"/></svg>';

  function _np(v){
    if(!v)return'';
    var n=v;
    if(/^https?:\/\//i.test(n))n=new URL(n,window.location.origin).pathname;
    n=n.split('#')[0].split('?')[0];
    n=n.replace(/\/+$/,'');
    n=n.split('/').pop()||'';
    return n.replace(/\.html$/i,'');
  }
  function _tk(f){return _np(f).replace(/\./g,'_')}
  function _fm(n){
    if(n>=1e9)return(n/1e9).toFixed(1).replace(/\.0$/,'')+'b';
    if(n>=1e6)return(n/1e6).toFixed(1).replace(/\.0$/,'')+'m';
    if(n>=1e3)return(n/1e3).toFixed(1).replace(/\.0$/,'')+'k';
    return String(n);
  }
  function _vl(n){return _fm(n)+(n===1?' view':' views')}
  function _se(el,n){
    if(n>0)el.innerHTML=_EY+'<span>'+_vl(n)+'</span>';
    else el.innerHTML='';
  }
  function _ic(fn){
    var k=_tk(fn);
    if(!k)return;
    var url=_U+_C+'/'+k+'.json';
    fetch(url)
      .then(function(r){return r.json()})
      .then(function(d){
        var ex=!d||!d.since||(Date.now()-d.since>=_FY);
        if(ex){
          return fetch(url,{method:'PUT',keepalive:!0,headers:{'Content-Type':'application/json'},body:JSON.stringify({count:1,since:{'.sv':'timestamp'}})});
        }
        return fetch(url,{method:'PATCH',keepalive:!0,headers:{'Content-Type':'application/json'},body:JSON.stringify({count:{'.sv':{'increment':1}}})});
      })
      .catch(function(){});
  }
  function _dc(){
    var cs=document.querySelectorAll('.product-card');
    if(!cs.length)return;
    fetch(_U+_C+'.json')
      .then(function(r){return r.json()})
      .then(function(d){
        d=d||{};
        cs.forEach(function(c){
          var a=c.querySelector('a[href]');
          if(!a)return;
          var f=a.getAttribute('href');
          if(!f)return;
          var el=c.querySelector('.product-card-views');
          if(!el)return;
          var k=_tk(f);
          var e=d[k];
          var n=(e&&e.since&&(Date.now()-e.since<_FY))?e.count:0;
          _se(el,n);
        });
      })
      .catch(function(){});
  }
  window.initViewCounters=_dc;

  var _lp='';
  function _rc(){
    var cp=window.location.pathname;
    if(cp===_lp)return;
    _lp=cp;
    var pg=_np(cp);
    if(pg.indexOf('atlas-')===0)_ic(pg);
    if(document.querySelector('.product-card'))_dc();
  }
  var _bt=!1;
  function _bv(){
    if(_bt)return;
    _bt=!0;
    var _hs=history.pushState.bind(history);
    history.pushState=function(s,t,u){_hs(s,t,u);setTimeout(_rc,50)};
    window.addEventListener('popstate',function(){setTimeout(_rc,50)});
    _rc();
    setInterval(function(){if(document.querySelector('.product-card'))_dc()},6e4);
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',_bv,{once:!0});
  }else{
    _bv();
  }
})();
