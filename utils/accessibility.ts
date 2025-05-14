/**
 * Creates an accessible label for an element, including optional prefix, suffix, and link information.
 *
 * @param {string} label - The main label for the element.
 * @param {string|boolean|null} [target=null] - An optional target attribute for links, which decides if "opens in a new tab" is added.
 * @param {string} [prefix=''] - An optional prefix to prepend to the label.
 * @param {string} [suffix=''] - An optional suffix to append to the label.
 * @returns {string} The generated accessible label.
 */
export const createAccessibleElementLabel = (
  label: string,
  target: string | boolean | null = null,
  prefix: string = '',
  suffix: string = ''
): string => {
  let fullLabel = prefix ? `${prefix} ${label}` : label
  if (suffix) {
    fullLabel += ` ${suffix}`
  }
  if (target === '_blank' || target === true) {
    fullLabel += ' - opens in a new tab'
  }
  return fullLabel
}
