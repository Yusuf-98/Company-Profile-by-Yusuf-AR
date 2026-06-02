import type { Partners } from '../types';
import AdobeLogo from '../assets/company-logo/adobe-logo.png';
import UpworkLogo from '../assets/company-logo/upwork-logo.png';
import ZoomLogo from '../assets/company-logo/zoom-logo.png';
import PostmanLogo from '../assets/company-logo/postman-logo.png';
import DatabricksLogo from '../assets/company-logo/databricks-logo.png';
import AirBnBLogo from '../assets/company-logo/airbnb-logo.png';
import DropboxLogo from '../assets/company-logo/dropbox-logo.png';
import PayPalLogo from '../assets/company-logo/paypal-logo.png';
import NetflixLogo from '../assets/company-logo/netflix-logo.png';

export const partnerList: Partners = {
  title: 'Trusted by Global Innovators & Leading Brands',
  partners: [
    { id: 1, label: 'Adobe Logo', logo: AdobeLogo },
    { id: 2, label: 'Upwork Logo', logo: UpworkLogo },
    { id: 3, label: 'Zoom Logo', logo: ZoomLogo },
    { id: 4, label: 'Postman Logo', logo: PostmanLogo },
    { id: 5, label: 'Databricks Logo', logo: DatabricksLogo },
    { id: 6, label: 'AirBnB Logo', logo: AirBnBLogo },
    { id: 7, label: 'Dropbox Logo', logo: DropboxLogo },
    { id: 8, label: 'PayPal Logo', logo: PayPalLogo },
    { id: 9, label: 'Netflix Logo', logo: NetflixLogo },
  ],
};
