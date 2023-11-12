export function ImageList({ children }: { children: React.ReactNode }) {
  return (
    <ul className=' flex flex-wrap justify-center gap-4 p-4 m-3'>
      {children}
    </ul>
  )
};