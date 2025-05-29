import React from 'react';

const Footer = () => (
    <footer style={{
        background: '#222',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem 0',
        width: '100%',
    }}>
        <p>&copy; {new Date().getFullYear()} AISS. All rights reserved.</p>
        <br />
        <div className='flex justify-center items-center gap-4 mb-4'>
            <a href="https://x.com/iiitdcai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition">
                <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.linkedin.com/in/cai-iiitd-97a6a4232/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition">
                <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://www.instagram.com/iiitdcai/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition">
                <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://www.facebook.com/iiitdcai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition">
                <i className="fab fa-facebook"></i> Facebook
            </a>
        </div>
        <div className='flex justify-center items-center gap-4 mb-4'>
            <span>For any query contact us on :</span>
            <a href="mailto:aiss@iiitd.ac.in" className="text-white hover:text-purple-300 transition">aiss@iiitd.ac.in
            </a>
        </div>
        <p>
            Made with ❤️ by the AISS Team
        </p>

    </footer>
);

export default Footer;