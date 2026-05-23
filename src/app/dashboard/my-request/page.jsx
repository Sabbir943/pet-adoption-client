import RequestData from "@/component/RequestData";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const Page = async () => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) return null;
  const {token}= await auth.api.getToken({
    headers: await headers()
  })
  const res = await fetch(
    `http://localhost:8000/myRequest/${user.email}`,
    { cache: "no-store" ,
      headers:{
        authorization:`Bearer ${token}`
      }


    }
  );

  const data = await res.json();

  return (

   <div>
    <RequestData data={data}/>
   </div>
  );
};

export default Page;