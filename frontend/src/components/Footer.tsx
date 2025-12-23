import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg \ flex items-center justify-center">
              <img width="213" height="240" src="shrine.png" alt="Shrine Hospital" decoding="async" />
            </div>
            <span className="font-bold text-lg">Shrine Hospital</span>
          </div>
          <p className="text-sm text-background/70">© 2025 Shrine Hospital. All Rights Reserved.</p>
          <div className="flex gap-4 text-sm text-background/70">
            <a href="#" className="hover:text-background">Privacy Policy</a>
            <a href="#" className="hover:text-background">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
