export function formatUnixTimestamp(unixTimestamp) {
  const milliseconds = unixTimestamp * 1000;
  return new Date(milliseconds).toLocaleString();
}

export function shortenHash(hash, charLength = 6, postCharLength) {
  let shortendHash;
  if (postCharLength) {
    shortendHash =
      hash.slice(0, charLength) +
      '...' +
      hash.slice(hash.length - postCharLength, hash.length);
  } else {
    shortendHash = hash.slice(0, charLength);
  }
  return shortendHash;
}
