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

function generateRandomFileName(mimeType: string): string {
  let extension = "";
  switch (mimeType) {
    case "image/png":
      extension = ".png";
      break;
    case "image/jpeg":
      extension = ".jpeg";
      break;
    case "image/jpg":
      extension = ".jpg";
      break;
  }

  const chars = "abcdefghijklmnopqrstuvwxyz";
  let filename = "";

  for (let i = 0; i < 10; i++) {
    filename += chars[Math.floor(Math.random() * chars.length)];
  }

  filename += `${new Date().getTime()}${extension}`;
  return filename;
}

export function base64ToFile(base64String: string): File | null {
  try {
    const mimeType = getBase64Type(base64String)!;
    const fileName = generateRandomFileName(mimeType);

    // Remove the data URL prefix (e.g., "data:image/png;base64,")
    const base64Data = base64String.split(",")[1];

    // Convert base64 to binary data
    const binaryData = atob(base64Data);

    // Create a Uint8Array to hold the binary data
    const uint8Array = new Uint8Array(binaryData.length);

    // Populate the Uint8Array with binary data
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }

    // Create a Blob from the binary data
    const blob = new Blob([uint8Array], { type: mimeType });

    // Create a File from the Blob
    const file = new File([blob], fileName, { type: mimeType });

    return file;
  } catch (error) {
    console.error("Error converting base64 to file:", error);
    return null;
  }
}
