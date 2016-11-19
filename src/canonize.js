export default function canonize(url) {
  const re = new RegExp('@?(https?:)?(\/\/)?(www.)?((vk|twitter|telegram|github|xn--80adtgbbrh1bc|medium)[^\/]*\/)?(@)?([a-zA-Z0-9.@_]*)', 'i');
  const username = url.match(re)[7];
  return username;
}