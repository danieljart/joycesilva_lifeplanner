import "../globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white">
        <style jsx global>{`
          :root {
            --primary: #4CAF50;
            --secondary: #5D4037;
            --background: #FFFFFF;
            --text: #111111;
            --text-muted: #666666;
            --border: #E5E5E5;
          }
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          .gradient-text {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .shadow-luxury {
            box-shadow: 0 20px 70px rgba(77, 175, 80, 0.15);
          }
          .btn-primary {
            background: linear-gradient(135deg, var(--primary), #45a049);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(77, 175, 80, 0.3);
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
