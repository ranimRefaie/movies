export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-center p-4 mt-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MovieApp. All rights reserved.
        </p>
      </footer>
    );
  }