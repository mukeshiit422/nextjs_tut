import { users } from "../route";
interface Params {
    params: { id: string };
  }
export async function GET (_request: Request, 
    { params }: Params
   ) {
    const { id } =  params ;
    const user = users.find(user => user.id === parseInt(id));
    return Response.json(user);
}