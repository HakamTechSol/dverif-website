import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const publicDirectory = join(process.cwd(), ".output", "public");
const distributionDirectory = join(process.cwd(), "dist");

await rm(distributionDirectory, { recursive: true, force: true });
await mkdir(distributionDirectory, { recursive: true });
await cp(publicDirectory, distributionDirectory, { recursive: true });

const assetNames = await readdir(join(distributionDirectory, "assets"));
const entryScript = assetNames.find((name) => /^index-.+\.js$/.test(name));
const stylesheet = assetNames.find((name) => /^styles-.+\.css$/.test(name));

if (!entryScript || !stylesheet) {
  throw new Error("Could not find the compiled client entry assets for the CWP build.");
}

await writeFile(
  join(distributionDirectory, "index.html"),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/assets/${stylesheet}" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <script type="module" src="/assets/${entryScript}"></script>
  </body>
</html>
`,
);

await writeFile(
  join(distributionDirectory, ".htaccess"),
  `RewriteEngine On
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^ index.html [L]
`,
);
