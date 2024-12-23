import useTitle from "../../../Hooks/useTitle";
import Form from "./Form";
import Info from "./Info";


const ContactInfo = () => {
  useTitle('Contact')

  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <section className="flex flex-col md:flex-row justify-between items-center p-6 rounded-lg">
        <Info />
        <Form />
      </section>

    </div>
  );
};

export default ContactInfo;