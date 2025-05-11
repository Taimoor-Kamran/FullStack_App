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
import Image from "next/image";
import { useRef, useState } from "react";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndPoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authenticator request failed: ${error.message}`);
  }
};

const ImageUpload = () => {
  const IKUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = () => {};
  const onSuccess = () => {};

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className="hidden"
        ref={IKUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-Upload.png"
      />

      <button className="upload-btn" onClick={(e) => {
        e.preventDefault();

        if(IKUploadRef.current){
          // @ts-ignore
          IKUploadRef.current?.click()
        }
      }}>
        <Image
          src="/icons/upload.svg"
          alt="upload.png"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a File</p>
        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>

      {file && ( <IKImage  alt={file.filePath} path={file.filePath} width={500} height={500}/> )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
