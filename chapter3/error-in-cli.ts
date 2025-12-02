const run = (message: number) => {
  console.log(message);
};

run("Hello world!");


/** 
 * 
TypeScript as a Linter
Fortunately, we can configure TypeScript's CLI to allow for type checking without interfering with our other tools.

Inside the tsconfig.json file, there's an option called noEmit that tells tsc whether or not to emit JavaScript files.

By setting noEmit to true, no JavaScript files will be created when you run tsc. This makes TypeScript act more like a linter 
than a transpiler. This makes a tsc step a great addition to a CI/CD system, since it can prevent merging a pull request with TypeScript errors.
 */