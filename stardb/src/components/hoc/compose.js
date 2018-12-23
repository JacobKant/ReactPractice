/* Пример использования
 * compose(
 *   withData(params), - hoc return func
 *   withService() - hoc return func
 *   withSome(param) - hoc return func
 * )(component)
 */
const compose = (...funcs) => component => {
  return funcs.reduceRight((previos, value) => value(previos), component);
};

export default compose;
