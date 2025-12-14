import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle, ArrowRight, ArrowLeft, RotateCcw, HelpCircle, Lightbulb, Target } from 'lucide-react';

const AlgebraLearning = () => {
  const [mode, setMode] = useState('learn'); // 'learn' or 'practice'
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [practiceScore, setPracticeScore] = useState({ correct: 0, total: 0 });
  const [currentPracticeQuestion, setCurrentPracticeQuestion] = useState(null);
  const [practiceLesson, setPracticeLesson] = useState(0);

  const lessons = [
    {
      id: 'linear-forms',
      title: 'Linear Equation Forms',
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
The line crosses the y-axis at (0, -4) and for every 1 unit we move right, the line goes up 3 units.

DETAILED EXAMPLE 2:
Write the equation of a line with slope -2/3 passing through point (0, 5)

Step 1: Recognize we have m and b
Since the point has x = 0, it IS the y-intercept!
m = -2/3, b = 5

Step 2: Substitute into y = mx + b
y = -2/3 x + 5

DETAILED EXAMPLE 3:
Convert from two points to slope-intercept form
Points: (2, 7) and (5, 13)

Step 1: Find the slope
m = (y₂ - y₁)/(x₂ - x₁) = (13 - 7)/(5 - 2) = 6/3 = 2

Step 2: Use y = mx + b with one point to find b
Using (2, 7): 7 = 2(2) + b
7 = 4 + b
b = 3

Step 3: Write the equation
y = 2x + 3`,
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
          title: 'Point-Slope Form (y - y₁ = m(x - x₁))',
          content: `Point-slope form is extremely useful when you know a point on the line and the slope.

FORMULA: y - y₁ = m(x - x₁)

WHERE:
• m = slope
• (x₁, y₁) = any point on the line

WHEN TO USE:
• You know the slope and one point
• You're finding the equation from two points (find m first, then use one point)
• You need to write an equation quickly without finding the y-intercept

DETAILED EXAMPLE 1:
Write the equation of a line with slope 4 passing through (-2, 5)

Step 1: Identify your values
m = 4, x₁ = -2, y₁ = 5

Step 2: Substitute into the formula
y - 5 = 4(x - (-2))
y - 5 = 4(x + 2)

This is your answer in point-slope form!

Step 3: (Optional) Convert to slope-intercept
y - 5 = 4x + 8
y = 4x + 13

DETAILED EXAMPLE 2:
Find the equation of the line through (3, -2) and (7, 6)

Step 1: Calculate slope
m = (6 - (-2))/(7 - 3) = 8/4 = 2

Step 2: Use point-slope with either point (let's use (3, -2))
y - (-2) = 2(x - 3)
y + 2 = 2(x - 3)

Step 3: Simplify if needed
y + 2 = 2x - 6
y = 2x - 8

DETAILED EXAMPLE 3:
A line has slope -3/4 and passes through (8, 1). Write in point-slope form.

Solution:
y - 1 = -3/4(x - 8)

That's it! Notice we don't need to simplify unless asked.`,
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
        },
        {
          title: 'Standard Form (Ax + By = C)',
          content: `Standard form is useful for finding intercepts quickly and is the preferred form in many real-world applications.

FORMULA: Ax + By = C

WHERE:
• A, B, and C are integers (whole numbers)
• A should be positive
• A and B should not both be zero

WHY USE STANDARD FORM:
• Easy to find x-intercept (set y = 0)
• Easy to find y-intercept (set x = 0)
• Useful in systems of equations
• Preferred in many applications

DETAILED EXAMPLE 1:
Convert y = 2x - 6 to standard form

Step 1: Move x term to left side
-2x + y = -6

Step 2: Make A positive by multiplying by -1
2x - y = 6

Answer: 2x - y = 6

DETAILED EXAMPLE 2:
Convert y = 3/4 x + 2 to standard form

Step 1: Eliminate fractions by multiplying everything by 4
4y = 3x + 8

Step 2: Rearrange
-3x + 4y = 8

Step 3: Make A positive
3x - 4y = -8

Answer: 3x - 4y = -8

DETAILED EXAMPLE 3:
Find the intercepts of 5x + 3y = 15

For x-intercept (set y = 0):
5x + 3(0) = 15
5x = 15
x = 3
Point: (3, 0)

For y-intercept (set x = 0):
5(0) + 3y = 15
3y = 15
y = 5
Point: (0, 5)

DETAILED EXAMPLE 4:
Convert from point-slope to standard form
Starting with: y - 4 = 2(x - 3)

Step 1: Distribute
y - 4 = 2x - 6

Step 2: Rearrange
-2x + y = -2

Step 3: Make A positive
2x - y = 2

Answer: 2x - y = 2`,
          practice: {
            question: 'Convert y = -3/2 x + 6 to standard form (Ax + By = C where A is positive).',
            answer: '3x+2y=12',
            solution: `Step 1: Multiply everything by 2 to eliminate fraction
2y = -3x + 12

Step 2: Rearrange
3x + 2y = 12

Answer: 3x + 2y = 12

Verification: A = 3 (positive ✓), all coefficients are integers ✓`
          }
        }
      ]
    },
    {
      id: 'absolute-value',
      title: 'Absolute Value Functions',
      sections: [
        {
          title: 'Understanding Absolute Value',
          content: `Absolute value represents the DISTANCE from zero on the number line. Distance is always positive or zero.

NOTATION: |x| means "absolute value of x"

KEY CONCEPT: Distance has no direction, only magnitude.

EXAMPLES:
|5| = 5 (distance from 0 to 5)
|-5| = 5 (distance from 0 to -5)  
|0| = 0 (distance from 0 to 0)
|-3.7| = 3.7

PROPERTIES:
1. |x| ≥ 0 for all real numbers x
2. |x| = |-x|
3. |xy| = |x| · |y|
4. |x/y| = |x|/|y| when y ≠ 0

ABSOLUTE VALUE EQUATIONS:
When solving |x| = a:
• If a > 0: two solutions, x = a or x = -a
• If a = 0: one solution, x = 0
• If a < 0: no solution (absolute value cannot be negative)

DETAILED EXAMPLE 1:
Solve |x| = 7

Since 7 > 0, we have two solutions:
x = 7 or x = -7

Check: |7| = 7 ✓ and |-7| = 7 ✓

DETAILED EXAMPLE 2:
Solve |x - 3| = 5

Step 1: Set up two equations
x - 3 = 5  OR  x - 3 = -5

Step 2: Solve each
x = 8  OR  x = -2

Check: |8 - 3| = |5| = 5 ✓
      |-2 - 3| = |-5| = 5 ✓

DETAILED EXAMPLE 3:
Solve |2x + 1| = 9

Step 1: Set up two equations
2x + 1 = 9  OR  2x + 1 = -9

Step 2: Solve each
2x = 8        2x = -10
x = 4    OR   x = -5

Check: |2(4) + 1| = |9| = 9 ✓
      |2(-5) + 1| = |-9| = 9 ✓`,
          practice: {
            question: 'Solve |3x - 6| = 15. Enter the smaller solution.',
            answer: '-3',
            solution: `Step 1: Set up two equations
3x - 6 = 15  OR  3x - 6 = -15

Step 2: Solve the first equation
3x - 6 = 15
3x = 21
x = 7

Step 3: Solve the second equation  
3x - 6 = -15
3x = -9
x = -3

The two solutions are x = 7 and x = -3
The smaller solution is -3`
          }
        },
        {
          title: 'Absolute Value Functions - Vertex Form',
          content: `The absolute value function creates a V-shaped graph called a "V-graph" or "absolute value graph."

BASIC FORM: y = |x|
This creates a V with vertex at origin (0, 0)

VERTEX FORM: y = a|x - h| + k

TRANSFORMATIONS:
• (h, k) = vertex of the V
• a = vertical stretch/compression and reflection
  - If a > 0: opens upward
  - If a < 0: opens downward
  - If |a| > 1: narrower (steeper) than y = |x|
  - If 0 < |a| < 1: wider than y = |x|

DETAILED EXAMPLE 1:
Analyze y = 2|x - 3| + 1

Vertex: (3, 1)
Opens: upward (a = 2 > 0)
Steepness: narrower than basic V (|a| = 2 > 1)
How to graph:
1. Plot vertex at (3, 1)
2. From vertex, go right 1, up 2: plot (4, 3)
3. From vertex, go left 1, up 2: plot (2, 3)
4. Continue pattern

DETAILED EXAMPLE 2:
Analyze y = -1/2|x + 4| - 2

Vertex: (-4, -2) [remember x + 4 = x - (-4)]
Opens: downward (a = -1/2 < 0)
Steepness: wider than basic V (|a| = 1/2 < 1)
How to graph:
1. Plot vertex at (-4, -2)
2. From vertex, go right 2, down 1: plot (-2, -3)
3. From vertex, go left 2, down 1: plot (-6, -3)
4. Continue pattern

DETAILED EXAMPLE 3:
Write equation for V with vertex (2, -5), opening upward, passing through (4, -1)

Step 1: Start with form
y = a|x - 2| - 5

Step 2: Use point (4, -1) to find a
-1 = a|4 - 2| - 5
-1 = a|2| - 5
-1 = 2a - 5
4 = 2a
a = 2

Step 3: Write final equation
y = 2|x - 2| - 5

INTERCEPT FORM: y = a|x - p||x - q|
Where p and q are the x-intercepts (if they exist)`,
          practice: {
            question: 'What is the vertex of y = -3|x + 2| + 7? Enter as (x,y)',
            answer: '(-2,7)',
            solution: `The vertex form is y = a|x - h| + k where (h, k) is the vertex.

Given: y = -3|x + 2| + 7

Step 1: Rewrite x + 2 as x - h form
x + 2 = x - (-2)

So h = -2

Step 2: Identify k
k = 7

Therefore, the vertex is (-2, 7)

Additional info:
• a = -3, so the V opens downward
• |a| = 3, so it's narrower/steeper than y = |x|`
          }
        },
        {
          title: 'Absolute Value Inequalities',
          content: `Absolute value inequalities require us to think about distance on the number line.

TYPE 1: |x| < a (or ≤)
This means "distance from 0 is less than a"
Solution: -a < x < a

TYPE 2: |x| > a (or ≥)  
This means "distance from 0 is greater than a"
Solution: x < -a OR x > a

DETAILED EXAMPLE 1:
Solve |x| < 5

This means x is within 5 units of zero.
Solution: -5 < x < 5
Interval notation: (-5, 5)

DETAILED EXAMPLE 2:
Solve |x| ≥ 3

This means x is at least 3 units from zero.
Solution: x ≤ -3 OR x ≥ 3
Interval notation: (-∞, -3] ∪ [3, ∞)

DETAILED EXAMPLE 3:
Solve |x - 4| < 6

Step 1: Apply the rule for < inequality
-6 < x - 4 < 6

Step 2: Add 4 to all parts
-2 < x < 10

Solution: (-2, 10)

DETAILED EXAMPLE 4:
Solve |2x + 3| > 7

Step 1: Set up two inequalities (> means OR)
2x + 3 > 7  OR  2x + 3 < -7

Step 2: Solve first inequality
2x > 4
x > 2

Step 3: Solve second inequality
2x < -10
x < -5

Solution: x < -5 OR x > 2
Interval notation: (-∞, -5) ∪ (2, ∞)

DETAILED EXAMPLE 5:
Solve |3x - 1| ≤ 8

Step 1: Apply the rule for ≤ inequality
-8 ≤ 3x - 1 ≤ 8

Step 2: Add 1 to all parts
-7 ≤ 3x ≤ 9

Step 3: Divide by 3
-7/3 ≤ x ≤ 3

Solution: [-7/3, 3]`,
          practice: {
            question: 'Solve |2x - 5| > 9. What is the solution for the right side (the larger values)? Enter as x>a',
            answer: 'x>7',
            solution: `Step 1: Set up two inequalities (> means OR)
2x - 5 > 9  OR  2x - 5 < -9

Step 2: Solve right side (larger values)
2x - 5 > 9
2x > 14
x > 7

Step 3: Solve left side (for completeness)
2x - 5 < -9
2x < -4
x < -2

Full solution: x < -2 OR x > 7

The right side answer is x > 7`
          }
        }
      ]
    },
    {
      id: 'quadratics-intro',
      title: 'Quadratic Functions - Forms',
      sections: [
        {
          title: 'Introduction to Quadratics',
          content: `Quadratic functions create U-shaped curves called PARABOLAS.

GENERAL FORM: f(x) = ax² + bx + c

WHERE:
• a ≠ 0 (if a = 0, it's not quadratic!)
• a determines direction:
  - a > 0: opens upward (∪)
  - a < 0: opens downward (∩)
• |a| determines width:
  - |a| > 1: narrower
  - 0 < |a| < 1: wider

KEY FEATURES OF PARABOLAS:
1. Vertex: the highest or lowest point
2. Axis of symmetry: vertical line through vertex
3. Y-intercept: where graph crosses y-axis (when x = 0)
4. X-intercept(s): where graph crosses x-axis (when y = 0)
   - Can have 0, 1, or 2 x-intercepts

STANDARD FORM: f(x) = ax² + bx + c
Best for: finding y-intercept (it's c)

VERTEX FORM: f(x) = a(x - h)² + k  
Best for: finding vertex (h, k) and graphing

INTERCEPT/FACTORED FORM: f(x) = a(x - p)(x - q)
Best for: finding x-intercepts (p and q)

DETAILED EXAMPLE 1:
Analyze f(x) = 2x² - 8x + 6

Standard form: a = 2, b = -8, c = 6
Opens: upward (a > 0)
Y-intercept: (0, 6)

To find vertex, use x = -b/(2a):
x = -(-8)/(2·2) = 8/4 = 2

Substitute x = 2: f(2) = 2(4) - 16 + 6 = -2
Vertex: (2, -2)

Axis of symmetry: x = 2

DETAILED EXAMPLE 2:
Analyze f(x) = -(x - 3)² + 5

Vertex form: a = -1, h = 3, k = 5
Vertex: (3, 5)
Opens: downward (a < 0)
Axis of symmetry: x = 3
Maximum value: 5 (at vertex)

To find y-intercept, substitute x = 0:
f(0) = -(0 - 3)² + 5 = -9 + 5 = -4
Y-intercept: (0, -4)

DETAILED EXAMPLE 3:
Analyze f(x) = (x - 2)(x + 4)

Intercept form: p = 2, q = -4
X-intercepts: (2, 0) and (-4, 0)

Vertex x-coordinate (midpoint of intercepts):
x = (2 + (-4))/2 = -1

f(-1) = (-1 - 2)(-1 + 4) = (-3)(3) = -9
Vertex: (-1, -9)

To find y-intercept, substitute x = 0:
f(0) = (0 - 2)(0 + 4) = -8
Y-intercept: (0, -8)`,
          practice: {
            question: 'Find the vertex of f(x) = -2(x + 3)² - 1. Enter as (x,y)',
            answer: '(-3,-1)',
            solution: `This is already in vertex form: f(x) = a(x - h)² + k

Given: f(x) = -2(x + 3)² - 1

Rewrite to identify h:
f(x) = -2(x - (-3))² + (-1)

So: h = -3, k = -1

The vertex is (-3, -1)

Additional information:
• a = -2, so parabola opens downward
• |a| = 2 > 1, so it's narrower than y = x²
• Maximum value is -1 (occurs at vertex)`
          }
        },
        {
          title: 'Converting Between Forms',
          content: `Being able to convert between quadratic forms is a crucial skill.

STANDARD TO VERTEX FORM (Completing the Square):

Process for f(x) = ax² + bx + c:

Step 1: Factor out 'a' from x terms
f(x) = a(x² + (b/a)x) + c

Step 2: Complete the square inside parentheses
Take half of (b/a), square it: (b/(2a))²
Add and subtract this inside

Step 3: Simplify to vertex form

DETAILED EXAMPLE 1:
Convert f(x) = x² + 6x + 5 to vertex form

Step 1: Group x terms
f(x) = (x² + 6x) + 5

Step 2: Complete the square
Half of 6 is 3, and 3² = 9
f(x) = (x² + 6x + 9 - 9) + 5
f(x) = (x² + 6x + 9) - 9 + 5
f(x) = (x + 3)² - 4

Vertex: (-3, -4)

DETAILED EXAMPLE 2:
Convert f(x) = 2x² - 12x + 10 to vertex form

Step 1: Factor out 'a' from x terms
f(x) = 2(x² - 6x) + 10

Step 2: Complete the square
Half of -6 is -3, and (-3)² = 9
f(x) = 2(x² - 6x + 9 - 9) + 10
f(x) = 2(x² - 6x + 9) - 2(9) + 10
f(x) = 2(x - 3)² - 18 + 10
f(x) = 2(x - 3)² - 8

Vertex: (3, -8)

VERTEX TO STANDARD FORM:

Simply expand the squared term!

DETAILED EXAMPLE 3:
Convert f(x) = 3(x - 2)² + 1 to standard form

Step 1: Expand (x - 2)²
(x - 2)² = x² - 4x + 4

Step 2: Multiply by a
f(x) = 3(x² - 4x + 4) + 1
f(x) = 3x² - 12x + 12 + 1
f(x) = 3x² - 12x + 13

INTERCEPT TO STANDARD FORM:

Use FOIL or distribution.

DETAILED EXAMPLE 4:
Convert f(x) = 2(x - 3)(x + 1) to standard form

Step 1: First multiply the binomials
(x - 3)(x + 1) = x² + x - 3x - 3 = x² - 2x - 3

Step 2: Multiply by a
f(x) = 2(x² - 2x - 3)
f(x) = 2x² - 4x - 6

STANDARD TO INTERCEPT FORM:

This requires factoring (covered in detail later).

Quick preview:
f(x) = x² + 5x + 6
f(x) = (x + 2)(x + 3)`,
          practice: {
            question: 'Convert f(x) = x² - 8x + 12 to vertex form. What is the k value (the constant)?',
            answer: '-4',
            solution: `Step 1: Group x terms
f(x) = (x² - 8x) + 12

Step 2: Complete the square
Half of -8 is -4
(-4)² = 16

f(x) = (x² - 8x + 16 - 16) + 12
f(x) = (x² - 8x + 16) - 16 + 12
f(x) = (x - 4)² - 4

Vertex form: f(x) = (x - 4)² - 4
The k value is -4

This means the vertex is at (4, -4)`
          }
        }
      ]
    },
    {
      id: 'solving-quadratics',
      title: 'Solving Quadratic Equations',
      sections: [
        {
          title: 'Solving by Square Roots',
          content: `When a quadratic has no x term (b = 0), we can solve by isolating x² and taking square roots.

PROCESS:
1. Isolate the x² term (or squared expression)
2. Take the square root of both sides
3. Remember the ± symbol!

KEY RULE: If x² = a, then x = ±√a

DETAILED EXAMPLE 1:
Solve x² = 36

Step 1: Take square root of both sides
√(x²) = ±√36

Step 2: Simplify
x = ±6

Solutions: x = 6 or x = -6

Check: (6)² = 36 ✓ and (-6)² = 36 ✓

DETAILED EXAMPLE 2:
Solve 3x² - 75 = 0

Step 1: Add 75 to both sides
3x² = 75

Step 2: Divide by 3
x² = 25

Step 3: Take square root
x = ±√25 = ±5

Solutions: x = 5 or x = -5

DETAILED EXAMPLE 3:
Solve (x - 4)² = 16

Step 1: Take square root of both sides
x - 4 = ±√16
x - 4 = ±4

Step 2: Solve both equations
x - 4 = 4  OR  x - 4 = -4
x = 8      OR  x = 0

Solutions: x = 8 or x = 0

Check: (8 - 4)² = 16 ✓ and (0 - 4)² = 16 ✓

DETAILED EXAMPLE 4:
Solve 2(x + 3)² - 50 = 0

Step 1: Add 50 to both sides
2(x + 3)² = 50

Step 2: Divide by 2
(x + 3)² = 25

Step 3: Take square root
x + 3 = ±5

Step 4: Solve both equations
x + 3 = 5   OR  x + 3 = -5
x = 2       OR  x = -8

Solutions: x = 2 or x = -8

DETAILED EXAMPLE 5:
Solve x² = -9

Step 1: Take square root
x = ±√(-9)

Step 2: Recognize imaginary number
x = ±3i

Solutions: x = 3i or x = -3i

(Note: These are complex/imaginary solutions, which we'll explore more later!)`,
          practice: {
            question: 'Solve 5(x - 2)² = 80. Enter the larger solution.',
            answer: '6',
            solution: `Step 1: Divide both sides by 5
(x - 2)² = 16

Step 2: Take square root of both sides
x - 2 = ±4

Step 3: Solve both equations
x - 2 = 4   OR  x - 2 = -4
x = 6       OR  x = -2

The two solutions are x = 6 and x = -2
The larger solution is 6

Verification:
5(6 - 2)² = 5(4)² = 5(16) = 80 ✓
5(-2 - 2)² = 5(-4)² = 5(16) = 80 ✓`
          }
        },
        {
          title: 'Solving by Factoring',
          content: `Factoring is one of the most important methods for solving quadratics.

ZERO PRODUCT PROPERTY:
If ab = 0, then a = 0 OR b = 0

PROCESS:
1. Set equation equal to zero
2. Factor the left side
3. Set each factor equal to zero
4. Solve each equation

FACTORING x² + bx + c:
Find two numbers that:
• Multiply to c
• Add to b

DETAILED EXAMPLE 1:
Solve x² + 7x + 12 = 0

Step 1: Find two numbers that multiply to 12 and add to 7
Think: 3 × 4 = 12 and 3 + 4 = 7 ✓

Step 2: Factor
(x + 3)(x + 4) = 0

Step 3: Set each factor to zero
x + 3 = 0  OR  x + 4 = 0

Step 4: Solve
x = -3  OR  x = -4

Check: (-3)² + 7(-3) + 12 = 9 - 21 + 12 = 0 ✓

DETAILED EXAMPLE 2:
Solve x² - 5x - 14 = 0

Step 1: Find two numbers that multiply to -14 and add to -5
Think: -7 × 2 = -14 and -7 + 2 = -5 ✓

Step 2: Factor
(x - 7)(x + 2) = 0

Step 3: Set each factor to zero
x - 7 = 0  OR  x + 2 = 0

Step 4: Solve
x = 7  OR  x = -2

FACTORING ax² + bx + c (when a ≠ 1):
This is trickier! Use AC method or trial and error.

DETAILED EXAMPLE 3:
Solve 2x² + 7x + 3 = 0

Step 1: Find factors of ac = 2(3) = 6 that add to b = 7
Factors of 6: 1 and 6 (1 + 6 = 7 ✓)

Step 2: Rewrite middle term
2x² + 1x + 6x + 3 = 0

Step 3: Factor by grouping
x(2x + 1) + 3(2x + 1) = 0
(2x + 1)(x + 3) = 0

Step 4: Solve
2x + 1 = 0  OR  x + 3 = 0
x = -1/2    OR  x = -3

DETAILED EXAMPLE 4:
Solve 3x² - 10x - 8 = 0

Step 1: Find factors of ac = 3(-8) = -24 that add to -10
Factors: 2 and -12 (2 + (-12) = -10 ✓)

Step 2: Rewrite
3x² + 2x - 12x - 8 = 0

Step 3: Factor by grouping
x(3x + 2) - 4(3x + 2) = 0
(3x + 2)(x - 4) = 0

Step 4: Solve
3x + 2 = 0  OR  x - 4 = 0
x = -2/3    OR  x = 4`,
          practice: {
            question: 'Solve x² - 9x + 20 = 0. Enter the smaller solution.',
            answer: '4',
            solution: `Step 1: Find two numbers that multiply to 20 and add to -9
Think: -4 and -5 because (-4) × (-5) = 20 and (-4) + (-5) = -9 ✓

Step 2: Factor
(x - 4)(x - 5) = 0

Step 3: Set each factor to zero
x - 4 = 0  OR  x - 5 = 0

Step 4: Solve
x = 4  OR  x = 5

The solutions are x = 4 and x = 5
The smaller solution is 4

Verification: (4)² - 9(4) + 20 = 16 - 36 + 20 = 0 ✓`
          }
        },
        {
          title: 'The Quadratic Formula',
          content: `The quadratic formula solves ANY quadratic equation, even when factoring is difficult or impossible!

FORMULA: x = (-b ± √(b² - 4ac)) / (2a)

For equation: ax² + bx + c = 0

THE DISCRIMINANT: b² - 4ac
This tells us about the solutions:
• If b² - 4ac > 0: two real solutions
• If b² - 4ac = 0: one real solution
• If b² - 4ac < 0: two complex (imaginary) solutions

PROCESS:
1. Write equation in standard form ax² + bx + c = 0
2. Identify a, b, and c
3. Calculate discriminant b² - 4ac
4. Substitute into formula
5. Simplify

DETAILED EXAMPLE 1:
Solve 2x² + 5x - 3 = 0

Step 1: Identify coefficients
a = 2, b = 5, c = -3

Step 2: Calculate discriminant
b² - 4ac = (5)² - 4(2)(-3)
= 25 + 24 = 49

Step 3: Since discriminant > 0, we have two real solutions

Step 4: Apply formula
x = (-5 ± √49) / (2·2)
x = (-5 ± 7) / 4

Step 5: Solve both
x = (-5 + 7)/4 = 2/4 = 1/2
x = (-5 - 7)/4 = -12/4 = -3

Solutions: x = 1/2 or x = -3

DETAILED EXAMPLE 2:
Solve x² - 6x + 9 = 0

Step 1: a = 1, b = -6, c = 9

Step 2: Discriminant
b² - 4ac = 36 - 36 = 0

Step 3: One solution (discriminant = 0)

Step 4: Apply formula
x = (6 ± √0) / 2
x = 6/2 = 3

Solution: x = 3 (This is called a double root)

DETAILED EXAMPLE 3:
Solve 3x² + 2x - 8 = 0

Step 1: a = 3, b = 2, c = -8

Step 2: Discriminant
b² - 4ac = 4 - 4(3)(-8)
= 4 + 96 = 100

Step 3: Apply formula
x = (-2 ± √100) / 6
x = (-2 ± 10) / 6

Step 4: Solve both
x = (-2 + 10)/6 = 8/6 = 4/3
x = (-2 - 10)/6 = -12/6 = -2

Solutions: x = 4/3 or x = -2

DETAILED EXAMPLE 4:
Solve x² + 4x + 7 = 0

Step 1: a = 1, b = 4, c = 7

Step 2: Discriminant
b² - 4ac = 16 - 28 = -12

Step 3: Negative discriminant means complex solutions!

Step 4: Apply formula
x = (-4 ± √(-12)) / 2
x = (-4 ± 2i√3) / 2
x = -2 ± i√3

Solutions: x = -2 + i√3 or x = -2 - i√3`,
          practice: {
            question: 'Solve x² + 8x + 12 = 0 using the quadratic formula. Enter the larger solution.',
            answer: '-2',
            solution: `Step 1: Identify a, b, c
a = 1, b = 8, c = 12

Step 2: Calculate discriminant
b² - 4ac = 64 - 48 = 16

Step 3: Apply quadratic formula
x = (-8 ± √16) / 2
x = (-8 ± 4) / 2

Step 4: Find both solutions
x = (-8 + 4)/2 = -4/2 = -2
x = (-8 - 4)/2 = -12/2 = -6

The two solutions are x = -2 and x = -6
The larger solution is -2

Verification: (-2)² + 8(-2) + 12 = 4 - 16 + 12 = 0 ✓`
          }
        }
      ]
    },
    {
      id: 'complex-numbers',
      title: 'Complex & Imaginary Numbers',
      sections: [
        {
          title: 'Introduction to Imaginary Numbers',
          content: `Real numbers cannot solve x² = -1. So mathematicians created a new number!

DEFINITION: i = √(-1)

FUNDAMENTAL PROPERTY: i² = -1

POWERS OF i (this pattern repeats):
i¹ = i
i² = -1
i³ = i² · i = -1 · i = -i
i⁴ = i² · i² = (-1)(-1) = 1
i⁵ = i⁴ · i = 1 · i = i (pattern repeats!)

SIMPLIFYING SQUARE ROOTS OF NEGATIVE NUMBERS:
√(-a) = i√a

DETAILED EXAMPLE 1:
Simplify √(-16)

Step 1: Factor out -1
√(-16) = √(-1 · 16)

Step 2: Separate
√(-1) · √16 = i · 4 = 4i

DETAILED EXAMPLE 2:
Simplify √(-50)

Step 1: Factor
√(-50) = √(-1 · 50) = i√50

Step 2: Simplify √50
√50 = √(25 · 2) = 5√2

Step 3: Final answer
i · 5√2 = 5i√2

DETAILED EXAMPLE 3:
Calculate i¹⁸

Step 1: Divide exponent by 4 to find pattern position
18 ÷ 4 = 4 remainder 2

Step 2: So i¹⁸ = i²
i¹⁸ = i² = -1

DETAILED EXAMPLE 4:
Calculate i³⁵

Step 1: 35 ÷ 4 = 8 remainder 3

Step 2: So i³⁵ = i³
i³⁵ = i³ = -i

SIMPLIFYING EXPRESSIONS WITH i:

DETAILED EXAMPLE 5:
Simplify 3i · 2i

Step 1: Multiply coefficients and i's
3i · 2i = 6i²

Step 2: Replace i² with -1
6i² = 6(-1) = -6

DETAILED EXAMPLE 6:
Simplify (2i)²

Step 1: Square the coefficient and i
(2i)² = 4i²

Step 2: Replace i²
4i² = 4(-1) = -4`,
          practice: {
            question: 'Simplify √(-36). Enter answer in form ai (no spaces).',
            answer: '6i',
            solution: `Step 1: Factor out -1
√(-36) = √(-1 · 36)

Step 2: Separate the square roots
√(-1) · √36 = i · 6 = 6i

Answer: 6i`
          }
        },
        {
          title: 'Complex Numbers',
          content: `A complex number combines a real part and an imaginary part.

STANDARD FORM: a + bi
Where:
• a = real part
• b = coefficient of imaginary part
• bi = imaginary part

EXAMPLES:
3 + 4i: real part = 3, imaginary part = 4i
-2 - 5i: real part = -2, imaginary part = -5i
7i: real part = 0, imaginary part = 7i
5: real part = 5, imaginary part = 0

ADDING AND SUBTRACTING COMPLEX NUMBERS:
Combine like terms (real with real, imaginary with imaginary)

DETAILED EXAMPLE 1:
(3 + 5i) + (2 + 7i)

Step 1: Group real and imaginary parts
(3 + 2) + (5i + 7i)

Step 2: Simplify
5 + 12i

DETAILED EXAMPLE 2:
(8 - 3i) - (2 + 4i)

Step 1: Distribute negative
8 - 3i - 2 - 4i

Step 2: Combine like terms
(8 - 2) + (-3i - 4i)
6 - 7i

MULTIPLYING COMPLEX NUMBERS:
Use FOIL and remember i² = -1

DETAILED EXAMPLE 3:
(2 + 3i)(1 + 4i)

Step 1: FOIL
F: 2 · 1 = 2
O: 2 · 4i = 8i
I: 3i · 1 = 3i
L: 3i · 4i = 12i²

Step 2: Combine
2 + 8i + 3i + 12i²
2 + 11i + 12i²

Step 3: Replace i² with -1
2 + 11i + 12(-1)
2 + 11i - 12
-10 + 11i

DETAILED EXAMPLE 4:
(3 - 2i)(3 + 2i)

This is the pattern (a - bi)(a + bi)
Result: a² + b² (all real!)

Step 1: FOIL
9 + 6i - 6i - 4i²
9 - 4i²
9 - 4(-1)
9 + 4 = 13

COMPLEX CONJUGATES:
The conjugate of a + bi is a - bi
• Multiply a complex number by its conjugate to get a real number
• Used for dividing complex numbers

DIVIDING COMPLEX NUMBERS:
Multiply numerator and denominator by the conjugate of the denominator

DETAILED EXAMPLE 5:
Simplify (3 + 2i) / (1 - i)

Step 1: Identify conjugate of denominator
Conjugate of (1 - i) is (1 + i)

Step 2: Multiply top and bottom by conjugate
[(3 + 2i)(1 + i)] / [(1 - i)(1 + i)]

Step 3: Multiply numerator
3 + 3i + 2i + 2i² = 3 + 5i - 2 = 1 + 5i

Step 4: Multiply denominator
1 + i - i - i² = 1 + 1 = 2

Step 5: Simplify
(1 + 5i) / 2 = 1/2 + 5/2 i`,
          practice: {
            question: 'Multiply (4 + i)(2 - 3i). Enter in form a+bi (no spaces).',
            answer: '11-10i',
            solution: `Step 1: Use FOIL
F: 4 · 2 = 8
O: 4 · (-3i) = -12i
I: i · 2 = 2i
L: i · (-3i) = -3i²

Step 2: Combine
8 - 12i + 2i - 3i²
8 - 10i - 3i²

Step 3: Replace i² with -1
8 - 10i - 3(-1)
8 - 10i + 3
11 - 10i

Answer: 11 - 10i`
          }
        },
        {
          title: 'Quadratic Equations with Complex Solutions',
          content: `When the discriminant (b² - 4ac) is negative, quadratic equations have complex solutions.

REMEMBER: The solutions are complex conjugates of each other!
If one solution is a + bi, the other is a - bi

PROCESS:
1. Identify that discriminant < 0
2. Use quadratic formula
3. Simplify square root of negative number using i
4. Write both complex solutions

DETAILED EXAMPLE 1:
Solve x² + 4x + 13 = 0

Step 1: Find discriminant
a = 1, b = 4, c = 13
b² - 4ac = 16 - 52 = -36 (negative!)

Step 2: Apply quadratic formula
x = (-4 ± √(-36)) / 2

Step 3: Simplify √(-36)
√(-36) = 6i

Step 4: Continue simplifying
x = (-4 ± 6i) / 2
x = -2 ± 3i

Solutions: x = -2 + 3i or x = -2 - 3i

DETAILED EXAMPLE 2:
Solve x² - 2x + 5 = 0

Step 1: Check discriminant
b² - 4ac = 4 - 20 = -16

Step 2: Apply formula
x = (2 ± √(-16)) / 2
x = (2 ± 4i) / 2
x = 1 ± 2i

Solutions: x = 1 + 2i or x = 1 - 2i

DETAILED EXAMPLE 3:
Solve 2x² + 4x + 10 = 0

Step 1: Simplify by dividing by 2
x² + 2x + 5 = 0

Step 2: Check discriminant
b² - 4ac = 4 - 20 = -16

Step 3: Apply formula
x = (-2 ± √(-16)) / 2
x = (-2 ± 4i) / 2
x = -1 ± 2i

Solutions: x = -1 + 2i or x = -1 - 2i

VERIFYING COMPLEX SOLUTIONS:
Substitute back into original equation

DETAILED EXAMPLE 4:
Verify x = 2 + i is a solution to x² - 4x + 5 = 0

Step 1: Substitute
(2 + i)² - 4(2 + i) + 5 = 0

Step 2: Calculate (2 + i)²
(2 + i)² = 4 + 4i + i² = 4 + 4i - 1 = 3 + 4i

Step 3: Calculate -4(2 + i)
-4(2 + i) = -8 - 4i

Step 4: Add all terms
(3 + 4i) + (-8 - 4i) + 5 = 0
3 + 4i - 8 - 4i + 5 = 0
0 = 0 ✓

GRAPHICAL INTERPRETATION:
Complex solutions mean the parabola doesn't cross the x-axis!`,
          practice: {
            question: 'Solve x² + 2x + 10 = 0. What is the real part of the solutions?',
            answer: '-1',
            solution: `Step 1: Identify coefficients
a = 1, b = 2, c = 10

Step 2: Calculate discriminant
b² - 4ac = 4 - 40 = -36 (negative!)

Step 3: Apply quadratic formula
x = (-2 ± √(-36)) / 2

Step 4: Simplify
√(-36) = 6i
x = (-2 ± 6i) / 2
x = -1 ± 3i

The solutions are x = -1 + 3i and x = -1 - 3i

The real part of both solutions is -1`
          }
        }
      ]
    }
  ];

  // Generate practice questions
  const generatePracticeQuestion = (lessonIndex) => {
    const lesson = lessons[lessonIndex];
    const questions = [];
    
    if (lessonIndex === 0) { // Linear Forms
      const types = ['slopeIntercept', 'pointSlope', 'standard'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      if (type === 'slopeIntercept') {
        const m = Math.floor(Math.random() * 10) - 5;
        const b = Math.floor(Math.random() * 20) - 10;
        const x = Math.floor(Math.random() * 5) + 1;
        const y = m * x + b;
        return {
          question: `A line passes through (${x}, ${y}) with slope ${m}. Write in slope-intercept form.`,
          answer: `y=${m}x+${b}`,
          solution: `Using y = mx + b with slope ${m}:
${y} = ${m}(${x}) + b
${y} = ${m * x} + b
b = ${b}
Answer: y = ${m}x + ${b > 0 ? '+' : ''}${b}`
        };
      } else if (type === 'pointSlope') {
        const m = Math.floor(Math.random() * 8) - 4;
        const x1 = Math.floor(Math.random() * 10) - 5;
        const y1 = Math.floor(Math.random() * 10) - 5;
        return {
          question: `Write point-slope form for slope ${m} through (${x1}, ${y1}), then convert to slope-intercept.`,
          answer: `y=${m}x+${y1 - m * x1}`,
          solution: `Point-slope: y - ${y1} = ${m}(x - ${x1})
Slope-intercept: y = ${m}x + ${y1 - m * x1}`
        };
      } else {
        const a = Math.floor(Math.random() * 5) + 1;
        const b = Math.floor(Math.random() * 5) + 1;
        const c = Math.floor(Math.random() * 20) - 10;
        return {
          question: `Convert ${a}x + ${b}y = ${c} to slope-intercept form.`,
          answer: `y=${-a / b}x+${c / b}`,
          solution: `${b}y = -${a}x + ${c}
y = ${-a / b}x + ${c / b}`
        };
      }
    } else if (lessonIndex === 1) { // Absolute Value
      const types = ['solve', 'vertex'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      if (type === 'solve') {
        const a = Math.floor(Math.random() * 5) + 1;
        const b = Math.floor(Math.random() * 10) - 5;
        const c = Math.floor(Math.random() * 15) + 5;
        return {
          question: `Solve |${a}x + ${b}| = ${c}. Enter the larger solution.`,
          answer: `${(c - b) / a}`,
          solution: `Set up two equations:
${a}x + ${b} = ${c} or ${a}x + ${b} = ${-c}
x = ${(c - b) / a} or x = ${(-c - b) / a}
Larger solution: ${Math.max((c - b) / a, (-c - b) / a)}`
        };
      } else {
        const h = Math.floor(Math.random() * 10) - 5;
        const k = Math.floor(Math.random() * 10) - 5;
        const a = [2, -2, 3, -3, 0.5, -0.5][Math.floor(Math.random() * 6)];
        return {
          question: `What is the vertex of y = ${a}|x - ${h}| + ${k}? Enter as (x,y)`,
          answer: `(${h},${k})`,
          solution: `Vertex form is y = a|x - h| + k
Vertex is (h, k) = (${h}, ${k})`
        };
      }
    } else if (lessonIndex === 2) { // Quadratics - Forms
      const h = Math.floor(Math.random() * 8) - 4;
      const k = Math.floor(Math.random() * 10) - 5;
      const a = [1, 2, -1, -2, 3][Math.floor(Math.random() * 5)];
      return {
        question: `What is the vertex of f(x) = ${a}(x - ${h})² + ${k}?`,
        answer: `(${h},${k})`,
        solution: `Vertex form: f(x) = a(x - h)² + k
Vertex = (h, k) = (${h}, ${k})
Opens ${a > 0 ? 'upward' : 'downward'}`
      };
    } else if (lessonIndex === 3) { // Solving Quadratics
      const types = ['squareRoots', 'factoring', 'formula'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      if (type === 'squareRoots') {
        const a = Math.floor(Math.random() * 3) + 2;
        const c = (Math.floor(Math.random() * 5) + 2) ** 2;
        return {
          question: `Solve ${a}x² = ${a * c}. Enter positive solution.`,
          answer: `${Math.sqrt(c)}`,
          solution: `Divide by ${a}: x² = ${c}
Take square root: x = ±${Math.sqrt(c)}
Positive solution: ${Math.sqrt(c)}`
        };
      } else if (type === 'factoring') {
        const p = Math.floor(Math.random() * 7) + 1;
        const q = Math.floor(Math.random() * 7) + 1;
        const b = p + q;
        const c = p * q;
        return {
          question: `Solve x² + ${b}x + ${c} = 0 by factoring. Enter smaller solution.`,
          answer: `${-Math.max(p, q)}`,
          solution: `Factor: (x + ${p})(x + ${q}) = 0
Solutions: x = ${-p} or x = ${-q}
Smaller: ${-Math.max(p, q)}`
        };
      } else {
        const a = 1;
        const b = Math.floor(Math.random() * 8) + 2;
        const c = Math.floor(Math.random() * 10) + 1;
        const disc = b * b - 4 * a * c;
        const ans = (-b + Math.sqrt(Math.abs(disc))) / 2;
        return {
          question: `Solve x² + ${b}x + ${c} = 0 using quadratic formula. Enter larger solution (round to 1 decimal).`,
          answer: `${ans.toFixed(1)}`,
          solution: `a = 1, b = ${b}, c = ${c}
Discriminant = ${disc}
x = (${-b} ± √${disc}) / 2
x ≈ ${ans.toFixed(1)} or ${((-b - Math.sqrt(Math.abs(disc))) / 2).toFixed(1)}`
        };
      }
    } else if (lessonIndex === 4) { // Complex Numbers
      const types = ['simplify', 'multiply', 'solve'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      if (type === 'simplify') {
        const a = Math.floor(Math.random() * 8) + 2;
        const sq = a * a;
        return {
          question: `Simplify √(-${sq}). Enter as ai (no spaces).`,
          answer: `${a}i`,
          solution: `√(-${sq}) = √(-1 · ${sq}) = i · ${a} = ${a}i`
        };
      } else if (type === 'multiply') {
        const a = Math.floor(Math.random() * 5) + 1;
        const b = Math.floor(Math.random() * 5) + 1;
        const c = Math.floor(Math.random() * 5) + 1;
        const d = Math.floor(Math.random() * 5) + 1;
        const real = a * c - b * d;
        const imag = a * d + b * c;
        return {
          question: `Multiply (${a}+${b}i)(${c}+${d}i). Enter as a+bi (no spaces).`,
          answer: `${real}+${imag}i`,
          solution: `FOIL: ${a * c} + ${a * d}i + ${b * c}i + ${b * d}i²
= ${a * c} + ${a * d + b * c}i - ${b * d}
= ${real} + ${imag}i`
        };
      } else {
        const b = Math.floor(Math.random() * 6) + 2;
        const c = Math.floor(Math.random() * 10) + 5;
        const disc = b * b - 4 * c;
        if (disc >= 0) return generatePracticeQuestion(lessonIndex);
        const realPart = -b / 2;
        return {
          question: `Solve x² + ${b}x + ${c} = 0. What is the real part?`,
          answer: `${realPart}`,
          solution: `Discriminant = ${disc} < 0, so complex solutions
x = (${-b} ± √(${disc})) / 2
Real part = ${realPart}`
        };
      }
    }
  };

  const checkPracticeAnswer = () => {
    if (!currentPracticeQuestion) return;
    
    const userClean = userAnswer.toLowerCase().replace(/\s/g, '').replace(/[()]/g, '');
    const correctClean = currentPracticeQuestion.answer.toLowerCase().replace(/\s/g, '').replace(/[()]/g, '');
    
    const correct = userClean === correctClean || 
                   Math.abs(parseFloat(userClean) - parseFloat(correctClean)) < 0.15;
    
    setFeedback(correct ? 'correct' : 'incorrect');
    setPracticeScore(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1
    }));
    
    if (!correct) {
      setShowSolution(true);
    }
  };

  const nextPracticeQuestion = () => {
    setCurrentPracticeQuestion(generatePracticeQuestion(practiceLesson));
    setUserAnswer('');
    setFeedback(null);
    setShowSolution(false);
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
                <p className="text-gray-600 text-sm sm:text-base">Master algebra from basics to advanced</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setMode('learn')}
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
            </div>
          </div>
        </div>

        {mode === 'learn' ? (
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
            {/* Lesson Navigation */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">LESSONS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {lessons.map((lesson, idx) => (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      setCurrentLesson(idx);
                      setCurrentSection(0);
                      setUserAnswer('');
                      setFeedback(null);
                      setShowSolution(false);
                    }}
                    className={`p-4 rounded-lg text-left transition-all ${
                      currentLesson === idx
                        ? 'bg-indigo-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-xs font-bold mb-1">LESSON {idx + 1}</div>
                    <div className="text-sm font-medium">{lesson.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Section Navigation */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">SECTIONS</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {currentLessonData.sections.map((section, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSection(idx);
                      setUserAnswer('');
                      setFeedback(null);
                      setShowSolution(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      currentSection === idx
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                    }`}
                  >
                    {idx + 1}. {section.title.split(' - ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Section {currentSection + 1} of {currentLessonData.sections.length}</span>
                <span>{Math.round(((currentSection + 1) / currentLessonData.sections.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${((currentSection + 1) / currentLessonData.sections.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 sm:p-8 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-4">
                {currentSectionData.title}
              </h2>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                  {currentSectionData.content}
                </div>
              </div>
            </div>

            {/* Practice Problem */}
            {currentSectionData.practice && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="text-yellow-700" size={24} />
                  <h3 className="text-xl font-bold text-yellow-900">Practice Problem</h3>
                </div>
                <p className="text-gray-800 mb-4 text-lg">{currentSectionData.practice.question}</p>
                
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
                                       currentSectionData.practice.answer.toLowerCase().replace(/\s/g, '').replace(/[()]/g, '');
                        setFeedback(correct ? 'correct' : 'incorrect');
                        if (!correct) setShowSolution(true);
                      }
                    }}
                    placeholder="Enter your answer"
                    className="flex-1 px-4 py-3 border-2 border-yellow-300 rounded-lg focus:outline-none focus:border-yellow-500 text-lg"
                  />
                  <button
                    onClick={() => {
                      const correct = userAnswer.toLowerCase().replace(/\s/g, '').replace(/[()]/g, '') === 
                                     currentSectionData.practice.answer.toLowerCase().replace(/\s/g, '').replace(/[()]/g, '');
                      setFeedback(correct ? 'correct' : 'incorrect');
                      if (!correct) setShowSolution(true);
                    }}
                    className="px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-semibold transition-colors"
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
                        <span className="font-semibold text-lg">Perfect! You got it right!</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={24} />
                        <span className="font-semibold text-lg">Not quite. Check the solution below!</span>
                      </>
                    )}
                  </div>
                )}

                {showSolution && (
                  <div className="bg-white border-2 border-blue-300 rounded-lg p-6 mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <HelpCircle className="text-blue-600" size={24} />
                      <h4 className="text-lg font-bold text-blue-900">Step-by-Step Solution</h4>
                    </div>
                    <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                      {currentSectionData.practice.solution}
                    </div>
                  </div>
                )}

                {!showSolution && feedback !== 'correct' && (
                  <button
                    onClick={() => setShowSolution(true)}
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium"
                  >
                    <HelpCircle size={20} />
                    Show Solution
                  </button>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center gap-4">
              <button
                onClick={() => {
                  if (currentSection > 0) {
                    setCurrentSection(currentSection - 1);
                  } else if (currentLesson > 0) {
                    setCurrentLesson(currentLesson - 1);
                    setCurrentSection(lessons[currentLesson - 1].sections.length - 1);
                  }
                  setUserAnswer('');
                  setFeedback(null);
                  setShowSolution(false);
                }}
                disabled={currentLesson === 0 && currentSection === 0}
                className="flex items-center gap-2 px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
              >
                <ArrowLeft size={20} />
                Previous
              </button>
              
              <button
                onClick={() => {
                  setUserAnswer('');
                  setFeedback(null);
                  setShowSolution(false);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
              >
                <RotateCcw size={20} />
                Reset
              </button>

              <button
                onClick={() => {
                  if (currentSection < currentLessonData.sections.length - 1) {
                    setCurrentSection(currentSection + 1);
                  } else if (currentLesson < lessons.length - 1) {
                    setCurrentLesson(currentLesson + 1);
                    setCurrentSection(0);
                  }
                  setUserAnswer('');
                  setFeedback(null);
                  setShowSolution(false);
                }}
                disabled={currentLesson === lessons.length - 1 && currentSection === currentLessonData.sections.length - 1}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
              >
                Next
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          // Practice Mode
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">Practice Mode</h2>
              <p className="text-gray-600 mb-4">Select a topic and practice unlimited questions!</p>
              
              {/* Topic Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
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
                    <div className="font-semibold">{lesson.title}</div>
                  </button>
                ))}
              </div>

              {/* Score */}
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

              {/* Current Question */}
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
                      onKeyPress={(e) => e.key === 'Enter' && checkPracticeAnswer()}
                      placeholder="Enter your answer"
                      className="flex-1 px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
                    />
                    <button
                      onClick={checkPracticeAnswer}
                      className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold transition-colors"
                    >
                      Submit
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
                            <span className="font-semibold text-lg block">Correct! Excellent work!</span>
                          </div>
                          <button
                            onClick={nextPracticeQuestion}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                          >
                            Next Question
                          </button>
                        </>
                      ) : (
                        <>
                          <XCircle size={24} />
                          <span className="font-semibold text-lg">Incorrect. Review the solution below.</span>
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
                      <div className="whitespace-pre-line text-gray-800 leading-relaxed mb-4">
                        {currentPracticeQuestion.solution}
                      </div>
                      <button
                        onClick={nextPracticeQuestion}
                        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
                      >
                        Try Another Question
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlgebraLearning;
