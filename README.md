# Haart
Generate ascii art from file hashes. 

Haart uses MD-5 Checksums to generate a unique hash from the file provided as input, and converts that to a nice looking ascii art image. 

Here is the generated ascii art for `haart.js`
<pre><code>
<b class="background">               </b>
<b class="background"> </b> <b class="green">+</b> <b class="blue">|</b> <b class="blue">-</b> <b class="green">|</b> <b class="green">x</b> <b class="blue">x</b> <b class="background"> </b>
<b class="background"> </b> <b class="blue">|</b> | <b class="blue">-</b> <b class="blue">+</b> <b class="green">-</b> <b class="blue">|</b> <b class="background"> </b>
<b class="background"> </b> <b class="red">|</b> +<b class="background"> ha  </b>| <b class="green">|</b> <b class="background"> </b>
<b class="background"> </b> <b class="green">x</b> |<b class="background"> art </b><b class="blue">|</b> <b class="blue">-</b> <b class="background"> </b>
<b class="background"> </b> <b class="blue">|</b> <b class="red">|</b> <b class="blue">+</b> <b class="green">+</b> <b class="green">+</b> <b class="red">x</b> <b class="background"> </b>
<b class="background"> </b> <b class="green">|</b> | <b class="green">x</b> <b class="green">|</b> <b class="red">|</b> <b class="blue">x</b> <b class="background"> </b>
<b class="background">               </b></code></pre> <style> .red{color:#ce5c68;}.blue{color:#5cacce;}.green{color:5cce75;}.background{background:#e6cc38;color:#fff;} </style>

### Usage
**Flags:**
- `-i`, `--input`: specify the input file to be hashed
- `-o`, `--output`: specify the output file (if any) to save the ascii art to
- `-f`, `--format`: specify the format to create, currently only `ascii` and `html` are avialable. 

### Roadmap
- create option to generate checksums for directories, possibly by creating a tarball, useful for comparing metadata as well as file contents.
- add theme support
- push to npm