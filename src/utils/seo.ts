export const SITE_NAME = "VamVam Uniport";
export const SITE_URL = "https://vamvam-uniport.com";
export const DEFAULT_DESCRIPTION = 
  "VamVam Uniport - Your gateway to university port services in Port Harcourt.";
export const SITE_IMAGE = "https://vamvam-uniport.com/og-image.jpg";

export const createPageTitle = (pageTitle: string) => {
  return pageTitle ? `${pageTitle} - ${SITE_NAME}` : SITE_NAME;
};

export const createPageDescription = (description?: string) => {
  return description || DEFAULT_DESCRIPTION;
};