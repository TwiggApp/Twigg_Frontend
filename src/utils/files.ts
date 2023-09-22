export function getBase64Type(base64String: string) {
  const mimeTypeMatch = base64String.match(/^data:([a-zA-Z]+\/[a-zA-Z]+);base64,/);

  if (mimeTypeMatch && mimeTypeMatch[1]) {
    return mimeTypeMatch[1];
  }

  return null;
}

export function getBase64FileSize(base64String: string) {
  const base64Data = base64String.replace(/^data:[^;]+;base64,/, "");
  const binaryString = atob(base64Data);
  const fileSizeInBytes = binaryString.length;

  const fileSizeInKb = fileSizeInBytes / 1024;
  const fileSizeInMb = fileSizeInKb / 1024;

  return {
    bytes: fileSizeInBytes,
    kilobytes: fileSizeInKb,
    megabytes: fileSizeInMb,
  };
}
