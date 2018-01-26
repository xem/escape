// Log keydowns
a1.onkeydown = function(e){
	a2.innerHTML += "- keydown { keyCode:" + e.keyCode + ", ctrlKey:"+ e.ctrlKey + ", altKey:"+ e.altKey + ", metaKey:" + e.metaKey + "}\n";
}

// Log keypresses
a1.onkeypress = function(e){
	a2.innerHTML += "- keypress { keyCode:" + e.keyCode + ", ctrlKey:"+ e.ctrlKey + ", altKey:"+ e.altKey + ", metaKey:" + e.metaKey + "}\n";
}

/*// Log inputs, escape everything
a1.oninput = function(e){
	a2.innerHTML += "- input\n";
	escape();
}*/

// Log keyups, escape everything, update hash
a1.onkeyup = function(e){
	a2.innerHTML += "- keyup { keyCode:" + e.keyCode + ", ctrlKey:"+ e.ctrlKey + ", altKey:"+ e.altKey + ", metaKey:" + e.metaKey + "}\n";
	a2.scrollTop = a2.scrollHeight;
	escape();
  location.hash = encodeURI(a1.value);
}

// On load, read hash, escape
onload = onhashchange = function(e){
	if(location.hash){
    a1.innerHTML = decodeURI(location.hash.slice(1));
  }
  escape();
}

// Escape
escape = function(){
	
	// Save plain text
	text = a1.value;

  // UTF-32 BE transformations
  utf32be_codepoints = utf32be_1_encoder(text);
	utf32be_1.value = utf32be_codepoints.join();
  utf32be_2.value = utf32be_2_encoder(utf32be_codepoints);
  utf32be_3.value = utf32be_3_encoder(utf32be_codepoints).join( );
  utf32be_4.value = utf32be_4_encoder(utf32be_codepoints);
  utf32be_5.value = utf32be_5_encoder(utf32be_codepoints);
  utf32be_6.value = utf32be_6_encoder(utf32be_codepoints).join("\n");
  utf32be_7.value = utf32be_7_encoder(utf32be_codepoints);
  utf32be_8.value = utf32be_8_encoder(utf32be_codepoints);
  utf32be_9.value = utf32be_9_encoder(utf32be_codepoints);
  utf32be_10.value = utf32be_10_encoder(utf32be_codepoints);
  utf32be_11.value = utf32be_11_encoder(utf32be_codepoints);
  utf32be_12.value = utf32be_12_encoder(utf32be_codepoints);
  utf32be_13.value = utf32be_13_encoder(utf32be_codepoints).join("\n");
  utf32be_14.value = utf32be_14_encoder(utf32be_codepoints).join("\n");
  
  //utf32be_DL.href = "data:;;base64,"+utf32be_5.value;
  //utf32be_DLBOM.href = "data:;;base64,"+btoa("\x00\x00\xFE\xFF"+atob(utf32be_5.value)); // BOM: 00 00 FE FF
  
  
  // UTF-32 LE transformations
  utf32le_codepoints = utf32le_1_encoder(text);
	utf32le_1.value = utf32le_codepoints.join( );
  utf32le_2.value = utf32le_2_encoder(utf32le_codepoints).join( );
  utf32le_3.value = utf32le_3_encoder(utf32le_codepoints);
  
  //utf32le_DL.href = "data:;;base64,"+utf32le_3.value;
  //utf32le_DLBOM.href = "data:;;base64,"+btoa("\xFF\xFE\x00\x00"+atob(utf32le_3.value)); // BOM: FF FE 00 00
  
  
  // UTF-16 BE transformations
  utf16be_codepoints = utf16be_1_encoder(text);
  utf16be_1.value = utf16be_codepoints.join( );
  utf16be_2.value = utf16be_2_encoder(utf16be_codepoints).join( );
  utf16be_3.value = utf16be_3_encoder(utf16be_codepoints);
  utf16be_4.value = utf16be_4_encoder(utf16be_codepoints);
  utf16be_5.value = utf16be_5_encoder(utf16be_codepoints);
  
  //utf16be_DL.href = utf16be_4.value;
  //utf16be_DLBOM.href = "data:;charset=utf-16BE;base64,"+btoa("\xFE\xFF"+atob(utf16be_3.value)); // BOM: FE FF
  
  
  // UTF-16 LE transformations
  utf16le_codepoints = utf16le_1_encoder(text);
	utf16le_1.value = utf16le_codepoints.join( );
  utf16le_2.value = utf16le_2_encoder(utf16le_codepoints).join( );
  utf16le_3.value = utf16le_3_encoder(utf16le_codepoints);
  utf16le_4.value = utf16le_4_encoder(utf16le_codepoints);
  
  //utf16le_DL.href = utf16le_4.value;
  //utf16le_DLBOM.href = "data:;charset=utf-16LE;base64,"+btoa("\xFF\xFE"+atob(utf16le_3.value)); // BOM: FF FE
  
  
  // UTF-8 transformations
  utf8_bytes = utf8_1_encoder(text);
	utf8_1.value = utf8_bytes.join( );
  utf8_2.value = utf8_2_encoder(utf8_bytes).join( );
  utf8_3.value = utf8_3_encoder(utf8_bytes);
  utf8_4.value = utf8_4_encoder(utf8_bytes);
  utf8_5.value = utf8_5_encoder(utf8_bytes);
  utf8_6.value = utf8_6_encoder(utf8_bytes);
  utf8_7.value = utf8_7_encoder(utf8_bytes);
  utf8_8.value = utf8_8_encoder(utf8_bytes);
  utf8_9.value = utf8_9_encoder(utf8_bytes);
  
  //utf8_DL.href = utf8_4.value;
  //utf8_DLBOM.href = "data:;charset=utf-8;base64,"+btoa("\xEF\xBB\xBF"+atob(utf8_3.value)); // BOM: EF BB BF
  
  
  // UTF-7 transformations
  /*utf7_1.value = utf7_1_encoder(utf16be_codepoints);
  utf7_2.value = utf7_2_encoder(utf16be_codepoints);
  
  // BOM: 2B 2F 76 [ 38 | 39 | 2B | 2F ]
  
  
  // GB18030 transformations
  gb18030_codepoints = gb180301_encoder(utf32be_codepoints);
	gb180301.value = gb18030_codepoints.join( );
  gb180302.value = gb180302_encoder(gb18030_codepoints).join( );
  gb180303.value = gb180303_encoder(gb18030_codepoints);
  gb180304.value = gb180304_encoder(gb18030_codepoints);
  
  // CESU-8 transformations
  cesu8_codepoints = cesu8_1_encoder(text);
	cesu8_1.value = cesu8_codepoints.join( );
  cesu8_2.value = cesu8_2_encoder(cesu8_codepoints).join( );
  cesu8_3.value = cesu8_3_encoder(cesu8_codepoints);
  
  
  // UTF-EBCDIC
  // BOM:	DD 73 66 73

  
  // BOCU-1
  // BOM: FB EE 28*/
  
  
  // Latin-1 transformations
  latin1_codepoints = latin1_1_encoder(utf32be_codepoints);
	latin1_1.value = latin1_codepoints.join( );
  latin1_2.value = latin1_2_encoder(latin1_codepoints).join( );
  latin1_3.value = latin1_3_encoder(latin1_codepoints);
  latin1_4.value = latin1_4_encoder(latin1_codepoints);
  latin1_5.value = latin1_5_encoder(latin1_codepoints);
  latin1_6.value = latin1_6_encoder(latin1_codepoints);
  latin1_7.value = latin1_7_encoder(latin1_codepoints);
  
  // Windows-1252 transformations
  windows1252_codepoints = windows1252_3_encoder(utf32be_codepoints);
  windows1252_1.value = windows1252_1_encoder(windows1252_codepoints);
  windows1252_2.value = windows1252_2_encoder(windows1252_codepoints);
	windows1252_3.value = windows1252_codepoints.join( );
  windows1252_4.value = windows1252_4_encoder(windows1252_codepoints).join( );;
  windows1252_5.value = windows1252_5_encoder(windows1252_codepoints);
  windows1252_6.value = windows1252_6_encoder(windows1252_codepoints);
  
  //windows1252_DL.href = windows1252_6.value;
  
  // TODO? SCSU
  // BOM: 0E FE FF
}



// UTF-32 BE transformations

// Plain text => array of UTF-32 BE charcodes (decimal)
utf32be_1_encoder=function(b,a,c,d){a=[];for(c=0;c<b.length;c++)54==(b[d="charCodeAt"](c)>>10)?(a.push(1024*(b[d](c)-55296)+b[d](c+1)+9216),c++):a.push(b[d](c));return a}

// UTF-32 BE charcodes => Decimal HTML entities
utf32be_2_encoder=function(b,a,c){a="";for(c in b)a+="&#"+b[c]+";";return a}

// UTF-32 BE charcodes => hex
utf32be_3_encoder=function(a,b,c){c=[];for(b in a)c[b]=(1E7+a[b].toString(16)).slice(-8);return c}

// UTF-32 BE charcodes => Hex HTML entities
utf32be_4_encoder=function(b,a,c){a="";for(c in b)a+="&#x"+b[c].toString(16)+";";return a}

// UTF-32 BE charcodes => base64
utf32be_5_encoder=function(b,a,c,s,t){a="";s=String.fromCharCode;for(c in b)t=b[c],a+=s((t>>24)&0xff)+s((t>>16)&0xff)+s((t>>8)&0xff)+s(t&0xff);return btoa(a)}

// UTF-32 BE charcodes => array of Unicode code points
utf32be_6_encoder=function(a,b,c){c=[];for(b in a)c[b]="U+"+((a[b]<=0xFFFF)?(1E3+a[b].toString(16)).slice(-4):a[b].toString(16));return c}

// UTF-32 BE charcodes => JS string (ES6)
utf32be_7_encoder=function(b,a,c){a="";for(c in b)a+="\\u{"+b[c].toString(16)+"}";return a}

// UTF-32 BE charcodes => JS querySelector
utf32be_8_encoder=function(b,a,c){a="";for(c in b)a+="\\\\"+b[c].toString(16)+" ";return a}

// UTF-32 BE charcodes => CSS selector/font-family
utf32be_9_encoder=function(b,a,c){a="";for(c in b)a+="\\"+b[c].toString(16)+" ";return a}

// UTF-32 BE charcodes => CSS Unicode-range
utf32be_10_encoder=function(b,a,c){a="";for(c in b)a+="U+"+b[c].toString(16)+",";return a.slice(0,-1)}

// UTF-32 BE charcodes => Punycode
// Ungolfed: http://xem.github.io/escape/punycode.js
utf32be_11_encoder=function(p,d,b,l,v,m,c,n,g,h,q,e,f,r,w,x,y,s,u,t,k){t=String.fromCharCode;k=Math.floor;f=[];d=128;m=72;for(c=b=0;c<(r=p.length);++c)128>(e=p[c])&&f.push(t(e));for((l=v=f.length)&&f.push("-");l<r;){n=1E9;for(c=0;c<r;++c)(e=p[c])>=d&&e<n&&(n=e);b+=(n-d)*(w=l+1);d=n;for(c=0;c<r;++c)if((e=p[c])<d&&++b,e==d){g=b;for(h=36;!(g<(q=h<=m?1:h>=m+26?26:h-m));h+=36)u=q+(y=g-q)%(x=36-q),f.push(t(u+22+75*(26>u))),g=k(y/x);f.push(t(g+22+75*(26>g)));s=0;b=l==v?k(b/700):b>>1;for(b+=k(b/w);455<b;s+=36)b=k(b/ 35);m=k(s+36*b/(b+38));b=0;++l}++b;++d}return f.join("")}

// UTF-32 BE charcodes => IDN
utf32be_12_encoder=function(b){return "xn--"+utf32be_11_encoder(b)}

// UTF-32 BE charcodes => Unicode canonical names
utf32be_13_encoder=function(b,a,c){a=[];for(c in b)a[c]=unicodenames[b[c]];return a}

// UTF-32 BE charcodes => Unicode blocks
utf32be_14_encoder=function(b,a,c,d){a=[];for(c in b)for(d in unicodeblocks)if(unicodeblocks[d][0]<=b[c]&&unicodeblocks[d][1]>=b[c])a[c]=unicodeblocks[d][2];return a}






// UTF-32 LE transformations

// Plain text => array of UTF-32 LE charcodes
utf32le_1_encoder=function(b,a,c,d){d=[];a=utf32be_1_encoder(b);for(c in a)d[c]=65536*(((a[c]&255)<<8)+(a[c]>>8&255))+(((a[c]>>16&255)<<8)+(a[c]>>24&255));return d}

// UTF-32 LE charcodes => hex
utf32le_2_encoder=function(a,b,c){c=[];for(b in a)c[b]=(1E7+a[b].toString(16)).slice(-8);return c}

// UTF-32 LE charcodes => base64
utf32le_3_encoder=utf32be_5_encoder





// UTF-16 BE transformations

// Plain text => array of UTF-16 BE charCodes
utf16be_1_encoder=function(b,a,c){a=[];for(c in b)a[c]=b.charCodeAt(c);return a}

// UTF-16 BE charCodes => hex
utf16be_2_encoder=function(a,b,c){c=[];for(b in a)c[b]=(1E3+a[b].toString(16)).slice(-4);return c}

// UTF-16 BE charCodes => base64
utf16be_3_encoder=function(b,a,c,s,t){a="";s=String.fromCharCode;for(c in b)t=b[c],a+=s(t>>8)+s(t&0xff);return btoa(a)}

// UTF-16 BE charCodes => DataURI + Base64
utf16be_4_encoder=function(b){return "data:;charset=utf-16BE;base64,"+utf16be_3_encoder(b)}

// UTF-16 BE charCodes => JS/C/C++/Java source code
utf16be_5_encoder=function(b,a,c){a="";for(c in b)a+="\\u"+(1E3+b[c].toString(16)).slice(-4);return a}




// UTF-16 LE transformations

// Plain text => array of UTF-16 LE charCodes
utf16le_1_encoder=function(b,a,c,d){d=[];a=utf16be_1_encoder(b);for(c in a)d[c]=((a[c]&0xff)<<8)+(a[c]>>8);return d}

// UTF-16 LE charCodes => hex
utf16le_2_encoder=utf16be_2_encoder

// UTF-16 LE charCodes => base64
utf16le_3_encoder=utf16be_3_encoder

// UTF-16 LE charCodes => DataURI + Base64
utf16le_4_encoder=function(b){return "data:;charset=utf-16LE;base64,"+utf16le_3_encoder(b)}





// UTF-8 transformations

// Plain text => array of UTF-8 bytes
utf8_1_encoder=function(b,a,c,d,n){a=[];for(c=0;c<b.length;c++)128>b[d="charCodeAt"](c)?a.push(b[d](c)):(n=b[c],55296==(b[d](c)&64512)&&(n=b.substr(c,2),c++),encodeURI(n).replace(/\w+/g,function(b){a.push(parseInt(b,16))}));return a}

// UTF-8 bytes => hex
utf8_2_encoder=function(b,c,a){a=[];for(c in b)a[c]=("0"+b[c].toString(16)).slice(-2);return a}

// UTF-8 bytes => base64
utf8_3_encoder=function(b,a,c){a="";for(c in b)a+=String.fromCharCode(b[c]);return btoa(a)}

// UTF-8 bytes => DataURI + Base64
utf8_4_encoder=function(a){return"data:;charset=utf-8;base64,"+utf8_3_encoder(a)}

// UTF-8 bytes => MIME + Base64
utf8_5_encoder=function(a){return"=?UTF-8?B?"+utf8_3_encoder(a)+"?="}

// UTF-8 bytes => Q / Quoted printable
utf8_6_encoder=function(b,a,c){a="";for(c in b)a+="="+b[c].toString(16);return a}

// UTF-8 bytes => MIME + Q
utf8_7_encoder=function(b,a,c){a="=?UTF-8?Q?";for(c in b)a+="="+b[c].toString(16);return a+"?="}

// UTF-8 bytes => url encode
utf8_8_encoder=function(b,a,c){a="";for(c in b)a+="%"+b[c].toString(16);return a}

// UTF-8 bytes => read as windows-1252
utf8_9_encoder=function(b,a){with(new XMLHttpRequest){open("GET","data:;charset=windows-1252;base64,"+utf8_3_encoder(b),!1),send(),a=responseText};return a}



// UTF-7 transformations

// UTF-16 BE charCodes => UTF-7
utf7_1_encoder=function(b){return utf7(b,0x2B)}

// UTF-16 BE charCodes => UTF-7 (IMAP)
utf7_2_encoder=function(b){return utf7(b,0x26)}





// GB18030 transformations

// Code points => array of GB-18030 bytes
gb180301_encoder=function(l,a,m,d,e,f,p,c,b,g,h,k,n){a=[];for(m in l)if(128>(d=l[m]))a.push(d);else if(-1!=(e=gb18030index.indexOf(d)))a.push(~~(e/190)+129),f=e%190,a.push(f+64+ +(63<f));else{for(c=0;c<gb18030ranges.length;c+=2)gb18030ranges[c+1]<=d&&(b=gb18030ranges[c]+d-gb18030ranges[c+1]);g=~~(b/10/126/10);b-=12600*g;h=~~(b/10/126);b-=1260*h;k=~~(b/10);n=b-10*k;a.push(g+129);a.push(h+48);a.push(k+129);a.push(n+48)}return a};

// GB-18030 charCodes => hex
gb180302_encoder=utf8_2_encoder

// GB-18030 charCodes => base64
gb180303_encoder=function(b,a,c){a="";for(c in b)a+=String.fromCharCode(b[c]);return btoa(a)}

// GB-18030 charCodes => DataURI + Base64
gb180304_encoder=function(a){return"data:;charset=gb18030;base64,"+gb180303_encoder(a)}




// CESU-8 transformations

// Plain text => array of CESU-8 charCodes
cesu8_1_encoder=function(){return []}

// CESU-8 charCodes => hex
cesu8_2_encoder=function(){return []}

// CESU-8 charCodes => base64
cesu8_3_encoder=function(){return []}





// Latin-1 transformations

// Code points => array of Latin-1 charCodes
latin1_1_encoder=function(){return []}

// Latin-1 charCodes => hex
latin1_2_encoder=function(){return []}

// Latin-1 charCodes => base64
latin1_3_encoder=function(){return []}

// Latin-1 charCodes => DataURI + Base64
latin1_4_encoder=function(){return []}

// Latin-1 charCodes => Text (compatible glyphs only)
latin1_5_encoder=function(){return []}

// Latin-1 charCodes => JS hex escape
latin1_6_encoder=function(){return []} 

// Latin-1 charCodes => JS octal escape
latin1_7_encoder=function(b,a,c){a="";for(c in b)a+="\\"+b[c].toString(8);return a}



// Windows-1252 transformations

// Windows-1252 charCodes => Text (compatible glyphs only)
windows1252_1_encoder=function(a,c){with(new XMLHttpRequest){open("GET","data:;charset=windows-1252;base64,"+windows1252_5_encoder(a),!1),send(),c=responseText};return c}

// Windows-1252 charCodes => interpreted as UTF-8
windows1252_2_encoder=function(a,c){with(new XMLHttpRequest){open("GET","data:;charset=utf-8;base64,"+windows1252_5_encoder(a),!1),send(),c=responseText};return c}

// Code points => array of windows-1252 charCodes
windows1252_3_encoder=function(l,a,m,d,e){a=[];for(m in l)if(127>(d=l[m]))a.push(d);else if(-1!=(e=windows1252_index.indexOf(d)))a.push(e+0x80);return a};

// Windows-1252 charCodes => hex
windows1252_4_encoder=utf8_2_encoder

// Windows-1252 charCodes => base64
windows1252_5_encoder=function(b,a,c){a="";for(c in b)a+=String.fromCharCode(b[c]);return btoa(a)}

// Windows-1252 charCodes => DataURI + Base64
windows1252_6_encoder=function(a){return"data:;base64,"+windows1252_5_encoder(a)}