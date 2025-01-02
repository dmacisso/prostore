import { APP_NAME } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getUTCFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME}, ALL Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;