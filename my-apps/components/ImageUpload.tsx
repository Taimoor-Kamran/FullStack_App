"use client";

import config from "@/lib/config";
import ImageKit from "imagekit";
import {
  IKImage,
  IKUpload,
  IKVideo,
  ImageKitProvider,
  ImageKitContext,
} from "imagekitio-next";


const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});


const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndPoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json()
    const { signature, expire, token} = data
    
    return { token, expire, signature }


  } catch (error: any) {
    throw new Error(`Authenticator request failed: ${error.message}`);
  }
};

const ImageUpload = () => {
  return <ImageKitProvider publicKey={}>

  </ImageKitProvider>
};

export default ImageUpload;
