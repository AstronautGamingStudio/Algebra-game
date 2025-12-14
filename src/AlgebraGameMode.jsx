import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, XCircle, ArrowRight, ArrowLeft, RotateCcw, HelpCircle, Lightbulb, Target, Trophy, Zap, Star, Heart, Clock, Award, Flame } from 'lucide-react';

const AlgebraGameMode = () => {
  const [mode, setMode] = useState('learn'); // 'learn', 'practice', or 'game'
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [practiceScore, setPracticeScore] = useState({ correct: 0, total: 0 });
  const [currentPracticeQuestion, setCurrentPracticeQuestion] = useState(null);
  const [practiceLesson, setPracticeLesson] = useState(0);
  
  // Game Mode States
  const [gameMode, setGameMode] = useState('menu'); // 'menu', 'time-attack', 'survival', 'streak', 'boss'
  const [gameStats, setGameStats] = useState({
    score: 0,
    streak: 0,
    bestStreak: 0,
    lives: 3,
    timeLeft: 60,
    level: 1,
    totalAnswered: 0,
    bossHealth: 100,
    playerHealth: 100
  });
  const [gameActive, setGameActive] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [showAchievement, setShowAchievement] = useState(null);

  // Timer for time attack mode
  useEffect(() => {
    let timer;
    if (gameActive && gameMode === 'time-attack' && gameStats.timeLeft > 0) {
      timer = setInterval(() => {
        setGameStats(prev => {
          if (prev.timeLeft <= 1) {
            endGame();
            return prev;
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameActive, gameMode, gameStats.timeLeft]);

  const lessons = [
    {
      id: 'linear-forms',
      title: 'Linear Equation Forms',
      difficulty: 1,
      icon: '📏',
      sections: [
        {
          title: 'Slope-Intercept Form (y = mx + b)',
          content: `The slope-intercept form is the most versatile form for graphing and understanding linear relationships.

FORMULA: y = mx + b

WHERE:
• m = slope (rise/run, or change in y / change in x)
• b = y-intercept (the y-value where the line crosses the y-axis)

UNDERSTANDING SLOPE:
• Positive slope: line rises from left to right
• Negative slope: line falls from left to right  
• Slope of 0: horizontal line
• Undefined slope: vertical line

DETAILED EXAMPLE 1:
Given: y = 3x - 4

Step 1: Identify the slope
The coefficient of x is 3, so m = 3

Step 2: Identify the y-intercept
The constant term is -4, so b = -4

Step 3: Interpret
The line crosses the y-axis at (0, -4) and for every 1 unit we move right, the line goes up 3 units.`,
          practice: {
            question: 'A line passes through points (3, 11) and (7, 19). Write the equation in slope-intercept form.',
            answer: 'y=2x+5',
            solution: `Step 1: Calculate the slope
m = (19 - 11)/(7 - 3) = 8/4 = 2

Step 2: Use point-slope form with point (3, 11)
y - 11 = 2(x - 3)
y - 11 = 2x - 6
y = 2x + 5

Answer: y = 2x + 5`
          }
        },
        {
          title: 'Point-Slope Form',
          content: `Point-slope form is extremely useful when you know a point on the line and the slope.

FORMULA: y - y₁ = m(x - x₁)

WHERE:
• m = slope
• (x₁, y₁) = any point on the line`,
          practice: {
            question: 'Write the equation of a line with slope -5 passing through point (2, 9) in point-slope form. Then convert to slope-intercept form.',
            answer: 'y=-5x+19',
            solution: `Step 1: Write in point-slope form
y - 9 = -5(x - 2)

Step 2: Convert to slope-intercept
y - 9 = -5x + 10
y = -5x + 19

Answer: y = -5x + 19`
          }
        }
      ]
    },
    {
      id: 'absolute-value',
      title: 'Absolute Value',
      difficulty: 2,
      icon: '|x|',
      sections: [
        {
          title: 'Understanding Absolute Value',
          content: `Absolute value represents the DISTANCE from zero on the number line.

NOTATION: |x| means "absolute value of x"

EXAMPLES:
|5| = 5
|-5| = 5
|0| = 0`,
          practice: {
            question: 'Solve |3x - 6| = 15. Enter the smaller solution.',
            answer: '-3',
            solution: `Step 1: Set up two equations
3x - 6 = 15  OR  3x - 6 = -15

Step 2: Solve
x = 7  OR  x = -3

The smaller solution is -3`
          }
        }
      ]
    },
    {
      id: 'quadratics',
      title: 'Quadratic Functions',
      difficulty: 3,
      icon: '²',
      sections: [
        {
          title: 'Introduction to Quadratics',
          content: `Quadratic functions create U-shaped curves called PARABOLAS.

GENERAL FORM: f(x) = ax² + bx + c`,
          practice: {
            question: 'Find the vertex of f(x) = -2(x + 3)² - 1. Enter as (x,y)',
            answer: '(-3,-1)',
            solution: `This is already in vertex form: f(x) = a(x - h)² + k

The vertex is (-3, -1)`
          }
        }
      ]
    }
  ];

  const generatePracticeQuestion = (lessonIndex) => {
    if (lessonIndex === 0) { // Linear
      const m = Math.floor(Math.random() * 10) - 5;
      const b = Math.floor(Math.random() * 20) - 10;
      const x = Math.floor(Math.random() * 5) + 1;
      const y = m * x + b;
      return {
        question: `A line passes through (${x}, ${y}) with slope ${m}. Write in slope-intercept form (y=mx+b).`,
        answer: `y=${m}x+${b}`,
        solution: `Using y = mx + b: ${y} = ${m}(${x}) + b, so b = ${b}. Answer: y = ${m}x + ${b}`,
        points: 10,
        difficulty: 1
      };
    } else if (lessonIndex === 1) { // Absolute Value
      const a = Math.floor(Math.random() * 5) + 1;
      const b = Math.floor(Math.random() * 10) - 5;
      const c = Math.floor(Math.random() * 15) + 5;
      const sol1 = (c - b) / a;
      const sol2 = (-c - b) / a;
      return {
        question: `Solve |${a}x + ${b}| = ${c}. Enter the larger solution.`,
        answer: `${Math.max(sol1, sol2)}`,
        solution: `${a}x + ${b} = ${c} gives x = ${sol1}; ${a}x + ${b} = ${-c} gives x = ${sol2}. Larger: ${Math.max(sol1, sol2)}`,
        points: 15,
        difficulty: 2
      };
    } else { // Quadratics
      const h = Math.floor(Math.random() * 8) - 4;
      const k = Math.floor(Math.random() * 10) - 5;
      return {
        question: `What is the x-coordinate of the vertex of f(x) = (x - ${h})² + ${k}?`,
        answer: `${h}`,
        solution: `Vertex form is f(x) = (x - h)² + k. The vertex is (${h}, ${k}). Answer: ${h}`,
        points: 20,
        difficulty: 3
      };
    }
  };

  const startGame = (selectedMode) => {
    setGameMode(selectedMode);
    setGameActive(true);
    setUserAnswer('');
    setFeedback(null);
    setShowSolution(false);
    
    const initialStats = {
      score: 0,
      streak: 0,
      bestStreak: 0,
      totalAnswered: 0,
      level: 1
    };

    if (selectedMode === 'time-attack') {
      setGameStats({ ...initialStats, timeLeft: 60, lives: 999 });
    } else if (selectedMode === 'survival') {
      setGameStats({ ...initialStats, lives: 3, timeLeft: 999 });
    } else if (selectedMode === 'streak') {
      setGameStats({ ...initialStats, streak: 0, bestStreak: 0, lives: 999, timeLeft: 999 });
    } else if (selectedMode === 'boss') {
      setGameStats({ ...initialStats, bossHealth: 100, playerHealth: 100, lives: 999, timeLeft: 999 });
    }

    setCurrentPracticeQuestion(generatePracticeQuestion(practiceLesson));
  };

  const endGame = () => {
    setGameActive(false);
    checkAchievements();
  };

  const checkAchievements = () => {
    const newAchievements = [];
    
    if (gameStats.streak >= 5 && !achievements.includes('streak-5')) {
      newAchievements.push({ id: 'streak-5', title: 'Hot Streak!', desc: '5 correct in a row', icon: '🔥' });
    }
    if (gameStats.streak >= 10 && !achievements.includes('streak-10')) {
      newAchievements.push({ id: 'streak-10', title: 'On Fire!', desc: '10 correct in a row', icon: '🔥🔥' });
    }
    if (gameStats.score >= 100 && !achievements.includes('score-100')) {
      newAchievements.push({ id: 'score-100', title: 'Century!', desc: 'Scored 100 points', icon: '💯' });
    }
    if (gameStats.totalAnswered >= 20 && !achievements.includes('answered-20')) {
      newAchievements.push({ id: 'answered-20', title: 'Dedicated!', desc: '20 questions answered', icon: '📚' });
    }

    if (newAchievements.length > 0) {
      setAchievements([...achievements, ...newAchievements.map(a => a.id)]);
      setShowAchievement(newAchievements[0]);
      setTimeout(() => setShowAchievement(null), 3000);
    }
  };

  const checkGameAnswer = () => {
    if (!currentPracticeQuestion) return;
    
    const userClean = userAnswer.toLowerCase().replace(/\s/g, '').replace(/[()]/g, '');
    const correctClean = currentPracticeQuestion.answer.toLowerCase().replace(/\s/g, '').replace(/[()]/g, '');
    
    const correct = userClean === correctClean || 
                   Math.abs(parseFloat(userClean) - parseFloat(correctClean)) < 0.15;
    
    setFeedback(correct ? 'correct' : 'incorrect');

    if (correct) {
      // Update stats based on game mode
      const points = currentPracticeQuestion.points || 10;
      const newStreak = gameStats.streak + 1;
      const bonusPoints = Math.floor(newStreak / 5) * 10; // Streak bonus
      
      setGameStats(prev => ({
        ...prev,
        score: prev.score + points + bonusPoints,
        streak: newStreak,
        bestStreak: Math.max(newStreak, prev.bestStreak),
        totalAnswered: prev.totalAnswered + 1,
        bossHealth: gameMode === 'boss' ? Math.max(0, prev.bossHealth - 20) : prev.bossHealth
      }));

      // Check for level up in time attack (every 5 correct)
      if (gameMode === 'time-attack' && (gameStats.totalAnswered + 1) % 5 === 0) {
        setGameStats(prev => ({ ...prev, level: prev.level + 1, timeLeft: prev.timeLeft + 10 }));
      }

      // Boss defeated
      if (gameMode === 'boss' && gameStats.bossHealth - 20 <= 0) {
        setTimeout(() => {
          alert('🎉 Boss Defeated! You Win!');
          endGame();
        }, 1000);
      }

      // Auto-advance after short delay
      setTimeout(() => {
        setUserAnswer('');
        setFeedback(null);
        setShowSolution(false);
        setCurrentPracticeQuestion(generatePracticeQuestion(practiceLesson));
      }, 1500);
    } else {
      // Incorrect answer
      setShowSolution(true);
      
      const newLives = gameStats.lives - 1;
      setGameStats(prev => ({
        ...prev,
        streak: 0,
        lives: newLives,
        totalAnswered: prev.totalAnswered + 1,
        playerHealth: gameMode === 'boss' ? Math.max(0, prev.playerHealth - 25) : prev.playerHealth
      }));

      // Check game over conditions
      if (gameMode === 'survival' && newLives <= 0) {
        setTimeout(() => {
          alert(`Game Over! Final Score: ${gameStats.score}`);
          endGame();
        }, 1500);
      }

      if (gameMode === 'boss' && gameStats.playerHealth - 25 <= 0) {
        setTimeout(() => {
          alert('💀 Defeated by the Boss! Try again!');
          endGame();
        }, 1500);
      }
    }

    checkAchievements();
  };

  const currentLessonData = lessons[currentLesson];
  const currentSectionData = currentLessonData.sections[currentSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <BookOpen className="text-indigo-600" size={36} />
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Algebra Mastery</h1>
                <p className="text-gray-600 text-sm sm:text-base">Master algebra through interactive games!</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setMode('learn');
                  setGameActive(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  mode === 'learn'
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Lightbulb size={20} />
                Learn
              </button>
              <button
                onClick={() => {
                  setMode('practice');
                  setGameActive(false);
                  if (!currentPracticeQuestion) {
                    setCurrentPracticeQuestion(generatePracticeQuestion(practiceLesson));
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  mode === 'practice'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Target size={20} />
                Practice
              </button>
              <button
                onClick={() => {
                  setMode('game');
                  setGameMode('menu');
                  setGameActive(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  mode === 'game'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Trophy size={20} />
                Game Mode
              </button>
            </div>
          </div>
        </div>

        {/* Achievement Notification */}
        {showAchievement && (
          <div className="fixed top-24 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-4 rounded-lg shadow-2xl animate-bounce z-50">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{showAchievement.icon}</span>
              <div>
                <div className="font-bold text-lg">{showAchievement.title}</div>
                <div className="text-sm">{showAchievement.desc}</div>
              </div>
            </div>
          </div>
        )}

        {/* Game Mode Selection Menu */}
        {mode === 'game' && gameMode === 'menu' && (
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-900">
              <Trophy className="inline mr-2" size={32} />
              Choose Your Game Mode
            </h2>

            {/* Topic Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Select Topic:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {lessons.map((lesson, idx) => (
                  <button
                    key={lesson.id}
                    onClick={() => setPracticeLesson(idx)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      practiceLesson === idx
                        ? 'border-purple-600 bg-purple-50 shadow-lg scale-105'
                        : 'border-gray-300 hover:border-purple-400'
                    }`}
                  >
                    <div className="text-3xl mb-2">{lesson.icon}</div>
                    <div className="font-semibold">{lesson.title}</div>
                    <div className="text-sm text-gray-600">Difficulty: {'⭐'.repeat(lesson.difficulty)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Game Modes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                onClick={() => startGame('time-attack')}
                className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8 rounded-xl cursor-pointer hover:scale-105 transition-transform shadow-xl text-white"
              >
                <Clock className="mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">⚡ Time Attack</h3>
                <p className="text-blue-100 mb-4">Answer as many questions as you can in 60 seconds! Earn bonus time for every 5 correct answers.</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded">60 seconds</span>
                  <span className="bg-white/20 px-3 py-1 rounded">Unlimited lives</span>
                </div>
              </div>

              <div 
                onClick={() => startGame('survival')}
                className="bg-gradient-to-br from-red-500 to-pink-500 p-8 rounded-xl cursor-pointer hover:scale-105 transition-transform shadow-xl text-white"
              >
                <Heart className="mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">❤️ Survival Mode</h3>
                <p className="text-red-100 mb-4">You have 3 lives. How high can you score before running out?</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded">3 lives</span>
                  <span className="bg-white/20 px-3 py-1 rounded">No time limit</span>
                </div>
              </div>

              <div 
                onClick={() => startGame('streak')}
                className="bg-gradient-to-br from-orange-500 to-yellow-500 p-8 rounded-xl cursor-pointer hover:scale-105 transition-transform shadow-xl text-white"
              >
                <Flame className="mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">🔥 Streak Master</h3>
                <p className="text-orange-100 mb-4">Build the longest streak of correct answers! Bonus points for every 5 in a row.</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded">Unlimited</span>
                  <span className="bg-white/20 px-3 py-1 rounded">Streak bonuses</span>
                </div>
              </div>

              <div 
                onClick={() => startGame('boss')}
                className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-xl cursor-pointer hover:scale-105 transition-transform shadow-xl text-white"
              >
                <Zap className="mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">👹 Boss Battle</h3>
                <p className="text-purple-100 mb-4">Fight the algebra boss! Each correct answer deals damage. Wrong answers hurt you!</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded">Boss: 100 HP</span>
                  <span className="bg-white/20 px-3 py-1 rounded">You: 100 HP</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Active Game Screen */}
        {mode === 'game' && gameMode !== 'menu' && gameActive && (
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
            {/* Game Stats Header */}
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">{gameStats.score}</div>
                  <div className="text-sm text-gray-600">Score</div>
                </div>
                
                {gameMode === 'time-attack' && (
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${gameStats.timeLeft <= 10 ? 'text-red-600 animate-pulse' : 'text-blue-700'}`}>
                      {gameStats.timeLeft}s
                    </div>
                    <div className="text-sm text-gray-600">Time Left</div>
                  </div>
                )}
                
                {gameMode === 'survival' && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">
                      {'❤️'.repeat(gameStats.lives)}
                    </div>
                    <div className="text-sm text-gray-600">Lives</div>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    {gameStats.streak} 🔥
                  </div>
                  <div className="text-sm text-gray-600">Streak</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{gameStats.totalAnswered}</div>
                  <div className="text-sm text-gray-600">Answered</div>
                </div>
              </div>

              {/* Boss Battle Health Bars */}
              {gameMode === 'boss' && (
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold text-purple-700">👹 Boss</span>
                      <span className="text-purple-700">{gameStats.bossHealth}/100 HP</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-red-600 h-4 transition-all duration-500"
                        style={{ width: `${gameStats.bossHealth}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold text-blue-700">🧙 You</span>
                      <span className="text-blue-700">{gameStats.playerHealth}/100 HP</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-green-600 h-4 transition-all duration-500"
                        style={{ width: `${gameStats.playerHealth}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Current Question */}
            {currentPracticeQuestion && (
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-purple-900">
                    Question #{gameStats.totalAnswered + 1}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-500 fill-yellow-500" size={20} />
                    <span className="font-bold text-purple-700">+{currentPracticeQuestion.points} pts</span>
                  </div>
                </div>
                
                <p className="text-gray-800 mb-4 text-lg font-medium">{currentPracticeQuestion.question}</p>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => {
                      setUserAnswer(e.target.value);
                      setFeedback(null);
                    }}
                    onKeyPress={(e) => e.key === 'Enter' && !feedback && checkGameAnswer()}
                    placeholder="Enter your answer"
                    disabled={feedback !== null}
                    className="flex-1 px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 text-lg disabled:bg-gray-100"
                  />
                  <button
                    onClick={checkGameAnswer}
                    disabled={feedback !== null || !userAnswer}
                    className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit
                  </button>
                </div>

                {feedback && (
                  <div className={`flex items-center gap-3 p-4 rounded-lg mb-4 ${
                    feedback === 'correct' 
                      ? 'bg-green-100 text-green-800 border-2 border-green-400' 
                      : 'bg-red-100 text-red-800 border-2 border-red-400'
                  }`}>
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle size={28} />
                        <div className="flex-1">
                          <div className="font-bold text-xl">🎉 Correct!</div>
                          <div className="text-sm">+{currentPracticeQuestion.points} points{gameStats.streak > 1 ? ` | ${gameStats.streak} streak!` : ''}</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <XCircle size={28} />
                        <div className="flex-1">
                          <div className="font-bold text-xl">Not quite!</div>
                          <div className="text-sm">{gameMode === 'survival' ? 'Lost a life!' : 'Keep trying!'}</div>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {showSolution && feedback === 'incorrect' && (
                  <div className="bg-white border-2 border-orange-300 rounded-lg p-6 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <HelpCircle className="text-orange-600" size={24} />
                      <h4 className="text-lg font-bold text-orange-900">Solution</h4>
                    </div>
                    <div className="text-gray-800 leading-relaxed">
                      {currentPracticeQuestion.solution}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* End Game Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to end the game?')) {
                    endGame();
                  }
                }}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold transition-colors"
              >
                End Game
              </button>
            </div>
          </div>
        )}

        {/* Game Over / Results Screen */}
        {mode === 'game' && !gameActive && gameMode !== 'menu' && (
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="text-center">
              <Trophy className="mx-auto mb-4 text-yellow-500" size={64} />
              <h2 className="text-3xl font-bold mb-4 text-purple-900">Game Over!</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-purple-700">{gameStats.score}</div>
                  <div className="text-gray-600">Final Score</div>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-orange-700">{gameStats.bestStreak}</div>
                  <div className="text-gray-600">Best Streak</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-green-700">{gameStats.totalAnswered}</div>
                  <div className="text-gray-600">Questions</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-blue-700">
                    {gameStats.totalAnswered > 0 ? Math.round((gameStats.score / (gameStats.totalAnswered * 20)) * 100) : 0}%
                  </div>
                  <div className="text-gray-600">Accuracy</div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => startGame(gameMode)}
                  className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-bold text-lg transition-colors"
                >
                  Play Again
                </button>
                <button
                  onClick={() => setGameMode('menu')}
                  className="px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-bold text-lg transition-colors"
                >
                  Main Menu
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Standard Practice Mode (unchanged) */}
        {mode === 'practice' && (
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">Practice Mode</h2>
            <p className="text-gray-600 mb-4">Select a topic and practice questions</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {lessons.map((lesson, idx) => (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setPracticeLesson(idx);
                    setCurrentPracticeQuestion(generatePracticeQuestion(idx));
                    setUserAnswer('');
                    setFeedback(null);
                    setShowSolution(false);
                    setPracticeScore({ correct: 0, total: 0 });
                  }}
                  className={`p-4 rounded-lg text-left transition-all ${
                    practiceLesson === idx
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-green-100 text-green-800 hover:bg-green-200'
                  }`}
                >
                  <div className="text-2xl mb-2">{lesson.icon}</div>
                  <div className="font-semibold">{lesson.title}</div>
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Score:</span>
                <span className="text-2xl font-bold text-green-800">
                  {practiceScore.correct} / {practiceScore.total}
                  {practiceScore.total > 0 && (
                    <span className="text-lg ml-2">
                      ({Math.round((practiceScore.correct / practiceScore.total) * 100)}%)
                    </span>
                  )}
                </span>
              </div>
            </div>

            {currentPracticeQuestion && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Question</h3>
                <p className="text-gray-800 mb-4 text-lg">{currentPracticeQuestion.question}</p>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => {
                      setUserAnswer(e.target.value);
                      setFeedback(null);
                      setShowSolution(false);
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const correct = userAnswer.toLowerCase().replace(/\s/g, '').replace(/[()]/g, '') === 
                                       currentPracticeQuestion.answer.toLowerCase().replace(/\s/g, '').replace(/[()]/g, '');
                        setFeedback(correct ? 'correct' : 'incorrect');
                        setPracticeScore(prev => ({
                          correct: prev.correct + (correct ? 1 : 0),
                          total: prev.total + 1
                        }));
                        if (!correct) setShowSolution(true);
                      }
                    }}
                    placeholder="Enter your answer"
                    className="flex-1 px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
                  />
                  <button
                    onClick={() => {
                      const correct = userAnswer.toLowerCase().replace(/\s/g, '').replace(/[()]/g, '') === 
                                     currentPracticeQuestion.answer.toLowerCase().replace(/\s/g, '').replace(/[()]/g, '');
                      setFeedback(correct ? 'correct' : 'incorrect');
                      setPracticeScore(prev => ({
                        correct: prev.correct + (correct ? 1 : 0),
                        total: prev.total + 1
                      }));
                      if (!correct) setShowSolution(true);
                    }}
                    className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold transition-colors"
                  >
                    Check
                  </button>
                </div>

                {feedback && (
                  <div className={`flex items-center gap-3 p-4 rounded-lg mb-4 ${
                    feedback === 'correct' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle size={24} />
                        <div className="flex-1">
                          <span className="font-semibold text-lg block">Correct!</span>
                        </div>
                        <button
                          onClick={() => {
                            setCurrentPracticeQuestion(generatePracticeQuestion(practiceLesson));
                            setUserAnswer('');
                            setFeedback(null);
                            setShowSolution(false);
                          }}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                        >
                          Next
                        </button>
                      </>
                    ) : (
                      <>
                        <XCircle size={24} />
                        <span className="font-semibold text-lg">Incorrect. Check the solution below.</span>
                      </>
                    )}
                  </div>
                )}

                {showSolution && feedback === 'incorrect' && (
                  <div className="bg-white border-2 border-orange-300 rounded-lg p-6 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <HelpCircle className="text-orange-600" size={24} />
                      <h4 className="text-lg font-bold text-orange-900">Solution</h4>
                    </div>
                    <div className="text-gray-800 leading-relaxed mb-4">
                      {currentPracticeQuestion.solution}
                    </div>
                    <button
                      onClick={() => {
                        setCurrentPracticeQuestion(generatePracticeQuestion(practiceLesson));
                        setUserAnswer('');
                        setFeedback(null);
                        setShowSolution(false);
                      }}
                      className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
                    >
                      Next Question
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Learn Mode (simplified version) */}
        {mode === 'learn' && (
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">LESSONS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {lessons.map((lesson, idx) => (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      setCurrentLesson(idx);
                      setCurrentSection(0);
                    }}
                    className={`p-4 rounded-lg text-left transition-all ${
                      currentLesson === idx
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-2xl mb-2">{lesson.icon}</div>
                    <div className="font-semibold">{lesson.title}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                {currentSectionData.title}
              </h2>
              <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                {currentSectionData.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlgebraGameMode;