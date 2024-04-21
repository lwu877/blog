import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "src/content/",
    publicFolder: "src/content/posts",
  },
  media: {
    tina: {
      mediaRoot: "/src/assets/images",
      publicFolder: "",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "published",
            label: "Publish Date",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft?",
            required: false,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
          },
          {
            type: "image",
            name: "image",
            label: "Hero Image",
            required: true,
          },
          {
						type: 'string',
						name: 'tags',
						required: true,
						label: 'Tags',
						description: 'Tags for this post',
						list: true,
						ui: {
							component: 'tags'
						}
					},
          {
						type: 'string',
						required: true,
						name: 'category',
						label: 'Category',
						description: 'Select an category for this post',
					},
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});