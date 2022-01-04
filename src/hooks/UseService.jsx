import useSWR from "swr"
export default function useService ( link) {
  
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data} = useSWR(link, fetcher)
  // renderizar datos
  return {
    data: data,
  }
}