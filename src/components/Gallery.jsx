import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfileCard = ({ name, role, image, email, github, linkedin }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="w-80 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Top image with bottom border */}
      <div className="h-52 w-full overflow-hidden border-b border-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Info section with inner top padding */}
      <div className="p-5 flex flex-col items-center text-center space-y-2 border-t border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>

        {/* Border above social icons */}
        <div className="w-full border-t border-gray-100 pt-3 mt-3 flex justify-center gap-3">
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="ghost" className="hover:text-blue-600">
              <Mail className="w-5 h-5" />
            </Button>
          </a>
          {/* <a href={github} target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="ghost" className="hover:text-gray-800">
              <Github className="w-5 h-5" />
            </Button>
          </a> */}
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="ghost" className="hover:text-blue-500">
              <Linkedin className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
