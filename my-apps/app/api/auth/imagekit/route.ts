import config from "@/lib/config";
import ImageKit from "imagekit";

const {
  env: {
    imagekit: { publickey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({
  publicKey: publickey,
  privateKey: privateKey,
  urlEndpoint: urlEndpoint,
});
