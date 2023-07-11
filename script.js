document.addEventListener('DOMContentLoaded', function() {
    const questionsContainer = document.getElementById('questions-container');
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const submitBtn = document.getElementById('submit-btn');
  
    submitBtn.addEventListener('click', function() {
      // Obtener las respuestas seleccionadas
      const selectedAnswers = [];
      const radios = document.querySelectorAll('input[type="radio"]:checked');
      radios.forEach(function(radio) {
        selectedAnswers.push(radio.value);
      });
  
      // Calcular el resultado basado en las respuestas seleccionadas
      const result = calculateResult(selectedAnswers);
  
      // Mostrar el resultado
      questionsContainer.style.display = 'none';
      resultContainer.style.display = 'block';
      resultText.textContent = result;
    });
  
    function calculateResult(answers) {
      // Lógica para calcular el resultado basado en las respuestas
      // Aquí puedes personalizar la lógica según tus preguntas y opciones de respuesta
  
      // Ejemplo de lógica simple
      let result = 'Eres una persona creativa';
      if (answers.includes('introvertido')) {
        result = 'Eres una persona analítica';
      }
      return result;
    }
  });
  