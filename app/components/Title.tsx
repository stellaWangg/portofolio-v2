import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface TitleProps {
  title: string;
  alt?: boolean;
}

const Title = ({ title, alt }: TitleProps) => {
  return (
    <h2
      className={`max-w-[1400px] w-[90vw] mx-auto text-6xl my-4 font-semibold ${
        alt ? "text-white" : "text-stone-900"
      } ${poppins.className}`}
    >{`${title}`}</h2>
  );
};

export default Title;
