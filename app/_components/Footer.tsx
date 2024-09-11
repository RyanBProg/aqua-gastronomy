export default function Footer() {
  return (
    <footer className="bg-gray-900 bg-opacity-50 text-gray-300 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2023 Aqua Essence. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          {["Privacy", "Terms", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-teal-300 transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
