import config from "@/lib/config";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
    publicKey: config.env.imagekit.publickey,
    privateKey: config.env.imagekit.privateKey,
    urlEndpoint: config.env.imagekit.urlEndpoint,
})