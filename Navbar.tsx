
export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <div>Prabowo Koin</div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
      </div>
    </nav>
  )
}
