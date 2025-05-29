import { motion } from "framer-motion";

const sponsors = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    url: "https://google.com",
  },
  {
    name: "GitHub",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    url: "https://github.com",
  },
  {
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    url: "https://notion.so",
  },
  // Add more sponsors as needed
];
const LOGO_WIDTH = 120;
const Sponsors = () => {
    return (
        <section className="py-10 px-6 bg-gray-50 rounded-xl">
            <h2 className="text-center text-[max(5vw,40px)] font-bold text-[#F5A800] mb-[4vh]">Our Sponsors</h2>
            <div className="flex flex-wrap justify-center items-center gap-6 mx-auto max-w-4xl">
                {sponsors.map((sponsor, idx) => (
                    <motion.a
                        key={sponsor.name}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                        style={{ justifySelf: "center" }}
                    >
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="max-h-12 object-contain mx-auto"
                        />
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Sponsors;
