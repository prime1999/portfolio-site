import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import SkillAndService from "@/components/SkillAndService";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const page = async () => {
	return (
		<main>
			<Hero />
			<SkillAndService />
			<Projects />
			<Skills />

			<ContactForm />
			<Footer />
		</main>
	);
};

export default page;
