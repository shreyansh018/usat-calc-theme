import Newtheme from "@/components/newtheme";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>
        <Newtheme />
      </div>
    </div>
  );
}
