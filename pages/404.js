import Link from "next/link";
import Layout from "../components/layout";
const custom404 = () => (
  <>
    <Layout>
      <div className="text-center">
        <h1>404</h1>
        <p>
          Esta pagina no existe, por favor devuelve al{" "}
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
      </div>
    </Layout>
  </>
);
export default custom404;
