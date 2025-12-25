// Loading Data
fetch("./data.json")
  .then(r => r.json())
  .then(score => {

    // show data in HTML
    document.getElementById("overall").innerText = score.overall;
    document.getElementById("p_score").innerText = score.pronunciation;
    document.getElementById("f_score").innerText = score.fluency;
    document.getElementById("v_score").innerText = score.vocabulary;
    document.getElementById("g_score").innerText = score.grammar;

    // feedback logic
    let fb;
    if (score.overall >= 8) fb = "Excellent. Strong speaking control.";
    else if (score.overall >= 6) fb = "Good level but can improve accuracy.";
    else fb = "Needs improvement with basics.";

    document.getElementById("feedback").innerText = fb;

    // chart
    new Chart(document.getElementById("chartCanvas"), {
      type: "bar",
      data: {
        labels: ["Pronunciation", "Fluency", "Vocabulary", "Grammar"],
        datasets: [{
          label: "Scores",
          backgroundColor: "lightblue",
          data: [
            score.pronunciation,
            score.fluency,
            score.vocabulary,
            score.grammar
          ]
        }]
      }
    });

  });
