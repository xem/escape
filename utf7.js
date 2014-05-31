utf7=function(chars,separator,i,c,s,chunk,r) {
  chunk=r="";
  chars=chars.concat(0x20);
  s=String.fromCharCode;
  for(i in chars){
    c=chars[i];
    if(c<0x20||c>0x7D){
      chunk+=s(c>>8)+s(c&0xff);
    }
    else{
      if(chunk){
        r+=s(separator)+btoa(chunk).replace(/=+$/, '')+"-";
        chunk="";
      }
      if(c==separator){
        r+=s(separator)+"-";
      }
      else{
        r+=s(c);
      }
    }
  }
  return r.slice(0,-1);
}