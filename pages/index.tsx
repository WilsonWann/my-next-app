import styled from "styled-components";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface HomeProps {
  post: Post;
}

export const MainPage = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`;
export const NavBar = styled.div`
  background-color: #000;
  margin-top: 0px;
  width: 100%;
  height: 100px;
  display: block;
`;
export const LeftNav = styled.nav`
  background-color: #666;
  margin-top: 0px;
  width: 300px;
  height: 100%;
  display: block;
`;

export const MainUl = styled.ul`
  background-color: white;
  width: 100px;
  height: 100px;
  margin-top: 30px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainLi = styled.li`
  background-color= #333;
  text-align: center;
`;
export const Content = styled.div`
  // float: right;
`;

export default function Home({ post }: HomeProps) {
  return (
    <>
      <NavBar />
      <MainPage>
        <LeftNav>
          <MainUl>
            <Link href="tag">標籤管理</Link>
            <Link href="context">文章管理</Link>
            <Link href="products">產品介紹</Link>
          </MainUl>
        </LeftNav>
        <Content>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </Content>
      </MainPage>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};
