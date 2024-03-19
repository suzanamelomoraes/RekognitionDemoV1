import fs from "fs";
import { getModerationLabels } from "../rekognition";
import { getConfig } from "@/utils/config";

const awsConfig = getConfig().aws;

describe("RekognitionService", () => {
  it("should moderate a bikini image from an image byte", async () => {
    const base64Image = fs.readFileSync("public/bikini.jpeg", "base64");
    const buffer = Buffer.from(base64Image, "base64");
    const moderationLabels = await getModerationLabels({ imageBytes: buffer });
    expect(moderationLabels).toBeDefined();
  });
  it("should moderate a droids image from an image byte", async () => {
    const base64Image = fs.readFileSync("public/droids.jpeg", "base64");
    const buffer = Buffer.from(base64Image, "base64");
    const moderationLabels = await getModerationLabels({ imageBytes: buffer });
    expect(moderationLabels).toBeDefined();
  });
  it("should moderate a machine gun image from an image byte", async () => {
    const base64Image = fs.readFileSync("public/machinegun.jpeg", "base64");
    const buffer = Buffer.from(base64Image, "base64");
    const moderationLabels = await getModerationLabels({ imageBytes: buffer });
    expect(moderationLabels).toBeDefined();
  });
  it("should moderate a beers image from an s3 bucket", async () => {
    const result = await getModerationLabels({
      s3BucketName: awsConfig.s3BucketName as string,
      filePath: "beers.jpeg",
    });
    expect(result).toBeDefined();
  });
  it("should moderate a cats image from an s3 bucket", async () => {
    const result = await getModerationLabels({
      s3BucketName: awsConfig.s3BucketName as string,
      filePath: "cats.jpeg",
    });
    expect(result).toBeDefined();
  });
});
