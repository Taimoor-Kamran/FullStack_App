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
    // your async logic here
  } catch (error: any) {
    throw new Error(`Authenticator request failed: ${error.message}`);
  }
};


const ImageUpload = () => {
  return <div>ImageUpload</div>;
};

export default ImageUpload;
