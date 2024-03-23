// import data from './data.json';

// export function getProducts() {
//   return data;
// }


export async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products')

  if(!response.ok) {
    console.log(response);
    //  throw new Error('failed to fetch products')
  }

   return await response.json()
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProducts();
    res.status(200).json(products);
  }
}
