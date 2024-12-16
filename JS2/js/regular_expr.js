// Regular Expression (regexr.com)

`
/g : global flag
/i : case insensitive
/m : multiline

/[enl]/g : only chooses chars e,n,l
/[^enl]/g : selects all chars but e,n,l

/[a-z]/g : all lowercase letters
/[A-Z]/g : all uppercase letters

/[0-9]/g : all digits
/./g : all but newline character
/\n/g (or \r) : all newline chars

/\w/g : all words (and numbers)
/\W/g : all non-words
/\d/g : all digits
/\D/g : all nondigits

/\s/g : all whitespace
/\S/g : all non-whitespace

/[\s\S]/g : selects all

(anchors)
/^I/gm (I's in the beginning of a line (multiline!))
/d$/gm (lines ending in d)

(escapes)
/\./gm : select special character

(capture groups)
/(old)/gm : extract those with old
/(?:old)/gm : non-capture

(positive look ahead)
/g(?=old)/gm : g preceding 'old'

(negative look ahead)
/g(?!old)/gm : g's preceding not 'old'

(quantifiers)
*: select 0+ of preceding char
/[A-Z][a-z]*'*[a-z]*/gm
/\d{3}/gm : three digits in a row
/\d{3,}/gm : at least three in a row
/\d{3,4}/gm : stop at four
/(hear)?t/gm : optional 'hear' + t

/h\w+/gm : start with 'h' and has word after it
/h\w+?/gm : lazy selector (one word char after it)

(alternation)
/(g|l)ive/gm : either (g)ive or (l)ive
`

// examples
` (zip code)
/(^\d{5})-?(\d{4}$)?/gm
`

`
/\s{2,}/gm
`

`
/(\+1)?[-. ]?(\d{3})?[-. ]?(\d{3})[-. ]?(\d{4})/gm
`