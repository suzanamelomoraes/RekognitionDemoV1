import * as dotenv from "dotenv";
dotenv.config();

export function getConfig() {
  return {
    aws: {
      accessKeyId: process.env["AWS_ACCESS_KEY_ID"],
      secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"],

      region: process.env["AWS_REGION"],
      s3BucketName: process.env["AWS_S3_BUCKET_NAME"],
    },
  };
}
