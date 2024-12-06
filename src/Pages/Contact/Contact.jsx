import Banner from '../../Components/Shared/Banner';
import ContactInfo from './ContactInfo/ContactInfo';
import Map from './Map';

const Contact = () => {
    return (
        <div className="container mx-auto py-16 space-y-16">
            <Banner
                title='Contact Us'
                description='We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us. Our team is here to assist you and ensure you have the best experience shopping at ToyStore.'
            />

            <Map />
            <ContactInfo />
        </div>
    );
};

export default Contact;
