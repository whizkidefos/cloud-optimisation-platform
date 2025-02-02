import { Github, Twitter, Mail, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">CloudOptimize</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Intelligent cloud resource management and optimization platform
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/whizkidefos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://x.com/whizkidefos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:me@iefosa.me" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">Terms</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Made with <Heart className="h-4 w-4 inline-block text-red-500" /> by CloudOptimize Team © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;