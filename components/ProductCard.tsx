import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  slug: string;
  name: string;
  price: string;
  category: string;
  image: string;
};

export default function ProductCard({
  slug,
  name,
  price,
  category,
  image,
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${slug}`}
      className="group block rounded-[2rem] bg-white p-6 shadow transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="mb-6 overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <p className="text-sm uppercase tracking-widest text-pink-400">
        {category}
      </p>

      <h3 className="mt-3 text-xl font-bold">{name}</h3>

      <p className="mt-3 text-pink-500">{price}</p>
    </Link>
  );
}
