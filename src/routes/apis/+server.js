import { json } from "@sveltejs/kit";

export const GET = ({ request }) => {
  return { status: 200, body: { message: "Hello, world!" } };
};
