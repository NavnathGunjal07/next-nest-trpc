import Clientside from "./ClintSide";
import { trpc } from "./trpc";
export default async function Home() {
  const response = await trpc.hello.query({ name: "next js" });
  return (
    <div>
      <p>Server side - {response}</p>
      <Clientside />
    </div>
  );
}
