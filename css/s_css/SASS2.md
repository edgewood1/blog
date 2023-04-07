__Unstructured documents__ contain information presented in a free format, for example contracts, letters, orders, and bills of lading. Using a FlexiLayout, the document structure can use keywords and coordinates relative to them to find the desired data on a document. NLP, or natural language processing, can also be used to process unstructured documents such as contracts or deeds. 

Structured documents contain a set of information where the formatting, number, and layout are completely static from one document instance to the next. These documents are also called fixed forms. For example, most questionnaires and application forms are fixed forms. 

A __structured document__ is an electronic document where __some method of markup__ is used to identify the whole and parts of the document as having various meanings beyond their formatting. For example, a structured document might identify a certain portion as a "chapter title" (or "code sample" or "quatrain") rather than as "Helvetica bold 24" or "indented Courier". Such portions in general are commonly called "components" or "elements" of a document.

A __markup language__ is a computer language that is used to apply layout and formatting conventions to a text document. Markup can turn a chunk of text into a table, a link, it can identify a chunk as a header, or a paragraph.  Some markup has no visual effect whereas other forms of markup (lists) does.  The "markup" is the instructions for displaying or printing the text.

Markup doesn’t have to be computer-readable. Annotations done in print or in a book are also considered markup. 

n order to format or structure a page, markup language uses a series of tags, often enclosed in angle brackets, whose symbol is <>. These tags function like instructions, and enclosing them in angle brackets makes the tags syntactically different from plain text. Markup tags are read and interpreted by parsers, which then generate output, usually as a page or document that is formatted and styled accordingly while keeping the actual markup hidden from plain sight.

It consists of tags which ideally indicate what the parts of the document are, rather than details of how they might be shown on some display. 

The codes enclosed in angle-brackets <like this> are markup instructions (known as tags), while the text between these instructions is the actual text of the document. The codes h1, p, and em are examples of __semantic markup__, in that they describe the intended purpose or the meaning of the text they include. Specifically, h1 means "this is a first-level heading", p means "this is a paragraph", and em means "this is an emphasized word or phrase". A program interpreting such structural markup may apply its own rules or styles for presenting the various pieces of text, using different typefaces, boldness, font size, indentation, colour, or other styles, as desired. For example, a tag such as "h1" (header level 1) might be presented in a large bold sans-serif typeface in an article, or it might be underscored in a monospaced (typewriter-style) document – or it might simply not change the presentation at all.

In contrast, the i tag in HTML 4 is an example of __presentational markup__, which is generally used to specify a particular characteristic of the text without specifying the reason for that appearance. In this case, the i element dictates the use of an italic typeface. However, in HTML 5, this element has been repurposed with a more semantic usage: to denote a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text. For example, it is appropriate to use the i element to indicate a taxonomic designation or a phrase in another language.

A __style sheet language__, or style language, is a computer language that expresses the presentation of structured documents. Thus, allowing the same structured document to be reused in many contexts and presented in various ways. Different style sheets can be attached to the logical structure to produce different presentations.

CSS is sued to style documents written in HTML, XHTML, SVG, XUL, and other markup languages.

Other standard ones: 
DSSSL - The Document Style Semantics and Specification Language (DSSSL) is an international standard developed to provide stylesheets for SGML documents.[1]
XSL - extensible stylesheet language / used on XML

Non-standard ones include: 
- javascript style sheets
- synatically awesome stylesheets 
- less

SASS 
 - preprocessor / precomipler is a program that processes its input data to prodcue output that is used as input to another program.  The output is said to be a prprocessed form on the input data.  This form is used by other programs, like compilers.
 - compiler is a program that translates code in one langauge into another.  It translates source code from hight level programming to low level to create an executable program.

examples of precompilers

Less, SCSS, SASS Preprocessor converts stylings to CSS
JSX, ES6, ES7, TypeScript Transpiler(Babel) converts to JS2015
ESLint Javascript linter to validate EcmaScript and Java

Webpack is a tool and one of its responsibility manages preprocessors and loaders.  eg, files, JSON, transpiling, templating, styling, linting, testing, frameworks.

SASS / Less provides 
- variables (CSS has this)
- nesting (is this a big short cut?)
- imports - code splitting ~ CSS in  small files and if required, import from other files using @import
- mixins ~ 

https://medium.com/frontend-development-with-js/why-preprocessors-are-so-important-63b4667accf5

Overview: 
A structured document is a document to which some markup language has been applied.  

This language helps us with layout and formatting of the text.  Presentational markup focuses on presentation whereas semantic markup informs us of the reason for its appearance.

A style sheet language allows us to further change the way the text is presented - its display.

Sass is a stylesheet language; it’s just the syntax and definition. Dart-Sass and Node-Sass[1] are implementations. According to the Sass language website Dart Sass is the primary implementation of Sass.
Dart Sass is the primary implementation of Sass, which means it gets new features before any other implementation. It’s fast, easy to install, and it compiles to pure JavaScript which makes it easy to integrate into modern web development workflows.

google: dart sass vs node sass