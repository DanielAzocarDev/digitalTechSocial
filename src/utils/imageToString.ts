export const imageToString = (file: File, callback: (param: string) => void) => {
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        callback(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }
}