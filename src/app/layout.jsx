import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ", //default is required when using template
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="light-mode">
      <body className={`min-h-screen ${vazirFont.variable} font-sans`}>
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
