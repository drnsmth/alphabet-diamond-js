# alphabet-diamond-js

## Description
A simple JavaScript solution to the challenge below. This is an attempt at a more functional style of JavaScript...

## The Challenge

Write a program which draws a diamond of the form illustrated below. The letter which is to appear at the widest point of the figure (E in the example) is to be specified as input data (CLI arg, keyboard read-in, etc).

```

  A
 B B
C   C
 B B
  A

```

Inputs are \[a-zA-Z\] (e.g. letters only, upper or lower case). Output is upper case only.

Edge cases:
- If you input "a" or "A", then he output is simply "A".
- If the input is invalid, then the output is "INVALID INPUT". If you read from keyboard input you may ask the user for a new input.

## Requirements
- node.js

## Notes

```

Usage:
  ./go <A-Z>
Where:
  <A-Z> is a single alphabetic character

Examples:
    ./go a       # generate an 'a' diamond
    ./go M       # generate an 'M' diamond

```
