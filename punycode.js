/*
// Bias adaptation function
function z(delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? Math.floor(delta / 700) : delta >> 1;
  delta += Math.floor(delta / numPoints);
  for (; delta > 35 * 26 >> 1; k += 36) {
    delta = Math.floor(delta / 35);
  }
  return Math.floor(k + (35 + 1) * delta / (delta + 38));
}*/

//Converts a Punycode string of ASCII-only symbols to a array of Unicode codepoints
/*
function k(input) {
  var output = [],
      inputLength = input.length,
      out,
      i = 0,
      n = 128,
      bias = 72,
      basic,
      j,
      index,
      oldi,
      w,
      k,
      digit,
      t,
      // Cached calculation results
      baseMinusT;

  // Handle the basic code points: let `basic` be the number of input code
  // points before the last delimiter, or `0` if there is none, then copy
  // the first basic code points to the output.

  basic = input.lastIndexOf('-');
  if (basic < 0) {
    basic = 0;
  }

  for (j = 0; j < basic; ++j) {
    output.push(input.charCodeAt(j));
  }

  // Main decoding loop: start just after the last delimiter if any basic code
  // points were copied; start at the beginning otherwise.

  for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {

    // `index` is the index of the next character to be consumed.
    // Decode a generalized variable-length integer into `delta`,
    // which gets added to `i`. The overflow checking is easier
    // if we increase `i` as we go, then subtract off its starting
    // value at the end to obtain `delta`.
    for (oldi = i, w = 1, k = 36; ; k += 36) {


      A=input.charCodeAt(index++);
      if (A - 48 < 10) {
        digit = A - 22;
      }
      else if (A - 65 < 26) {
        digit = A - 65;
      }
      else if (A - 97 < 26) {
        digit = A - 97;
      }
      else digit = 36;


      i += digit * w;
      t = k <= bias ? 1 : (k >= bias + 26 ? 26 : k - bias);

      if (digit < t) {
        break;
      }

      baseMinusT = 36 - t;

      w *= baseMinusT;

    }

    out = output.length + 1;
    bias = z(i - oldi, out, oldi == 0);

    // `i` was supposed to wrap around from `out` to `0`,
    // incrementing `n` each time, so we'll fix that now:

    n += Math.floor(i / out);
    i %= out;

    // Insert `n` at position `i` of the output
    output.splice(i++, 0, n);

  }

  return ucs2encode(output);
}
*/

// Converts a array of Unicode codepoints to a Punycode string of ASCII-only symbols.
window.K=function(input,n,delta,handledCPCount,basicLength,bias,j,m,q,k,t,currentValue,output,inputLength,handledCPCountPlusOne,baseMinusT,qMinusT,z,digit,a,b) {

  a=String.fromCharCode;
  b=Math.floor;
  output = [];

  // Initialize the state
  n = 128;
  bias = 72;

  // Handle the basic code points
  for (j = delta = 0; j < (inputLength = input.length); ++j) {
    if ((currentValue = input[j]) < 0x80) {
      output.push(a(currentValue));
    }
  }

  handledCPCount = basicLength = output.length;

  // `handledCPCount` is the number of code points that have been handled;
  // `basicLength` is the number of basic code points.

  // Finish the basic string - if it is not empty - with a delimiter
  if (basicLength) {
    output.push('-');
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {

    // All non-basic code points < n have been handled already. Find the next
    // larger one:
    for (m = 1e9, j = 0; j < inputLength; ++j) {
      if ((currentValue = input[j]) >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
    // but guard against overflow

    delta += (m - n) * (handledCPCountPlusOne = handledCPCount + 1);
    n = m;

    for (j = 0; j < inputLength; ++j) {

      if ((currentValue = input[j]) < n) ++delta;

      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer
        for (q = delta, k = 36; ; k += 36) {
          if (q < (t = k <= bias ? 1 : (k >= bias + 26 ? 26 : k - bias))) {
            break;
          }
          digit = t + (qMinusT = q - t) % (baseMinusT = 36 - t);
          output.push(a(digit + 22 + 75 * (digit < 26)));
          q = b(qMinusT / baseMinusT);
        }

        output.push(a(q + 22 + 75 * (q < 26)));

        z = 0;
        delta = (handledCPCount == basicLength) ? b(delta / 700) : delta >> 1;
        delta += b(delta / handledCPCountPlusOne);
        for (; delta > 455; z += 36) {
          delta = b(delta / 35);
        }
        bias = b(z + (35 + 1) * delta / (delta + 38));

        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;

  }
  return output.join('');
}