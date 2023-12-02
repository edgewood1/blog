# Syntactic Sugar

Syntactic sugar refers to a language layer that enhances readability. For instance, while an array procedure may demand three arguments, like `set_array(Array, vector(i,j), value)`, some languages provide a more concise syntax, such as `Array[i,j] = value`.

## Language Processors

Language processors expand sugared constructs into fundamental ones before processing—desugaring them. This occurs in both compilers and static analyzers.

### Syntax and Semantics

**Syntax:** The set of rules defining symbol or expression combinations.

**Semantics:** The meaning of code. Semantic processing follows syntactic processing, but sometimes, both are required simultaneously for complete analysis.

### Compile vs. Runtime Errors

- **Compile Errors:** Result from typos during code compilation.
- **Runtime Errors:** Occur during program execution, often due to logical issues like exceptions.

## Syntax vs. Semantics

**Syntax:** Word order, e.g., "the dog" vs. "dog the."

**Semantics:** Word meaning and function, e.g., "dog" as a noun or verb, or the distinction between a keyword like "Function" and a method like "forEach."

## Expressions vs. Statements

**Expression:** A phrase producing a value, e.g., `3+x` or `myfun(a, b)`.

**Statement:** An action, e.g., `if` statements or variable declarations.

## Compile Time vs. Run Time

- **Compile Time:** Code converted to a runnable form.
- **Run Time:** The period when the program is launched and running.

## Static vs. Dynamic Typing

- **Static Typing:** Type checking during compile time.
- **Dynamic Typing:** Type checking during runtime.

## Weak vs. Strong Typing

- **Weak Typing:** Implicit type conversion is common.
- **Strong Typing:** Strict adherence to type assignments; type mismatches result in errors.

## TypeScript

- A superset of JavaScript.
- Strong typing, with compile-time error detection.
- Transpilation required to convert TypeScript to JavaScript.

## TypeScript Process

1. Install TypeScript: `npm install -g typescript`
2. Create a TypeScript file (e.g., main.ts) and write code.
3. Transpile to JavaScript: `tsc <filename>`

## Data Types

A data type formalizes and enforces the kind of values a variable will hold. It constrains expressions, defining operations, meaning, and storage methods.

### Three Kinds of Types

1. **Built-in Types:** Boolean, string, object, void (both primitive and objects).
2. **TS-Specific Types:** Array, any (super-type).
3. **Custom Types:** User-defined types like enums, classes, interfaces, arrays, and tuples.

**Note:** `null` and `undefined` are subtypes of other types, allowing assignments like `let isNew: boolean = null;` or `let myName: string = undefined;`.
