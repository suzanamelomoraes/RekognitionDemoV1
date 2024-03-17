# Rekognition demo

This is a simple demo of Amazon Rekognition service. It uses Next.js to create a simple application that calls Amazon Rekognition [Moderating content](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html) tool to moderate image content and get the labels of the moderated images.

> [Amazon Rekognition](https://docs.aws.amazon.com/rekognition) is a cloud-based image and video analysis service that makes it easy to add advanced computer vision capabilities to your applications. The service is powered by proven deep learning technology and it requires no machine learning expertise to use.

## Key Features

Amazon Rekognition includes a simple, easy-to-use API that can quickly analyze any image or video file that’s stored in Amazon S3.

Developers can add features in their applications that detect objects, text, and unsafe content, analyze images/videos, and compare faces to your application using Rekognition's APIs.

For this project, the focus is on image analysis, and our first feature is to detect inappropriate content in an image, but there are many other features that can be used to analyze images:

- **Object, Scene, and Concept Detection** - Detects and classify objects, scenes, concepts, and celebrities in images.
- **Text Detection** - Detect and recognize printed and handwritten text in images in a variety of languages.
- **Unsafe Content** - Detect and filter explicit, inappropriate, and violent content and images. Detects granular unsafe content labels.
- **Celebrity recognition** - Recognize tens of thousands of celebrities in your images across different categories, such as politicians, athletes, actors, and musicians.
- **Facial Analysis** - Detect, analyze, and compare faces, along with facial attributes, such as gender, age, and emotions. Use cases may include user verification, cataloging, people counting, and public safety.
- **Custom Labels** - Build custom classifiers to detect objects specific to your use case, such as logos, products, characters.
- **Image Properties** - Analyze image properties like quality, color, sharpness, contrast.

## Unsafe Content - Detecting inappropriate content in an image

As per the [Amazon Rekognition documentation](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html), you can use the [DetectModerationLabels](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectModerationLabels.html) operation to determine if an image contains inappropriate or offensive content.

- The image must be in either a .jpg or a .png format.
- You can provide the input image as an image byte array (base64-encoded image bytes), or specify an Amazon S3 object.

### Example

**Image**

![machinegun](public/machinegun.jpeg)

**Response:**

```bash
 moderationLabels: [
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
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
