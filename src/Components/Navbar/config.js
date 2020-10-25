import { ROUTES } from 'routes'
export const config = [
  {
    label: 'About Us',
    redirect: ROUTES['ABOUT_US'],
  },
  {
    label: 'Products',
    child: [
      {
        label: 'Glass Equipments',
        redirect: ROUTES['PRODUCTS'] + '?type=glass',
      },
      {
        label: 'Physics Equipments',
        redirect: ROUTES['PRODUCTS'] + '?type=physics',
      },
      {
        label: 'Biology Equipments',
        redirect: ROUTES['PRODUCTS'] + '?type=biology',
      },
      {
        label: 'Chemistry Equipments',
        redirect: ROUTES['PRODUCTS'] + '?type=chemistry',
      },
      {
        label: 'Plastic Equipments',
        redirect: ROUTES['PRODUCTS'] + '?type=plastic',
      },
      {
        label: 'Pharmacy Lab Equipments',
        redirect: ROUTES['PRODUCTS'] + '?type=pharmacy',
      },
      {
        label: 'Analytical Equipments',
        redirect: ROUTES['PRODUCTS'] + '?type=analytical',
      },
      {
        label: 'Microscopes',
        redirect: ROUTES['PRODUCTS'] + '?type=microscopes',
      },
      {
        label: 'Engineering',
        redirect: ROUTES['PRODUCTS'] + '?type=engineering',
      },
    ],
    redirect: ROUTES['PRODUCTS'],
  },
  {
    label: 'School Packs',
    redirect: ROUTES['SCHOOL_PACKS'],
  },
  {
    label: 'Resources',
    redirect: ROUTES['RESOURCES'],
  },
  {
    label: 'Contact Us',
    redirect: ROUTES['CONTACT_US'],
  },
  {
    label: 'Search',
  },
  {
    label: 'login',
  },
]
