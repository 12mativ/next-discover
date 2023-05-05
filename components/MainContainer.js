import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <title>Main page</title>
                <meta keywords={'ivan apple ' + keywords}></meta>
            </Head>

            <div className="navbar">
                <A href='/' text='Главная'/>
                <A href='/users' text='Пользователи'/>
            </div>

            <div>
                {children}
            </div>

            <style jsx>
                {`
                  .navbar {
                    background-color: #c96a2b;
                    padding: 10px;
                  }
                `}
            </style>

        </>
    );
};

export default MainContainer;