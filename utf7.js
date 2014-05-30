function z(str,i,octets,c,s) {
  octets = '';
  for (i in str) {
    octets += ((s=String.fromCharCode)((c = str.charCodeAt(i)) >> 8) + s(c & 0xFF));
  }
  return btoa(octets).replace(/=+$/, '');
}

/*function decode(str) {
  var octets = '',
      r = [];

  if (typeof window !== 'undefined' && atob) {
    octets = atob(str);
  } else {
    octets = (new Buffer(str || "", "base64")).toString("binary");
  }

  for (var i = 0, len = octets.length; i < len;) {
    // Calculate charcode from two adjacent bytes.
    r.push(String.fromCharCode(octets.charCodeAt(i++) << 8 | octets.charCodeAt(i++)));
  }
  return r.join('');
}*/

// Escape RegEx from http://simonwillison.net/2006/Jan/20/escape/
/*function escape(chars) {
  return chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}*/

// Character classes defined by RFC 2152.
//var setD = "A-Za-z0-9'\(\)\,\-\./:\?",
    //setO = escape('!"#$%&*;<=>@[]^_\'{|}'),
    //setW = escape(' \r\n\t'),

    // Stores compiled regexes for various replacement pattern.
    //regexes = {},
    //regexAll = new RegExp('[^' + setW + setD + setO + ']+', 'g');

utf7 = {
  // RFC 2152 UTF-7 encoding.
  encode: function(str) {

    // We replace subsequent disallowed chars with their escape sequence.
    return str.replace(/[^A-Za-z0-9'(),-./:?]+/g, function(chunk) {
      // + is represented by an empty sequence +-, otherwise call z().
      return '+' + (chunk === '+' ? '' : z(chunk)) + '-';
    });
  },

  // RFC 2152 UTF-7 encoding with all optionals.
  /*encodeAll: function(str) {
    // We replace subsequent disallowed chars with their escape sequence.
    return str.replace(regexAll, function(chunk) {
      // + is represented by an empty sequence +-, otherwise call z().
      return '+' + (chunk === '+' ? '' : z(chunk)) + '-';
    });
  },*/

  // RFC 2152 UTF-7 decoding.
  /*decode: function(str) {
    return str.replace(/\+([A-Za-z0-9\/]*)-?/gi, function(_, chunk) {
      // &- represents &.
      if (chunk === '') {
        return '+';
      }
      return decode(chunk);
    });
  },*/

  imap: {
    // RFC 3501, section 5.1.3 UTF-7 encoding.
    encode: function(str) {
      // All printable ASCII chars except for & must be represented by themselves.
      // We replace subsequent non-representable chars with their escape sequence.
      return str.replace(/&/g, '&-').replace(/[^\x20-\x7e]+/g, function(chunk) {
        // & is represented by an empty sequence &-, otherwise call z().
        chunk = (chunk === '&' ? '' : z(chunk)).replace(/\//g, ',');
        return '&' + chunk + '-';
      });
    }

    // RFC 3501, section 5.1.3 UTF-7 decoding.
    /*,decode: function(str) {
      return str.replace(/&([^-]*)-/g, function(_, chunk) {
        // &- represents &.
        if (chunk === '') {
          return '&';
        }
        return decode(chunk.replace(/,/g, '/'));
      });
    }*/
  }
};