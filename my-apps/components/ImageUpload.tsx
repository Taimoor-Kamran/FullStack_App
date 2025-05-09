"use client"

import {
  IKImage,
  IKUpload,
  IKVideo,
  ImageKitProvider,
  ImageKitContext,
} from "imagekitio-next";



const authenticator = async () => {
  try {
    const response = await fetch();
  } catch (error: any) {
    throw new Error(`Authenticator request failed: ${error.message}`);
  }
};


const ImageUpload = () => {
  return <div>ImageUpload</div>;
};

export default ImageUpload;
