import Image from "next/image";

export default function BlazeProducts() {
  return (
    <section className="bg-[#050b1f] py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="relative w-full overflow-hidden rounded-xl">
          <Image
            src="/blaze/brand1.png"
            alt="Our Brands & Products (Solar) and Our Work & Solutions (Interactives)"
            width={2172}
            height={724}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
