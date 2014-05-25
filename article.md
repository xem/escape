# Encoding characters for the Web

## Introduction

This article will explain how files and data streams are encoded on the Web, and how to handle them with JavaScript.

But first, a little recap of some vocabulary that will be used next:

-  [Unicode](http://en.wikipedia.org/wiki/Unicode) is a standard used for representing most of the world's writing systems. Each character is defined with a **code point** between 0x0 and 0x10FFFF.
- The three main encodings  (binary representations) of Unicode are [UTF-8](http://en.wikipedia.org/wiki/UTF-8), [UTF-16](http://en.wikipedia.org/wiki/UTF-16) and [UTF-32](http://en.wikipedia.org/wiki/UTF-32).
- UTF-32 uses 4 bytes to encode directly each code point, which is very convenient but takes a lot of space. The HTML5 standard recommends not to use it.
- UTF-16 uses 2 bytes to encode each character of the first plane of Unicode (0x0-0xFFFF) without transformation, and 4 bytes to encode the characters of the planes 2 to 16, using a transformation described [here](http://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B10000_to_U.2B10FFFF).
It is declined in two byte orders, UTF-16 BE and UTF-16 LE.
- UTF-8 is the recommended encoding for all kinds of files. It uses 1 byte to represent ASCII characters (0x00-0x7F), 2 bytes for the code points 0x80-0x7FF, 3 bytes for the code points 0x800-0xFFFF and 4 bytes for the characters 0x10000-0x10FFFF, as described [here](http://en.wikipedia.org/wiki/UTF-8#Description).

## Server-side

### Text files

### APIs

## Network access

### URIs

### HTTP headers

## In the browser

### URIs

### HTML

### CSS

### JavaScript