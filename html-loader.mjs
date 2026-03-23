// html-loader.mjs
// Node.js ESM loader to handle .html imports as raw strings
import { readFile } from 'fs/promises';

export async function load(url, context, nextLoad) {
    if (url.endsWith('.html')) {
        const source = await readFile(new URL(url), 'utf8');
        return {
            format: 'module',
            shortCircuit: true,
            source: `export default ${JSON.stringify(source)};`
        };
    }
    return nextLoad(url, context, nextLoad);
}
