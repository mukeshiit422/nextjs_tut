import { users } from "../route";

interface Params {
    params: { id: string };
  }
//eslint-disable-next-line
export async function GET (_request: Request,   { params }: Params) {
    const { id } =  params ;
    const user = users.find(user => user.id === parseInt(id));
    return Response.json(user);
}