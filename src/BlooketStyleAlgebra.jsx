import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Zap, Target, Coins, Rocket, Crown, Ghost, Shield, Swords, Star, Heart, Flame, Sparkles, ChevronRight, Award, TrendingUp, Users } from 'lucide-react';

const BlooketStyleAlgebra = () => {
  const [screen, setScreen] = useState('home'); // 'home', 'game-select', 'playing', 'results'
  const [selectedGame, setSelectedGame] = useState(null);
  const [topic, setTopic] = useState(0);
  
  // Game states
  const [question, setQuestion] = useState(null);
  const [choices, setChoices] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  
  // Gold Quest states
  const [gold, setGold] = useState(0);
  const [streak, setStreak] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [chest, setChest] = useState({ found: false, value: 0 });
  
  // Tower Defense states
  const [tower, setTower] = useState({ health: 100, level: 1 });
  const [monsters, setMonsters] = useState([]);
  const [wave, setWave] = useState(1);
  
  // Racing states
  const [position, setPosition] = useState(0);
  const [opponent, setOpponent] = useState(0);
  const [raceDistance, setRaceDistance] = useState(100);
  
  // Factory states
  const [factory, setFactory] = useState({ level: 1, production: 0, workers: 1 });
  const [resources, setResources] = useState(0);
  
  // Cafe states
  const [cafe, setCafe] = useState({ customers: 0, money: 0, reputation: 0 });
  const [orders, setOrders] = useState([]);
  
  // Battle Royale states
  const [health, setHealth] = useState(100);
  const [armor, setArmor] = useState(0);
  const [weapons, setWeapons] = useState([]);
  const [opponents, setOpponents] = useState(20);
  const [zone, setZone] = useState(100);
  
  const [animateCoins, setAnimateCoins] = useState(false);
  const [comboMultiplier, setComboMultiplier] = useState(1);
  const [powerUps, setPowerUps] = useState([]);

  const topics = [
    { id: 0, name: 'Linear Equations', icon: '📐', color: 'from-blue-400 to-cyan-400' },
    { id: 1, name: 'Absolute Value', icon: '|x|', color: 'from-purple-400 to-pink-400' },
    { id: 2, name: 'Quadratics', icon: 'x²', color: 'from-orange-400 to-red-400' },
  ];

  const games = [
    {
      id: 'gold-quest',
      name: 'Gold Quest',
      icon: '💰',
      description: 'Answer questions to collect gold and find treasure chests!',
      color: 'from-yellow-400 to-orange-500',
      tagline: 'Collect 1000 gold to win!'
    },
    {
      id: 'tower-defense',
      name: 'Tower Defense',
      icon: '🏰',
      description: 'Defend your tower from waves of math monsters!',
      color: 'from-purple-500 to-indigo-600',
      tagline: 'Survive 10 waves!'
    },
    {
      id: 'racing',
      name: 'Math Racing',
      icon: '🏎️',
      description: 'Race to the finish by answering questions faster!',
      color: 'from-green-400 to-emerald-500',
      tagline: 'Beat your opponent!'
    },
    {
      id: 'factory',
      name: 'Factory',
      icon: '🏭',
      description: 'Build your math empire by solving problems!',
      color: 'from-gray-400 to-slate-600',
      tagline: 'Level up your factory!'
    },
    {
      id: 'cafe',
      name: 'Café',
      icon: '☕',
      description: 'Run a café and serve customers by solving equations!',
      color: 'from-amber-400 to-yellow-600',
      tagline: 'Earn 5-star reviews!'
    },
    {
      id: 'battle-royale',
      name: 'Battle Royale',
      icon: '⚔️',
      description: 'Last one standing wins! Answer to survive the storm!',
      color: 'from-red-500 to-pink-600',
      tagline: 'Be the last standing!'
    }
  ];

  const generateQuestion = () => {
    let q, answer, wrongAnswers;
    
    if (topic === 0) { // Linear
      const m = Math.floor(Math.random() * 10) - 5;
      const b = Math.floor(Math.random() * 20) - 10;
      const x = Math.floor(Math.random() * 5) + 1;
      const y = m * x + b;
      
      q = `What is the slope of a line passing through (${x}, ${y}) with y-intercept ${b}?`;
      answer = String(m);
      wrongAnswers = [m+1, m-1, m+2, -m].map(String);
    } else if (topic === 1) { // Absolute Value
      const a = Math.floor(Math.random() * 5) + 2;
      const result = Math.floor(Math.random() * 15) + 5;
      
      q = `What is |${a === result ? a : -a}|?`;
      answer = String(Math.abs(a));
      wrongAnswers = [-a, a+1, a-1, a*2].map(v => String(Math.abs(v)));
    } else { // Quadratics
      const h = Math.floor(Math.random() * 8) - 4;
      const k = Math.floor(Math.random() * 10) - 5;
      
      q = `What is the x-coordinate of the vertex of f(x) = (x - ${h})² + ${k}?`;
      answer = String(h);
      wrongAnswers = [h+1, h-1, k, -h].map(String);
    }
    
    // Create choices
    const allChoices = [answer, ...wrongAnswers.slice(0, 3)]
      .filter((v, i, arr) => arr.indexOf(v) === i)
      .sort(() => Math.random() - 0.5);
    
    setQuestion({ text: q, answer });
    setChoices(allChoices);
    setShowNextButton(false);
    setFeedback(null);
  };

  const checkAnswer = (selected) => {
    const correct = selected === question.answer;
    setFeedback(correct ? 'correct' : 'wrong');
    setShowNextButton(true);
    
    if (correct) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setQuestionsAnswered(questionsAnswered + 1);
      
      // Calculate multiplier based on streak
      const multiplier = Math.floor(newStreak / 3) + 1;
      setComboMultiplier(multiplier);
      
      // Game-specific rewards
      if (selectedGame === 'gold-quest') {
        const goldEarned = 50 * multiplier;
        setGold(gold + goldEarned);
        setAnimateCoins(true);
        setTimeout(() => setAnimateCoins(false), 600);
        
        // Random treasure chest
        if (Math.random() > 0.7) {
          const chestValue = Math.floor(Math.random() * 200) + 100;
          setChest({ found: true, value: chestValue });
          setTimeout(() => {
            setGold(g => g + chestValue);
            setChest({ found: false, value: 0 });
          }, 2000);
        }
      } else if (selectedGame === 'tower-defense') {
        // Defeat monster
        if (monsters.length > 0) {
          const newMonsters = [...monsters];
          newMonsters.shift();
          setMonsters(newMonsters);
          
          if (newMonsters.length === 0) {
            setWave(wave + 1);
            setTimeout(() => {
              const newWaveMonsters = Array(wave + 2).fill(null);
              setMonsters(newWaveMonsters);
            }, 1000);
          }
        }
      } else if (selectedGame === 'racing') {
        setPosition(position + 10 * multiplier);
        setOpponent(opponent + Math.floor(Math.random() * 7) + 3);
      } else if (selectedGame === 'factory') {
        const produced = 10 * multiplier * factory.workers;
        setResources(resources + produced);
        setFactory(f => ({ ...f, production: f.production + produced }));
        
        if (resources > 100 * factory.level) {
          setFactory(f => ({ level: f.level + 1, workers: f.workers + 1, production: f.production }));
        }
      } else if (selectedGame === 'cafe') {
        const earnings = 20 * multiplier;
        setCafe(c => ({ 
          ...c, 
          money: c.money + earnings,
          customers: c.customers + 1,
          reputation: Math.min(100, c.reputation + 2)
        }));
      } else if (selectedGame === 'battle-royale') {
        setOpponents(Math.max(1, opponents - 1));
        setArmor(Math.min(100, armor + 10));
        
        if (Math.random() > 0.6) {
          const weapon = ['🗡️ Sword', '🏹 Bow', '🔫 Blaster', '⚡ Lightning'][Math.floor(Math.random() * 4)];
          setWeapons([...weapons, weapon]);
        }
      }
    } else {
      setStreak(0);
      setComboMultiplier(1);
      
      // Game-specific penalties
      if (selectedGame === 'tower-defense') {
        setTower(t => ({ ...t, health: Math.max(0, t.health - 15) }));
      } else if (selectedGame === 'racing') {
        setOpponent(opponent + 12);
      } else if (selectedGame === 'battle-royale') {
        const damage = armor > 0 ? 10 : 20;
        setArmor(Math.max(0, armor - 10));
        setHealth(Math.max(0, health - (armor > 0 ? 0 : damage)));
      }
    }
  };

  const nextQuestion = () => {
    generateQuestion();
  };

  const startGame = (gameId) => {
    setSelectedGame(gameId);
    setScreen('playing');
    
    // Reset all states
    setGold(0);
    setStreak(0);
    setQuestionsAnswered(0);
    setComboMultiplier(1);
    setTower({ health: 100, level: 1 });
    setMonsters(Array(3).fill(null));
    setWave(1);
    setPosition(0);
    setOpponent(0);
    setFactory({ level: 1, production: 0, workers: 1 });
    setResources(0);
    setCafe({ customers: 0, money: 0, reputation: 0 });
    setHealth(100);
    setArmor(0);
    setWeapons([]);
    setOpponents(20);
    setZone(100);
    
    generateQuestion();
  };

  const checkWinCondition = () => {
    if (selectedGame === 'gold-quest' && gold >= 1000) {
      setScreen('results');
      return true;
    } else if (selectedGame === 'tower-defense' && (tower.health <= 0 || wave > 10)) {
      setScreen('results');
      return true;
    } else if (selectedGame === 'racing' && (position >= raceDistance || opponent >= raceDistance)) {
      setScreen('results');
      return true;
    } else if (selectedGame === 'factory' && factory.level >= 10) {
      setScreen('results');
      return true;
    } else if (selectedGame === 'cafe' && cafe.reputation >= 100) {
      setScreen('results');
      return true;
    } else if (selectedGame === 'battle-royale' && (health <= 0 || opponents === 1)) {
      setScreen('results');
      return true;
    }
    return false;
  };

  useEffect(() => {
    checkWinCondition();
  }, [gold, tower, position, opponent, factory, cafe, health, opponents]);

  // Battle Royale zone shrinking
  useEffect(() => {
    if (selectedGame === 'battle-royale' && screen === 'playing') {
      const timer = setInterval(() => {
        setZone(z => Math.max(0, z - 2));
        if (zone <= 50 && Math.random() > 0.7) {
          setHealth(h => Math.max(0, h - 5));
        }
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [selectedGame, screen, zone]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        
        {/* HOME SCREEN */}
        {screen === 'home' && (
          <div className="text-center py-12 animate-fadeIn">
            <div className="mb-8 transform hover:scale-110 transition-transform duration-300">
              <div className="text-8xl mb-4 animate-bounce">🎮</div>
              <h1 className="text-6xl font-black text-white mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  ALGEBRA
                </span>
                <br />
                <span className="text-white">ARCADE</span>
              </h1>
              <p className="text-xl text-purple-200">Master math through epic games!</p>
            </div>
            
            <button
              onClick={() => setScreen('game-select')}
              className="group relative px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 animate-pulse"
            >
              <Sparkles className="inline mr-3 group-hover:rotate-180 transition-transform duration-500" size={32} />
              START PLAYING
              <Sparkles className="inline ml-3 group-hover:rotate-180 transition-transform duration-500" size={32} />
            </button>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {games.map(game => (
                <div key={game.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all">
                  <div className="text-4xl mb-2">{game.icon}</div>
                  <div className="text-white font-bold">{game.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GAME SELECTION */}
        {screen === 'game-select' && (
          <div className="animate-fadeIn">
            <div className="text-center mb-8">
              <button
                onClick={() => setScreen('home')}
                className="mb-4 text-white/60 hover:text-white transition-colors"
              >
                ← Back to Home
              </button>
              <h2 className="text-4xl font-black text-white mb-4">Choose Your Game</h2>
              
              {/* Topic Selection */}
              <div className="flex justify-center gap-4 mb-8">
                {topics.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setTopic(t.id)}
                    className={`px-6 py-3 rounded-xl font-bold transition-all ${
                      topic === t.id
                        ? 'bg-white text-purple-900 scale-110 shadow-xl'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {t.icon} {t.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Game Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map(game => (
                <div
                  key={game.id}
                  onClick={() => startGame(game.id)}
                  className={`group cursor-pointer bg-gradient-to-br ${game.color} rounded-2xl p-6 shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-300`}
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{game.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-2">{game.name}</h3>
                  <p className="text-white/90 mb-4">{game.description}</p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-bold text-sm">
                    {game.tagline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PLAYING SCREEN */}
        {screen === 'playing' && question && (
          <div className="animate-fadeIn">
            {/* Game-specific HUD */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 mb-6 border-4 border-white/20">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="text-white">
                  <div className="text-sm opacity-60">Playing:</div>
                  <div className="text-2xl font-black">{games.find(g => g.id === selectedGame)?.name}</div>
                </div>

                {selectedGame === 'gold-quest' && (
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className={`text-3xl font-black text-yellow-400 ${animateCoins ? 'animate-bounce' : ''}`}>
                        💰 {gold}
                      </div>
                      <div className="text-white/60 text-sm">Gold</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-orange-400">
                        🔥 {streak}
                      </div>
                      <div className="text-white/60 text-sm">Streak</div>
                    </div>
                  </div>
                )}

                {selectedGame === 'tower-defense' && (
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-black text-green-400">
                        🏰 {tower.health}%
                      </div>
                      <div className="text-white/60 text-sm">Tower HP</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-red-400">
                        Wave {wave}
                      </div>
                      <div className="text-white/60 text-sm">{monsters.length} monsters</div>
                    </div>
                  </div>
                )}

                {selectedGame === 'racing' && (
                  <div className="flex-1 max-w-md">
                    <div className="mb-2 flex justify-between text-white">
                      <span>🏎️ You: {position}m</span>
                      <span>🏁 {raceDistance}m</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-6 mb-2">
                      <div 
                        className="bg-green-500 h-6 rounded-full transition-all duration-500"
                        style={{ width: `${(position/raceDistance)*100}%` }}
                      />
                    </div>
                    <div className="mb-2 flex justify-between text-white">
                      <span>🤖 Bot: {opponent}m</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-6">
                      <div 
                        className="bg-red-500 h-6 rounded-full transition-all duration-500"
                        style={{ width: `${(opponent/raceDistance)*100}%` }}
                      />
                    </div>
                  </div>
                )}

                {selectedGame === 'factory' && (
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-blue-400">
                        🏭 Lv.{factory.level}
                      </div>
                      <div className="text-white/60 text-sm">Factory</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-green-400">
                        📦 {resources}
                      </div>
                      <div className="text-white/60 text-sm">Resources</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-yellow-400">
                        👷 {factory.workers}
                      </div>
                      <div className="text-white/60 text-sm">Workers</div>
                    </div>
                  </div>
                )}

                {selectedGame === 'cafe' && (
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-green-400">
                        💵 ${cafe.money}
                      </div>
                      <div className="text-white/60 text-sm">Earnings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-yellow-400">
                        ⭐ {cafe.reputation}%
                      </div>
                      <div className="text-white/60 text-sm">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-blue-400">
                        👥 {cafe.customers}
                      </div>
                      <div className="text-white/60 text-sm">Served</div>
                    </div>
                  </div>
                )}

                {selectedGame === 'battle-royale' && (
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-red-400">
                        ❤️ {health}
                      </div>
                      <div className="text-white/60 text-sm">Health</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-blue-400">
                        🛡️ {armor}
                      </div>
                      <div className="text-white/60 text-sm">Armor</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-purple-400">
                        👤 {opponents}
                      </div>
                      <div className="text-white/60 text-sm">Left</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Combo Multiplier */}
              {comboMultiplier > 1 && (
                <div className="mt-4 text-center">
                  <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-black text-xl animate-pulse">
                    🔥 {comboMultiplier}x COMBO! 🔥
                  </div>
                </div>
              )}
            </div>

            {/* Treasure Chest Popup */}
            {chest.found && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm animate-fadeIn">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-12 text-center transform scale-110 animate-bounce">
                  <div className="text-8xl mb-4">💎</div>
                  <div className="text-4xl font-black text-white mb-2">TREASURE FOUND!</div>
                  <div className="text-6xl font-black text-yellow-900">+{chest.value} Gold!</div>
                </div>
              </div>
            )}

            {/* Tower Defense Monsters */}
            {selectedGame === 'tower-defense' && (
              <div className="mb-6 flex justify-center gap-4">
                {monsters.map((_, i) => (
                  <div key={i} className="text-6xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                    👾
                  </div>
                ))}
              </div>
            )}

            {/* Question Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl mb-6">
              <div className="flex justify-between items-start mb-6">
                <div className="text-3xl font-black text-purple-900">
                  Question #{questionsAnswered + 1}
                </div>
                {streak > 2 && (
                  <div className="bg-orange-100 px-4 py-2 rounded-full">
                    <span className="text-2xl">🔥</span>
                    <span className="font-black text-orange-600 ml-2">{streak} Streak!</span>
                  </div>
                )}
              </div>

              <div className="text-2xl font-bold text-gray-800 mb-8 p-6 bg-purple-50 rounded-2xl">
                {question.text}
              </div>

              {/* Multiple Choice */}
              <div className="grid grid-cols-2 gap-4">
                {choices.map((choice, i) => (
                  <button
                    key={i}
                    onClick={() => !feedback && checkAnswer(choice)}
                    disabled={feedback !== null}
                    className={`group relative p-8 rounded-2xl text-2xl font-bold transition-all transform hover:scale-105 ${
                      feedback === 'correct' && choice === question.answer
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white scale-110 shadow-2xl'
                        : feedback === 'wrong' && choice === question.answer
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                        : feedback === 'wrong' && userAnswer === choice
                        ? 'bg-gradient-to-r from-red-400 to-pink-500 text-white'
                        : 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white hover:from-purple-500 hover:to-indigo-600'
                    } disabled:cursor-not-allowed shadow-xl`}
                  >
                    {choice}
                    {feedback === 'correct' && choice === question.answer && (
                      <span className="absolute top-2 right-2 text-4xl animate-bounce">✅</span>
                    )}
                    {feedback === 'wrong' && choice === question.answer && (
                      <span className="absolute top-2 right-2 text-4xl">✅</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Feedback */}
              {feedback && (
                <div className={`mt-6 p-6 rounded-2xl text-center transform animate-slideIn ${
                  feedback === 'correct' 
                    ? 'bg-green-100 border-4 border-green-500' 
                    : 'bg-red-100 border-4 border-red-500'
                }`}>
                  <div className={`text-4xl font-black mb-2 ${
                    feedback === 'correct' ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {feedback === 'correct' ? '🎉 CORRECT!' : '❌ WRONG!'}
                  </div>
                  {feedback === 'correct' && (
                    <div className="text-xl font-bold text-green-600">
                      {selectedGame === 'gold-quest' && `+${50 * comboMultiplier} Gold!`}
                      {selectedGame === 'tower-defense' && 'Monster Defeated!'}
                      {selectedGame === 'racing' && `+${10 * comboMultiplier}m Forward!`}
                      {selectedGame === 'factory' && `+${10 * comboMultiplier * factory.workers} Resources!`}
                      {selectedGame === 'cafe' && `+$${20 * comboMultiplier}!`}
                      {selectedGame === 'battle-royale' && 'Enemy Eliminated!'}
                    </div>
                  )}
                </div>
              )}

              {/* Next Button */}
              {showNextButton && (
                <button
                  onClick={nextQuestion}
                  className="w-full mt-6 py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-black rounded-2xl hover:scale-105 transition-all shadow-xl"
                >
                  Next Question →
                </button>
              )}
            </div>

            {/* Quit Button */}
            <div className="text-center">
              <button
                onClick={() => setScreen('results')}
                className="text-white/60 hover:text-white transition-colors"
              >
                End Game
              </button>
            </div>
          </div>
        )}

        {/* RESULTS SCREEN */}
        {screen === 'results' && (
          <div className="text-center py-12 animate-fadeIn">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-2xl mx-auto">
              {/* Win/Lose Status */}
              {(
                (selectedGame === 'gold-quest' && gold >= 1000) ||
                (selectedGame === 'tower-defense' && wave > 10) ||
                (selectedGame === 'racing' && position > opponent) ||
                (selectedGame === 'factory' && factory.level >= 10) ||
                (selectedGame === 'cafe' && cafe.reputation >= 100) ||
                (selectedGame === 'battle-royale' && opponents === 1)
              ) ? (
                <>
                  <div className="text-8xl mb-4 animate-bounce">🏆</div>
                  <div className="text-5xl font-black text-yellow-400 mb-4">VICTORY!</div>
                </>
              ) : (
                <>
                  <div className="text-8xl mb-4">😅</div>
                  <div className="text-5xl font-black text-white mb-4">Game Over</div>
                </>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/20 rounded-xl p-6">
                  <div className="text-4xl font-black text-white">{questionsAnswered}</div>
                  <div className="text-white/60">Questions Answered</div>
                </div>
                <div className="bg-white/20 rounded-xl p-6">
                  <div className="text-4xl font-black text-orange-400">{streak}</div>
                  <div className="text-white/60">Best Streak</div>
                </div>
                {selectedGame === 'gold-quest' && (
                  <div className="bg-white/20 rounded-xl p-6 col-span-2">
                    <div className="text-5xl font-black text-yellow-400">💰 {gold}</div>
                    <div className="text-white/60">Total Gold Collected</div>
                  </div>
                )}
                {selectedGame === 'factory' && (
                  <div className="bg-white/20 rounded-xl p-6 col-span-2">
                    <div className="text-5xl font-black text-blue-400">🏭 Level {factory.level}</div>
                    <div className="text-white/60">{resources} Resources Produced</div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => startGame(selectedGame)}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-black rounded-xl hover:scale-105 transition-all shadow-xl"
                >
                  Play Again
                </button>
                <button
                  onClick={() => setScreen('game-select')}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xl font-black rounded-xl hover:scale-105 transition-all shadow-xl"
                >
                  Choose New Game
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BlooketStyleAlgebra;