import Image from "next/image";
import Container from "./Container";
import gif from "@/assets/gif.gif";
import { Button } from "./ui/button";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center flex-col sm:flex-row gap-16">
          <div className="w-full md:w-[60%] aspect-[12/10] p-4 relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              alt="gif"
              fill
              className="object-cover object-center"
              src={gif}
            />
          </div>
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-3xl text-primary ">
              مجموعة واسعة من المجوهرات والإكسسوارات تنتظرك لتضيف لمسة من
              الأناقة والفخامة إلى إطلالتك.
            </h1>

            <p className="text-2xl">تجربة فريدة من الأناقة.</p>
            <Link href={'/budget'} className="w-fit">
              <Button className="w-52 ml-auto py-7">الق نظرة</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
