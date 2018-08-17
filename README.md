# Haart
Generate ascii art from file hashes. 

Haart uses MD-5 Checksums to generate a unique hash from the file provided as input, and converts that to a nice looking ascii art image. 

Here is the generated ascii art for `haart.js`

![Haart ascii art](haart.png)

### Usage
**Flags:**
- `-i`, `--input`: specify the input file to be hashed
- `-o`, `--output`: specify the output file (if any) to save the ascii art to
- `-f`, `--format`: specify the format to create, currently `ascii`, `png` and `html` are avialable. Png exporting uses `node-snapshot` and `phantomjs` to create an image from the HTML.

### Roadmap
- create option to generate checksums for directories, possibly by creating a tarball, useful for comparing metadata as well as file contents.
- add theme support
- push to npm