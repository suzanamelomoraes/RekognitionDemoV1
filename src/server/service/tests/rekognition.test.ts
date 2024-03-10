import fs from "fs";
import { getModerationContent } from "../rekognition";

describe("RekognitionService", () => {
  it("should moderate a bikini image from an image byte", async () => {
    const base64Image = fs.readFileSync("public/bikini.jpeg", "base64");
    const buffer = Buffer.from(base64Image, "base64");
    const moderationLabels = await getModerationContent({ imageBytes: buffer });
    expect(moderationLabels).toBeDefined();
  });
  it("should moderate a droids image from an image byte", async () => {
    const base64Image = fs.readFileSync("public/droids.jpeg", "base64");
    const buffer = Buffer.from(base64Image, "base64");
    const moderationLabels = await getModerationContent({ imageBytes: buffer });
    expect(moderationLabels).toBeDefined();
  });
  it("should moderate a machine gun image from an image byte", async () => {
    const base64Image = fs.readFileSync("public/machinegun.jpeg", "base64");
    const buffer = Buffer.from(base64Image, "base64");
    const moderationLabels = await getModerationContent({ imageBytes: buffer });
    expect(moderationLabels).toBeDefined();
  });
});
