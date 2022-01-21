import Layout from "../components/layout";
import Error from "./_error";
const github = ({ users, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  console.log(users);
  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{users.name}</h1>
            <img src={users.avatar_url} />
            <p>{users.bio}</p>
            <a
              href={users.blog}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              My blog
            </a>
            <a
              href={users.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Go to Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/Henry0404");
  const data = await res.json();

  //console.log(data);
  const statusCode = res.status > 200 ? res.status : false;
  return {
    props: {
      users: data,
      statusCode,
    },
  };
}
export default github;
