# GuardIT Laptop Insurance App

- Dashboard (/dashboard):
  - Laptop detail cards (I tried following the card layout you suggested in class):
    - Expand more and expand less icons to toggle information
    - Laptop condition (New, Used or Refurbished) - different background colors depending on the condition
    - Search and filter functionality - you can also delete upon searching or filtering
    - Edit - directs user to a prefilled form of the laptop and personal details allowing the user to edit (Form validation using Formik and Yup, snackbar notification upon form re-submission)
    - Delete - deletes a laptop card's details
    - Get a quote button - directs you to tailored made quotes depending on the laptops details

  - Dark and Light theme button that toggles the theme from light and Dark

- Register Laptop (/laptop/new):
  - Form where the user can insert their personal and laptop details
  - Form validation using Formik and Yup
  - Snackbar notification upon form submission

- Quotes (/quotes/:id):
  - Quotes are displayed in a 3D carousel
  - The prices are calculated based on:
    - Laptop brand
    - Processor
    - Condition
    - Year (if its greater than 10 years you pay less - lower risk)
    - Tier (Basic, Standard or Premium flat fee)
    - Current value (halfed)
    - Total per month is the total divided by 12 months

- Confirmation (/confirm):
  - Upon choosing a quote by clicking the "Get Cover" button a confirmation screen will appear
  - This displays the laptop details as well as the quote breakdown (price calculation mentioned above)
