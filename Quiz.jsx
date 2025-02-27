import { useState, useEffect } from "react";

function Quiz() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await fetch(
                    "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
                );
                const data = await response.json();
                setQuestions(data.results);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        }
        fetchQuestions();
    }, []);

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Quiz Game</h1>
            {questions.length > 0 ? (
                questions.map((q, index) => (
                    <div key={index} className="mb-6 p-4 border rounded-lg shadow">
                        <h2 className="text-lg font-semibold">{q.question}</h2>
                        <ul className="mt-2">
                            {[...q.incorrect_answers, q.correct_answer]
                                .sort(() => Math.random() - 0.5) // Shuffle answers
                                .map((answer, i) => (
                                    <li key={i} className="p-2 border rounded hover:bg-gray-200 cursor-pointer">
                                        {answer}
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Loading questions...</p>
            )}
        </div>
    );
}

export default Quiz;
