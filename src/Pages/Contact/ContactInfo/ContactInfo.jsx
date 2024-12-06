import Form from "./Form";
import Info from "./Info";


const ContactInfo = () => {
    return (
        <div className="container mx-auto">
      {/* Banner Section */}
      <section className="flex flex-col md:flex-row justify-between items-center bg-blue-100 p-6 rounded-lg shadow-lg">
       <Info/>

       <Form/>
      </section>

    </div>
    );
};

export default ContactInfo;