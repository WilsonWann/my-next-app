import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { getProductById, Product as ProductType } from "../../fake-data";
import ProductCard from "../../components/ProductCard";
import { PageTitle, ProductContainer } from "./[id].style";

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageTitle>商品詳細頁面</PageTitle>
      <ProductContainer>
        <ProductCard product={product} all />
      </ProductContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = getProductById(params?.id as string);

  return {
    props: {
      product,
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [{ params: { id: "1" } }],
//     fallback: true,
//   };
// };

export default Product;