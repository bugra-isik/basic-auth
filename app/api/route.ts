export async function POST(req: Request, res: Response) {
  const deneme=await req.json()

  return Response.json(deneme);
}
