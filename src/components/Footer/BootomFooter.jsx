
const BootomFooter = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="footer footer-center p-4 bg-[#83c9eb] text-base-content">
            <aside>
                <p>Copyright © {year} - All right reserved by <a href="https://geosmartplanning.com.bd/" target="_blank" rel="noopener noreferrer" className="font-bold italic">Geo Smart Planning</a></p>
            </aside>
        </footer>
    );
};

export default BootomFooter;