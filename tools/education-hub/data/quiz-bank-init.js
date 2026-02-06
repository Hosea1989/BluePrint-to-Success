// Quiz Bank - Shared initialization
// Each category file adds its questions to this global object
const quizBank = {};

// Compact question helper
function _q(question, a, b, c, d, correct, explanation) {
    return { question, options: [a, b, c, d], correct, explanation };
}
