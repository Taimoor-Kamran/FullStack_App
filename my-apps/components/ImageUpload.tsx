"use client"

import config from "@/lib/config";
import {
  IKImage,
  IKUpload,
  IKVideo,
  ImageKitProvider,
  ImageKitContext,
} from "imagekitio-next";




const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndPoint}/api/auth/imagekit`);

    if(!response.ok){
      const errorText = await response.text();
    }

  } catch (error: any) {
    throw new Error(`Authenticator request failed: ${error.message}`);
  }
};


const ImageUpload = () => {
  return <div>ImageUpload</div>;
  
};

export default ImageUpload;
