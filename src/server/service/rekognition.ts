import {
  RekognitionClient,
  DetectModerationLabelsCommand,
  DetectModerationLabelsCommandInput,
  DetectModerationLabelsCommandOutput,
} from "@aws-sdk/client-rekognition";

import { getConfig } from "../../utils/config";

// get the AWS Rekognition client
async function getClient() {
  const config = getConfig();
  const clientParams = {
    region: config.aws.region as string,
    credentials: {
      accessKeyId: config.aws.accessKeyId as string,
      secretAccessKey: config.aws.secretAccessKey as string,
    },
  };
  const client = new RekognitionClient(clientParams);
  return client;
}

// get the parameters for the content image
function getParams(input: { imageBytes: Buffer }) {
  let params: DetectModerationLabelsCommandInput;
  if ("imageBytes" in input) {
    params = {
      Image: {
        Bytes: input.imageBytes,
      },
      MinConfidence: 70,
    };
  } else {
    throw new Error("No imageBytes in input");
  }
  return params;
}

// send image content to AWS Rekognition for image analysis
async function moderateContentImage(
  params: DetectModerationLabelsCommandInput
): Promise<DetectModerationLabelsCommandOutput> {
  const client = await getClient();
  const command = new DetectModerationLabelsCommand(params);
  const response = await client.send(command);
  return response;
}

export async function getModerationContent(input: { imageBytes: Buffer }) {
  try {
    const params = getParams(input);
    const response = await moderateContentImage(params);
    const moderationLabels = response.ModerationLabels;
    console.log("moderationLabels", moderationLabels);
    return moderationLabels;
  } catch (error) {
    console.error("getModerationContent", error);
  }
}
