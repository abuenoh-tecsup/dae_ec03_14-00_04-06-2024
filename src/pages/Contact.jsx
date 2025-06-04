import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Header position="sticky">
      </Header>
      <main>
        <h1 className="display-3 fw-bold text-center pb-3 text-netflix">Contacto</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
