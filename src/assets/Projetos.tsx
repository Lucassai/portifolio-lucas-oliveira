import { useState } from 'react'

const projetos = [
  {
    nome: 'Delivery',
    notebook:
      'https://ik.imagekit.io/lkxant9gz/Delivery%20home%20page?updatedAt=1756491121767',
    smartphone:
      'https://ik.imagekit.io/lkxant9gz/Captura%20de%20tela%20de%202025-08-29%2015-13-00.png?updatedAt=1756494558723',
    link: 'https://delivey-pi.vercel.app/',
  },
  {
    nome: 'RH',
    notebook:
      'https://ik.imagekit.io/lkxant9gz/Captura%20de%20tela%20de%202025-08-29%2017-31-57.png?updatedAt=1756499536081',
    smartphone:
      'https://ik.imagekit.io/lkxant9gz/Captura%20de%20tela%20de%202025-08-29%2017-29-34.png?updatedAt=1756499535282',
    link: 'https://rh77-react-ten.vercel.app/',
  },
  {
    nome: 'Barbearia',
    notebook:
      'https://ik.imagekit.io/lkxant9gz/Captura%20de%20tela%20de%202025-08-29%2017-31-20.png?updatedAt=1756499535123',
    smartphone:
      'https://ik.imagekit.io/lkxant9gz/Captura%20de%20tela%20de%202025-08-29%2017-29-59.png?updatedAt=1756499674221',
    link: 'https://barbearia-react-two.vercel.app/',
  },
]

function Projetos() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % projetos.length)
  const prev = () =>
    setIndex((i) => (i - 1 + projetos.length) % projetos.length)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex justify-center bg-white/10 rounded-2xl pt-4 relative h-120 w-[600px] shadow-lg">
        <a
          href=" https://delivey-pi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Notebook tela */}
          <img
            className="absolute left-1/2 top-21 transform -translate-x-1/2 w-[405px] shadow-lg border-2"
            src={projetos[index].notebook}
            alt={projetos[index].nome + ' notebook'}
          />
          {/* Notebook base */}
          <img
            className="absolute left-1/2 top-16 transform -translate-x-1/2 w-[500px] "
            src="https://ik.imagekit.io/lkxant9gz/portatil-realista-2.png?updatedAt=1756496342005"
            alt="notebook"
          />
        </a>

        {/* Smartphone tela */}
        <img
          className="absolute left-[30%] top-[195px] transform -translate-x-1/2 w-[110px] rounded-2xl shadow-lg border-2 border-black-50"
          src={projetos[index].smartphone}
          alt={projetos[index].nome + ' smartphone'}
        />

        {/* Smartphone base */}
        <img
          className="absolute left-[30%] top-48 transform -translate-x-1/2 w-[120px] pointer-events-none"
          src="https://ik.imagekit.io/lkxant9gz/vecteezy_smartphone-interface-phone-mockup-with-empty-screen_19786960.png?updatedAt=1756491341663"
          alt="smartphone"
        />
      </div>
      <div className="flex space-x-4 mt-8 items-center">
        <button
          className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-900"
          onClick={prev}
        >
          ◀
        </button>
        <a
          href={projetos[index].link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-50 font-bold  hover:text-cyan-400 transition"
        >
          {projetos[index].nome}
        </a>
        <button
          className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-900"
          onClick={next}
        >
          ▶
        </button>
      </div>
    </div>
  )
}
export default Projetos
