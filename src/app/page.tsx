import About from "@/components/about/about";
import ContactUs from "@/components/contact-us/contact-us";
import Contacts from "@/components/contacts/contacts";
import Header from "@/components/header/header";
import Services from "@/components/services/services";
import Workflow from "@/components/workflow/workflow";

export default function Home() {
  // margin to componsate for layout
  return (
    <div style={{ marginTop: "-80px" }}>
      <Header />
      <About />
      <Services />
      <Workflow />
      <ContactUs />
      <Contacts />
    </div>
  );
}
