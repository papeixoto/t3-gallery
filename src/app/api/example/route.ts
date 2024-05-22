// this exposes an endpoint at (localhost:3000)/api/example that you can access from other places
// ex: curl localhost:3000/api/example

export function GET() {
  return new Response("Hello World");
}
