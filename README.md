# Rekognition demo

This is a simple demo of Amazon Rekognition service. It uses Next.js to create a simple web app that calls Amazon Rekognition [Moderating content](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html) tool to moderate image content and get the labels of the moderated images.

> [Amazon Rekognition](https://docs.aws.amazon.com/rekognition) is a cloud-based image and video analysis service that makes it easy to add advanced computer vision capabilities to your applications. The service is powered by proven deep learning technology and it requires no machine learning expertise to use. Amazon Rekognition includes a simple, easy-to-use API that can quickly analyze any image or video file that’s stored in Amazon S3.

## Detecting inappropriate content in an image

As per the [Amazon Rekognition documentation](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html), you can use the [DetectModerationLabels](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectModerationLabels.html) operation to determine if an image contains inappropriate or offensive content.

- The image must be in either a .jpg or a .png format.
- You can provide the input image as an image byte array (base64-encoded image bytes), or specify an Amazon S3 object.

**Example**

![machinegun](public/machinegun.jpeg)

````bash
    moderationLabels [
      {
        Confidence: 99.96949768066406,
        Name: 'Weapons',
        ParentName: 'Violence',
        TaxonomyLevel: 2
      },
      {
        Confidence: 99.96949768066406,
        Name: 'Violence',
        ParentName: '',
        TaxonomyLevel: 1
      }
    ]
    ```


---

### Getting Started with Next.js

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
