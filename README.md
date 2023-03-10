## eleco.dev

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`] that I created and deployed through Vercel. 

You can find the end result at [www.eleco.dev](https://www.eleco.dev)

![eleco](https://user-images.githubusercontent.com/89133710/224331792-25b98137-e1f2-4f16-96af-5b93b1acc4e3.png)


## The idea

  I was looking into buying a car and had found an Excel file at [automobile-propre.com](https://www.automobile-propre.com/dossiers/calculette-rentabilite-voiture-electrique/) for calculating the cost of ownership of an **Electric Vehicle (EV) vs an Internal Combustion Engine (ICE)** one. At the same time, I was looking at EV tests made by Bjorn Nyland on [YouTube](https://www.youtube.com/@bjornnyland). 
  
  Bjorn provides all his test results in google sheets as well, so I thought it would be nice to incorporate the Excel calculator and all Bjorn's data into **one website** for a seamless experience, more enjoyable than scrubbing through data sheets.

I designed a rough UI/UX on a whiteboard and built the website using Next.js, Tailwind CSS and framer-motion.

I will continue developing the website, but this is a working version that **you are welcome to have a look at**.

## Getting Started

You will need a .env.local file with at least this entry :

```
NEXT_PUBLIC_IMAGES=$a valid token from https://www.imagin.studio/$
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
