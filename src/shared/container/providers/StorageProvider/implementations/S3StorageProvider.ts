import { IStorageProvider } from "../IStorageProvider";
import { resolve } from "path";
import upload from "@config/upload";
import fs from "fs";
import mime from "mime";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

export class S3StorageProvider implements IStorageProvider {
  private client: S3Client;

  constructor() {
    this.client = new S3Client({
      region: process.env.AWS_BUCKET_REGION,
    });
  }

  async save(file: string, folder: string): Promise<string> {
    const originalName = resolve(upload.tmpFolder, file);

    const fileContent = await fs.promises.readFile(originalName);

    const ContentType = mime.getType(originalName);

    try {
      await this.client.send(
        new PutObjectCommand({
          Bucket: `${process.env.AWS_BUCKET}`,
          Key: `${folder}/${file}`,
          ACL: "public-read",
          Body: fileContent,
          ContentType,
        })
      );
    } catch (error) {
      console.log(error, folder);
    }

    await fs.promises.unlink(originalName);

    return file;
  }
  async delete(file: string, folder: string): Promise<void> {
    try {
      await this.client.send(
        new DeleteObjectCommand({
          Bucket: `${process.env.AWS_BUCKET}`,
          Key: `${folder}/${file}`,
        })
      );
    } catch (error) {
      console.log(error, folder);
    }
  }
}
