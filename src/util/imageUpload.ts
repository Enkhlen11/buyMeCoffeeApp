const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_API_KEY_CLOUDINARY_NAME;
const PRESET = process.env.NEXT_PUBLIC_API_KEY_PRESET_NAME;

export const imageUpload = async (file: File | null) => {
  if (!file) {
    alert("Please select a file");
    return;
  }

  if (!PRESET || !CLOUDINARY_NAME) {
    alert("Missing environment variables");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", PRESET);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    return data.secure_url;
  } catch (err) {
    console.error("Upload failed:", err);
    alert("Failed to upload file");
  }
};
