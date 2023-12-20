export async function GET() {
  const response = {
    result: "success",
    message: "pong",
  };

  return Response.json(response);
}
