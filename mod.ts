/**
 * @typedef {import('./lib/index.js').Options} Options
 * @typedef {import('./lib/index.js').Processor} Processor
 */

export {defaultHandlers, all, one} from './node_modules/mdast-util-to-hast/index.js'

import rmrh from './lib/index.js'
export const remarkRehype = rmrh
export default rmrh
