export const productsLoader = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

export const productLoader = async(productId)=>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`)
  return response.json()
}