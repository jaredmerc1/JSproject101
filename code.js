export function base64(opts = {}) {
  if (!opts.include) {
    throw Error("include option must be specified");
  }

  const filter = createFilter(opts.include, opts.exclude);
  return {
    name: "base64",
    transform(data, id) {
      if (filter(id)) {
        const fileData = readFileSync(id);
          return {
            code: `export default "${fileData.toString('base64')}";`,
            map: null
          }

//helllo
        
  let baseDirectory = '.';
let port = 8080;
let host = '0.0.0.0';
let lasttRequesTime = performance.now() / 1000;
for(let i = 0; i < process.argv.length; ++i) {
  if (process.argv[i] == '-d' && i < process.argv.length - 1) {
    baseDirectory = process.argv[i + 1];
  }
  if (process.argv[i] == '-p' && i < process.argv.length - 1) {
    port = process.argv[i + 1];
  }
  if (process.argv[i] == '-h' && i < process.argv.length - 1) {
    host = process.argv[i + 1];
  } 
}
  const extname = path.extname(filePath);
    let contentType = "text/html";
    switch (extname) {
    //?
