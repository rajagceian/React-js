import React from 'react'
import ScrollTop from '../components/ScrollTop';

const Home = () => {
 const quotes = [
  { text: "You have the right to perform your duty, but not to the fruits of your actions.", author: "Bhagavad Gita" },
  { text: "Arise, awake, and stop not until the goal is reached.", author: "Swami Vivekananda" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "The soul is neither born, and nor does it die.", author: "Bhagavad Gita" },
  { text: "In a gentle way, you can shake the world.", author: "Mahatma Gandhi" },
  { text: "Take risks in your life. If you win, you can lead; if you lose, you can guide.", author: "Swami Vivekananda" },
  { text: "Set your heart upon your work, but never its reward.", author: "Bhagavad Gita" },
  { text: "All power is within you; you can do anything and everything.", author: "Swami Vivekananda" },
  { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
  { text: "When meditation is mastered, the mind is unwavering like the flame of a lamp.", author: "Bhagavad Gita" },

  { text: "Truth alone triumphs.", author: "Mundaka Upanishad" },
  { text: "As is your desire, so is your will.", author: "Brihadaranyaka Upanishad" },
  { text: "A person who never made a mistake never tried anything new.", author: "APJ Abdul Kalam" },
  { text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", author: "APJ Abdul Kalam" },
  { text: "Excellence happens not by accident. It is a process.", author: "APJ Abdul Kalam" },

  { text: "Where there is righteousness in the heart, there is beauty in the character.", author: "APJ Abdul Kalam" },
  { text: "The mind acts like an enemy for those who do not control it.", author: "Bhagavad Gita" },
  { text: "Help ever, hurt never.", author: "Sai Baba" },
  { text: "Love all, serve all.", author: "Sai Baba" },
  { text: "If you want to shine like a sun, first burn like a sun.", author: "APJ Abdul Kalam" },

  { text: "Work is worship.", author: "Indian Proverb" },
  { text: "A disciplined mind leads to happiness.", author: "Bhagavad Gita" },
  { text: "Strength is life, weakness is death.", author: "Swami Vivekananda" },
  { text: "The greatest religion is to be true to your own nature.", author: "Swami Vivekananda" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },

  { text: "The fragrance of flowers spreads only in the direction of the wind.", author: "Chanakya" },
  { text: "Education is the best friend.", author: "Chanakya" },
  { text: "A man is great by deeds, not by birth.", author: "Chanakya" },
  { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
  { text: "Peace comes from within. Do not seek it without.", author: "Buddha" },
  ];
  return (
      <div className="flex-1 p-6 md:p-10">

        {/* Page Container */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-10">

          {/* Home Page UI */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Welcome to Route Practice 🎯
            </h2>

            <p className="text-gray-600 max-w-xl">
              This UI is designed to practice React Router. Switch between pages,
              test navigation, and build your understanding visually.
            </p>

            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow-md transition">
              Explore Routes
            </button>
          </div>

        </div>
        {quotes.map((q,idx)=>{
          return <div key={idx} className="flex items-center justify-center min-h-50 px-4">
            <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-xl text-center transition duration-500">

              <p className="text-lg md:text-xl text-gray-700 italic">
                “{q.text}”
              </p>

              <h3 className="mt-4 text-indigo-600 font-semibold">
                — {q.author}
              </h3>

            </div>
          </div>
          })}
        <ScrollTop />
      </div>
  )
}

export default Home
