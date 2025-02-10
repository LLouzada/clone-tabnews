import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <div className="d-flex justify-content-center w-50 mx-auto">
          <div
            className="container border border-top-0 border-dark rounded-bottom-4 d-flex flex-column align-items-center"
            style={{ backgroundColor: "#0D67B5" }}
          >
            <img
              src="/img/logos/logo_loumad_white.png"
              alt="Logo-image Loumad Soft"
              className="mt-5 mb-3"
            />
            <img
              src="/img/logos/logo_text_black_accent.png"
              alt="Logo-text Loumad Soft"
              className="mb-5"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center w-50 mx-auto">
          <h2 className="text-center mt-5 text-white">Em Breve</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
